<?php

declare(strict_types=1);

namespace App\Actions;

use App\Enums\ProjectStatus;
use App\Models\Coupon;
use App\Models\Project;
use Exception;
use Illuminate\Support\Facades\DB;

final readonly class GenerateCoupons
{
    public function handle(Project $project): void
    {
        if ($project->status !== ProjectStatus::Draft && $project->status !== ProjectStatus::Generating) {
            throw new Exception('Project must be in draft status to generate coupons.');
        }

        $project->update(['status' => ProjectStatus::Generating]);

        DB::transaction(function () use ($project): void {
            // Reset existing data if any
            $project->boxes()->delete();
            $project->coupons()->delete();

            $tiers = $project->prizeTiers()->get();

            // Prepare the pool of prizes for a SINGLE box
            $boxPoolTemplate = [];
            foreach ($tiers as $tier) {
                for ($i = 0; $i < $tier->per_box_quantity; $i++) {
                    $boxPoolTemplate[] = [
                        'tier_id' => $tier->id,
                        'amount' => $tier->amount,
                    ];
                }
            }

            if (count($boxPoolTemplate) !== $project->coupons_per_box) {
                throw new Exception('The total per_box_quantity of prize tiers does not match the project coupons_per_box.');
            }

            for ($boxNumber = 1; $boxNumber <= $project->total_boxes; $boxNumber++) {
                $batchNumber = (int) ceil($boxNumber / $project->boxes_per_batch);

                $batch = $project->batches()->updateOrCreate(
                    ['batch_number' => $batchNumber],
                    [
                        'user_id' => auth()->id(),
                        'location' => 'HQ Production Facility',
                        'produced_at' => now(),
                    ]
                );

                $box = $project->boxes()->create([
                    'batch_id' => $batch->id,
                    'box_number' => $boxNumber,
                ]);

                $pool = $this->randomizePool($boxPoolTemplate);

                $couponsToInsert = [];
                foreach ($pool as $index => $item) {
                    $position = $index + 1;
                    $serialNumber = mb_str_pad((string) ((($boxNumber - 1) * $project->coupons_per_box) + $position), 5, '0', STR_PAD_LEFT);

                    $couponsToInsert[] = [
                        'project_id' => $project->id,
                        'box_id' => $box->id,
                        'prize_tier_id' => $item['tier_id'],
                        'serial_number' => $serialNumber,
                        'position_in_box' => $position,
                        'created_at' => now(),
                        'updated_at' => now(),
                    ];
                }

                foreach (array_chunk($couponsToInsert, 1000) as $chunk) {
                    Coupon::insert($chunk);
                }
            }
        });

        $project->update(['status' => ProjectStatus::Ready]);
    }

    /**
     * @param  array<int, array{tier_id: int, amount: int}>  $pool
     * @return array<int, array{tier_id: int, amount: int}>
     */
    private function randomizePool(array $pool): array
    {
        shuffle($pool);

        $fixed = false;
        $attempts = 0;

        while (! $fixed && $attempts < 1000) {
            $fixed = true;
            $attempts++;

            for ($i = 1; $i < count($pool); $i++) {
                if ($pool[$i]['amount'] > 0 && $pool[$i]['amount'] === $pool[$i - 1]['amount']) {
                    $fixed = false;

                    $swapped = false;
                    for ($j = $i + 1; $j < count($pool); $j++) {
                        if ($pool[$j]['amount'] !== $pool[$i]['amount']) {
                            // Check if swapping causes a new violation at $j
                            $canSwap = true;
                            if ($j > 0 && $pool[$j - 1]['amount'] === $pool[$i]['amount'] && $pool[$i]['amount'] > 0) {
                                $canSwap = false;
                            }
                            if ($j < count($pool) - 1 && $pool[$j + 1]['amount'] === $pool[$i]['amount'] && $pool[$i]['amount'] > 0) {
                                $canSwap = false;
                            }

                            if ($canSwap) {
                                $temp = $pool[$i];
                                $pool[$i] = $pool[$j];
                                $pool[$j] = $temp;
                                $swapped = true;
                                break;
                            }
                        }
                    }

                    if (! $swapped) {
                        for ($j = $i + 1; $j < count($pool); $j++) {
                            if ($pool[$j]['amount'] === 0) {
                                $temp = $pool[$i];
                                $pool[$i] = $pool[$j];
                                $pool[$j] = $temp;
                                break;
                            }
                        }
                    }
                }
            }
        }

        return $pool;
    }
}

<?php

declare(strict_types=1);

use App\Actions\GenerateCoupons;
use App\Enums\ProjectStatus;
use App\Models\PrizeTier;
use App\Models\Project;
use App\Models\User;

uses(Illuminate\Foundation\Testing\LazilyRefreshDatabase::class);

it('generates coupons and enforces no consecutive identical prizes', function (): void {
    $user = User::factory()->create();
    $project = Project::factory()->create([
        'created_by' => $user->id,
        'total_coupons' => 10000,
        'coupons_per_box' => 1000,
        'total_boxes' => 10,
        'total_batches' => 2,
        'boxes_per_batch' => 5,
        'status' => ProjectStatus::Draft,
    ]);

    // Setup Prize Tiers based on requirement
    PrizeTier::factory()->create(['project_id' => $project->id, 'amount' => 100000, 'total_quantity' => 50, 'per_box_quantity' => 5]);
    PrizeTier::factory()->create(['project_id' => $project->id, 'amount' => 50000, 'total_quantity' => 100, 'per_box_quantity' => 10]);
    PrizeTier::factory()->create(['project_id' => $project->id, 'amount' => 20000, 'total_quantity' => 250, 'per_box_quantity' => 25]);
    PrizeTier::factory()->create(['project_id' => $project->id, 'amount' => 10000, 'total_quantity' => 500, 'per_box_quantity' => 50]);
    PrizeTier::factory()->create(['project_id' => $project->id, 'amount' => 5000, 'total_quantity' => 1000, 'per_box_quantity' => 100]);
    PrizeTier::factory()->noPrize()->create(['project_id' => $project->id, 'total_quantity' => 8100, 'per_box_quantity' => 810]);

    $action = new GenerateCoupons();
    $action->handle($project);

    expect($project->fresh()->status)->toBe(ProjectStatus::Ready);
    expect($project->batches()->count())->toBe(2);
    expect($project->boxes()->count())->toBe(10);
    expect($project->coupons()->count())->toBe(10000);

    // Verify constraints per box
    $boxes = $project->boxes()->get();
    foreach ($boxes as $box) {
        $coupons = $box->coupons()->with('prizeTier')->orderBy('position_in_box')->get();
        expect($coupons)->toHaveCount(1000);

        // Verify counts
        $tierCounts = $coupons->countBy('prize_tier_id')->toArray();
        $tiers = $project->prizeTiers()->get();
        foreach ($tiers as $tier) {
            expect($tierCounts[$tier->id])->toBe($tier->per_box_quantity);
        }

        // Verify no consecutive identical prizes (except no prize)
        $previousAmount = -1;
        foreach ($coupons as $coupon) {
            $amount = $coupon->prizeTier->amount;
            if ($amount > 0) {
                expect($amount)->not->toBe($previousAmount, 'Consecutive identical prize found in box '.$box->box_number);
            }
            $previousAmount = $amount;
        }
    }
});

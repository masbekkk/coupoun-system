<?php

declare(strict_types=1);

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Batch;
use Illuminate\Http\JsonResponse;

final class BatchReportController extends Controller
{
    public function show(Batch $batch): JsonResponse
    {
        $batch->load(['project', 'boxes.coupons.prizeTier', 'operator']);

        $boxesData = $batch->boxes->map(function ($box) {
            // Count distribution of prizes per box
            $distribution = [];
            foreach ($box->coupons as $coupon) {
                $prizeName = $coupon->prizeTier->name;
                $distribution[$prizeName] = ($distribution[$prizeName] ?? 0) + 1;
            }

            return [
                'box_number' => $box->box_number,
                'total_coupons' => $box->coupons->count(),
                'prize_distribution' => $distribution,
            ];
        });

        return response()->json([
            'data' => [
                'batch_number' => $batch->batch_number,
                'project_name' => $batch->project->name,
                'operator' => [
                    'id' => $batch->operator?->id,
                    'name' => $batch->operator?->name,
                ],
                'location' => $batch->location,
                'status' => $batch->status->value,
                'produced_at' => $batch->produced_at?->toIso8601String(),
                'total_boxes' => $batch->boxes->count(),
                'boxes' => $boxesData,
            ],
        ]);
    }
}

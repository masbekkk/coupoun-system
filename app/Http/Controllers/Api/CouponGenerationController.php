<?php

declare(strict_types=1);

namespace App\Http\Controllers\Api;

use App\Actions\GenerateCoupons;
use App\Models\Batch;
use Exception;
use Illuminate\Http\JsonResponse;

final class CouponGenerationController
{
    public function store(Batch $batch, GenerateCoupons $action): JsonResponse
    {
        try {
            $action->handle($batch);

            return response()->json([
                'message' => 'Batch coupons generated successfully.',
                'status' => $batch->fresh()->status, // the status column is string
            ]);
        } catch (Exception $e) {
            return response()->json([
                'message' => 'Failed to generate coupons.',
                'error' => $e->getMessage(),
            ], 400);
        }
    }
}

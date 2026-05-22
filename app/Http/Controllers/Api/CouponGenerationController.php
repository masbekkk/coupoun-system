<?php

declare(strict_types=1);

namespace App\Http\Controllers\Api;

use App\Actions\GenerateCoupons;
use App\Http\Resources\Api\BatchResource;
use App\Models\Batch;
use Exception;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

final class CouponGenerationController
{
    public function store(Request $request, Batch $batch, GenerateCoupons $action): JsonResponse
    {
        /** @var string|null $location */
        $location = $request->input('location');

        if ($location) {
            $batch->update(['location' => $location]);
        }

        try {
            $action->handle($batch);

            return response()->json([
                'data' => new BatchResource($batch->fresh()),
                'message' => 'Batch berhasil diproduksi',
            ]);
        } catch (Exception $e) {
            return response()->json([
                'message' => 'Failed to generate coupons.',
                'error' => $e->getMessage(),
            ], 400);
        }
    }
}

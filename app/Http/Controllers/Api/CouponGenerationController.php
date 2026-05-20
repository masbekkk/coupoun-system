<?php

declare(strict_types=1);

namespace App\Http\Controllers\Api;

use App\Actions\GenerateCoupons;
use App\Models\Project;
use Exception;
use Illuminate\Http\JsonResponse;

final class CouponGenerationController
{
    public function store(Project $project, GenerateCoupons $action): JsonResponse
    {
        try {
            $action->handle($project);

            return response()->json([
                'message' => 'Coupons generated successfully.',
                'status' => $project->fresh()->status->value,
            ]);
        } catch (Exception $e) {
            return response()->json([
                'message' => 'Failed to generate coupons.',
                'error' => $e->getMessage(),
            ], 400);
        }
    }
}

<?php

declare(strict_types=1);

namespace App\Http\Controllers\Api;

use App\Models\Project;
use Illuminate\Http\JsonResponse;

final class ProjectCouponController
{
    public function index(Project $project): JsonResponse
    {
        $coupons = $project->coupons()
            ->with(['prizeTier', 'box'])
            ->latest('id')
            ->paginate(50);

        return response()->json($coupons);
    }
}

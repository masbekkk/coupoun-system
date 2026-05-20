<?php

declare(strict_types=1);

namespace App\Http\Controllers\Api;

use App\Http\Resources\Api\ProjectResource;
use App\Models\Batch;
use App\Models\Coupon;
use App\Models\Project;
use Illuminate\Http\JsonResponse;

final class DashboardController
{
    public function index(): JsonResponse
    {
        $totalProjects = Project::count();
        $totalBatches = Batch::count();
        $totalCoupons = Coupon::count();

        $recentProjects = Project::with('creator')->latest()->take(5)->get();

        return response()->json([
            'data' => [
                'total_projects' => $totalProjects,
                'total_batches' => $totalBatches,
                'total_coupons' => $totalCoupons,
                'recent_projects' => ProjectResource::collection($recentProjects),
            ]
        ]);
    }
}

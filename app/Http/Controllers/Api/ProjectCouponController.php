<?php

declare(strict_types=1);

namespace App\Http\Controllers\Api;

use App\Exports\CouponsExport;
use App\Models\Project;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Maatwebsite\Excel\Facades\Excel;
use Symfony\Component\HttpFoundation\BinaryFileResponse;

final class ProjectCouponController
{
    public function index(Request $request, Project $project): JsonResponse
    {
        $query = $project->coupons()->with(['prizeTier', 'box']);

        if ($request->filled('tier_id')) {
            $query->where('prize_tier_id', $request->query('tier_id'));
        }

        if ($request->filled('search')) {
            $query->where('serial_number', 'like', '%' . $request->query('search') . '%');
        }

        $coupons = $query->latest('id')->paginate(50);

        return response()->json($coupons);
    }

    public function export(Request $request, Project $project): BinaryFileResponse
    {
        $tierId = $request->filled('tier_id') ? (int) $request->query('tier_id') : null;
        
        $fileName = sprintf('project-%s-coupons-%s.xlsx', $project->code, date('Ymd-His'));

        return Excel::download(new CouponsExport($project->id, $tierId), $fileName);
    }
}

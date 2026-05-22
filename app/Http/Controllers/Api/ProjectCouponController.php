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

        if ($request->filled('batch_id')) {
            $query->whereHas('box', function ($q) use ($request): void {
                $q->where('batch_id', $request->query('batch_id'));
            });
        }

        if ($request->filled('search')) {
            $query->where('serial_number', 'like', '%'.$request->query('search').'%');
        }

        $sort = $request->query('sort', 'asc') === 'desc' ? 'desc' : 'asc';
        $perPage = min((int) ($request->query('per_page', 50)), 500);

        $coupons = $query->orderBy('serial_number', $sort)->paginate($perPage);

        return response()->json($coupons);
    }

    public function export(Request $request, Project $project): BinaryFileResponse
    {
        $tierId = $request->filled('tier_id') ? (int) $request->query('tier_id') : null;

        $fileName = sprintf('project-%s-coupons-%s.xlsx', $project->code, date('Ymd-His'));

        return Excel::download(new CouponsExport($project->id, $tierId), $fileName);
    }

    public function exportLink(Request $request, Project $project): JsonResponse
    {
        $tierId = $request->filled('tier_id') ? (int) $request->query('tier_id') : null;

        $fileName = sprintf('exports/coupons/project-%s-coupons-%s.xlsx', $project->code, date('Ymd-His'));

        Excel::store(new CouponsExport($project->id, $tierId), $fileName, 'public');

        return response()->json([
            'url' => asset('storage/'.$fileName),
        ]);
    }
}

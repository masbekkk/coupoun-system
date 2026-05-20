<?php

declare(strict_types=1);

namespace App\Http\Controllers\Api;

use App\Models\Project;
use Illuminate\Http\JsonResponse;

final class ProjectBatchController
{
    public function index(Project $project): JsonResponse
    {
        $batches = $project->batches()->with('operator')->latest('batch_number')->get();

        return response()->json([
            'data' => $batches
        ]);
    }
}

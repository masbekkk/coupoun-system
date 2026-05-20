<?php

declare(strict_types=1);

namespace App\Http\Controllers\Api;

use App\Http\Requests\Api\StoreProjectRequest;
use App\Http\Resources\Api\ProjectResource;
use App\Models\Project;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Resources\Json\AnonymousResourceCollection;
use Illuminate\Support\Facades\DB;

final class ProjectController
{
    public function index(): AnonymousResourceCollection
    {
        $projects = Project::with('creator')->latest()->paginate();

        return ProjectResource::collection($projects);
    }

    public function store(StoreProjectRequest $request): JsonResponse
    {
        $project = DB::transaction(function () use ($request) {
            $project = Project::create([
                'created_by' => $request->user()->id,
                'name' => $request->validated('name'),
                'description' => $request->validated('description'),
                'total_coupons' => $request->validated('total_coupons'),
                'coupons_per_box' => $request->validated('coupons_per_box'),
                'total_boxes' => $request->validated('total_boxes'),
                'total_batches' => $request->validated('total_batches'),
                'boxes_per_batch' => $request->validated('boxes_per_batch'),
            ]);

            foreach ($request->validated('tiers') as $tierData) {
                $project->prizeTiers()->create($tierData);
            }

            return $project;
        });

        return response()->json([
            'message' => 'Project created successfully',
            'data' => new ProjectResource($project->load('creator')),
        ], 201);
    }

    public function show(Project $project): ProjectResource
    {
        return new ProjectResource($project->load('creator'));
    }
}

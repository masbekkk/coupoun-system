<?php

declare(strict_types=1);

use App\Http\Controllers\Api\BatchReportController;
use App\Http\Controllers\Api\CouponGenerationController;
use App\Http\Controllers\Api\DashboardController;
use App\Http\Controllers\Api\ProjectBatchController;
use App\Http\Controllers\Api\ProjectController;
use App\Http\Controllers\Api\ProjectCouponController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::prefix('v1')->middleware('auth:sanctum')->group(function () {
    
    // Dashboard Stats
    Route::get('/dashboard/stats', [DashboardController::class, 'index']);

    // Project Endpoints
    Route::get('/projects', [ProjectController::class, 'index']);
    Route::post('/projects', [ProjectController::class, 'store']);
    Route::get('/projects/{project}', [ProjectController::class, 'show']);

    // Generate Coupons Endpoint
    Route::post('/projects/{project}/generate', [CouponGenerationController::class, 'store']);

    // Project Detail Relationships
    Route::get('/projects/{project}/batches', [ProjectBatchController::class, 'index']);
    Route::get('/projects/{project}/coupons', [ProjectCouponController::class, 'index']);

    // Reporting Endpoints
    Route::get('/batches/{batch}/report', [BatchReportController::class, 'show']);
});

<?php

declare(strict_types=1);

use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\Api\BatchReportController;
use App\Http\Controllers\Api\CouponGenerationController;
use App\Http\Controllers\Api\DashboardController;
use App\Http\Controllers\Api\ProjectBatchController;
use App\Http\Controllers\Api\ProjectController;
use App\Http\Controllers\Api\ProjectCouponController;
use App\Http\Controllers\Api\UserController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

// Public V1 routes
Route::prefix('v1')->group(function () {
    Route::post('/auth/login', [AuthController::class, 'login']);
});

Route::prefix('v1')->middleware('auth:sanctum')->group(function () {
    // Auth Logout
    Route::post('/auth/logout', [AuthController::class, 'logout']);

    // User Settings
    Route::patch('/user', [UserController::class, 'updateProfile']);
    Route::post('/user/password', [UserController::class, 'changePassword']);

    // Dashboard Stats
    Route::get('/dashboard/stats', [DashboardController::class, 'index']);

    // Project Endpoints
    Route::get('/projects', [ProjectController::class, 'index']);
    Route::post('/projects', [ProjectController::class, 'store']);
    // Project Details and Deletion
    Route::get('/projects/{project}', [ProjectController::class, 'show']);
    Route::delete('/projects/{project}', [ProjectController::class, 'destroy']);

    // Generate Coupons Endpoint
    Route::post('/batches/{batch}/generate', [CouponGenerationController::class, 'store']);

    // Project Detail Relationships
    Route::get('/projects/{project}/batches', [ProjectBatchController::class, 'index']);
    Route::get('/projects/{project}/coupons', [ProjectCouponController::class, 'index']);
    Route::get('/projects/{project}/coupons/export', [ProjectCouponController::class, 'export']);

    // Reporting Endpoints
    Route::get('/batches/{batch}/report', [BatchReportController::class, 'show']);
});

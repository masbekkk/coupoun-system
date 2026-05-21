<?php

declare(strict_types=1);

namespace App\Http\Controllers\Api;

use App\Actions\UpdateUser;
use App\Actions\UpdateUserPassword;
use App\Http\Requests\Api\UpdatePasswordRequest;
use App\Http\Requests\Api\UpdateProfileRequest;
use Illuminate\Http\JsonResponse;

final class UserController
{
    public function updateProfile(UpdateProfileRequest $request, UpdateUser $action): JsonResponse
    {
        $user = $request->user();
        $action->handle($user, $request->validated());

        return response()->json([
            'message' => 'Profil berhasil disimpan',
        ]);
    }

    public function changePassword(UpdatePasswordRequest $request, UpdateUserPassword $action): JsonResponse
    {
        $user = $request->user();
        $action->handle($user, $request->string('new_password')->value());

        return response()->json([
            'message' => 'Password berhasil diubah',
        ]);
    }
}

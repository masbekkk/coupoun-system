<?php

declare(strict_types=1);

use App\Models\User;
use Illuminate\Support\Facades\Hash;

uses(Illuminate\Foundation\Testing\LazilyRefreshDatabase::class);

it('authenticates user with valid credentials and returns a token', function (): void {
    $user = User::factory()->create([
        'email' => 'operator@jasuindo.co.id',
        'password' => Hash::make('secretpassword'),
    ]);

    $response = $this->postJson('/api/v1/auth/login', [
        'email' => 'operator@jasuindo.co.id',
        'password' => 'secretpassword',
        'device_name' => 'android_Pixel_7_Pro',
    ]);

    $response->assertOk()
        ->assertJsonStructure([
            'token',
            'user' => [
                'id',
                'name',
                'email',
            ],
        ])
        ->assertJson([
            'user' => [
                'email' => 'operator@jasuindo.co.id',
            ],
        ]);

    expect($user->tokens)->toHaveCount(1);
});

it('rejects login with invalid credentials', function (): void {
    User::factory()->create([
        'email' => 'operator@jasuindo.co.id',
        'password' => Hash::make('secretpassword'),
    ]);

    $response = $this->postJson('/api/v1/auth/login', [
        'email' => 'operator@jasuindo.co.id',
        'password' => 'wrongpassword',
        'device_name' => 'android_Pixel_7_Pro',
    ]);

    $response->assertStatus(401)
        ->assertJson([
            'message' => 'Kredensial yang Anda masukkan salah.',
        ]);
});

it('fails login validation when parameters are missing', function (): void {
    $response = $this->postJson('/api/v1/auth/login', []);

    $response->assertStatus(422)
        ->assertJsonValidationErrors(['email', 'password', 'device_name']);
});

it('logs out authenticated user by revoking token', function (): void {
    $user = User::factory()->create();
    $token = $user->createToken('test_device')->plainTextToken;

    $response = $this->withHeader('Authorization', 'Bearer '.$token)
        ->postJson('/api/v1/auth/logout');

    $response->assertOk()
        ->assertJson([
            'message' => 'Berhasil keluar',
        ]);

    expect($user->fresh()->tokens)->toHaveCount(0);
});

it('prevents logout for unauthenticated user', function (): void {
    $response = $this->postJson('/api/v1/auth/logout');

    $response->assertStatus(401);
});

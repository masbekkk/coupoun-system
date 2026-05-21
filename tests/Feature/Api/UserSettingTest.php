<?php

declare(strict_types=1);

use App\Models\User;
use Illuminate\Support\Facades\Hash;

uses(Illuminate\Foundation\Testing\LazilyRefreshDatabase::class);

it('updates user profile name and email', function (): void {
    $user = User::factory()->create([
        'name' => 'Old Name',
        'email' => 'old.email@example.com',
    ]);
    $token = $user->createToken('test_device')->plainTextToken;

    $response = $this->withHeader('Authorization', 'Bearer '.$token)
        ->patchJson('/api/v1/user', [
            'name' => 'New Name',
            'email' => 'new.email@example.com',
        ]);

    $response->assertOk()
        ->assertJson([
            'message' => 'Profil berhasil disimpan',
        ]);

    $user->refresh();
    expect($user->name)->toBe('New Name')
        ->and($user->email)->toBe('new.email@example.com');
});

it('prevents profile update with existing email from another user', function (): void {
    User::factory()->create(['email' => 'existing@example.com']);
    $user = User::factory()->create(['email' => 'user@example.com']);
    $token = $user->createToken('test_device')->plainTextToken;

    $response = $this->withHeader('Authorization', 'Bearer '.$token)
        ->patchJson('/api/v1/user', [
            'name' => 'Name',
            'email' => 'existing@example.com',
        ]);

    $response->assertStatus(422)
        ->assertJsonValidationErrors(['email']);
});

it('updates user password when current password matches', function (): void {
    $user = User::factory()->create([
        'password' => Hash::make('oldpassword123'),
    ]);
    $token = $user->createToken('test_device')->plainTextToken;

    $response = $this->withHeader('Authorization', 'Bearer '.$token)
        ->postJson('/api/v1/user/password', [
            'current_password' => 'oldpassword123',
            'new_password' => 'newpassword123',
            'new_password_confirmation' => 'newpassword123',
        ]);

    $response->assertOk()
        ->assertJson([
            'message' => 'Password berhasil diubah',
        ]);

    expect(Hash::check('newpassword123', $user->refresh()->password))->toBeTrue();
});

it('fails password change when current password is wrong', function (): void {
    $user = User::factory()->create([
        'password' => Hash::make('oldpassword123'),
    ]);
    $token = $user->createToken('test_device')->plainTextToken;

    $response = $this->withHeader('Authorization', 'Bearer '.$token)
        ->postJson('/api/v1/user/password', [
            'current_password' => 'wrongpassword',
            'new_password' => 'newpassword123',
            'new_password_confirmation' => 'newpassword123',
        ]);

    $response->assertStatus(422)
        ->assertJsonValidationErrors(['current_password']);
});

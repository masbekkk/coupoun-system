<?php

declare(strict_types=1);

namespace Database\Factories;

use App\Enums\BatchStatus;
use App\Models\Batch;
use App\Models\Project;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends Factory<Batch>
 */
final class BatchFactory extends Factory
{
    /**
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'project_id' => Project::factory(),
            'user_id' => User::factory(),
            'batch_number' => fake()->unique()->numberBetween(1, 2),
            'location' => fake()->city(),
            'status' => BatchStatus::Pending,
            'produced_at' => null,
        ];
    }

    public function inProgress(): self
    {
        return $this->state(fn (array $attributes): array => [
            'status' => BatchStatus::InProgress,
        ]);
    }

    public function completed(): self
    {
        return $this->state(fn (array $attributes): array => [
            'status' => BatchStatus::Completed,
            'produced_at' => now(),
        ]);
    }
}

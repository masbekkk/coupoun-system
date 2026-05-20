<?php

declare(strict_types=1);

namespace Database\Factories;

use App\Enums\ProjectStatus;
use App\Models\Project;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends Factory<Project>
 */
final class ProjectFactory extends Factory
{
    /**
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'created_by' => User::factory(),
            'name' => fake()->sentence(3),
            'code' => 'KPN-'.fake()->unique()->numerify('####-##-###'),
            'description' => fake()->optional()->paragraph(),
            'total_coupons' => 10000,
            'coupons_per_box' => 1000,
            'total_boxes' => 10,
            'total_batches' => 2,
            'boxes_per_batch' => 5,
            'status' => ProjectStatus::Draft,
        ];
    }

    public function generating(): self
    {
        return $this->state(fn (array $attributes): array => [
            'status' => ProjectStatus::Generating,
        ]);
    }

    public function ready(): self
    {
        return $this->state(fn (array $attributes): array => [
            'status' => ProjectStatus::Ready,
        ]);
    }

    public function inProduction(): self
    {
        return $this->state(fn (array $attributes): array => [
            'status' => ProjectStatus::InProduction,
        ]);
    }

    public function completed(): self
    {
        return $this->state(fn (array $attributes): array => [
            'status' => ProjectStatus::Completed,
        ]);
    }
}

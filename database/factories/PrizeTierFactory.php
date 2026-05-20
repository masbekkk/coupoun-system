<?php

declare(strict_types=1);

namespace Database\Factories;

use App\Models\PrizeTier;
use App\Models\Project;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends Factory<PrizeTier>
 */
final class PrizeTierFactory extends Factory
{
    /**
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'project_id' => Project::factory(),
            'name' => 'Hadiah Rp '.fake()->randomElement([5000, 10000, 20000, 50000, 100000]),
            'amount' => fake()->randomElement([5000, 10000, 20000, 50000, 100000]),
            'total_quantity' => 100,
            'per_box_quantity' => 10,
        ];
    }

    public function noPrize(): self
    {
        return $this->state(fn (array $attributes): array => [
            'name' => 'Tidak Berhadiah',
            'amount' => 0,
            'total_quantity' => 8100,
            'per_box_quantity' => 810,
        ]);
    }
}

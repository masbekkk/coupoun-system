<?php

declare(strict_types=1);

namespace Database\Factories;

use App\Models\Box;
use App\Models\Coupon;
use App\Models\PrizeTier;
use App\Models\Project;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends Factory<Coupon>
 */
final class CouponFactory extends Factory
{
    /**
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'project_id' => Project::factory(),
            'box_id' => Box::factory(),
            'prize_tier_id' => PrizeTier::factory(),
            'serial_number' => mb_str_pad((string) fake()->unique()->numberBetween(1, 10000), 5, '0', STR_PAD_LEFT),
            'position_in_box' => fake()->unique()->numberBetween(1, 1000),
        ];
    }
}

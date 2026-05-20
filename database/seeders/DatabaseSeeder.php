<?php

declare(strict_types=1);

namespace Database\Seeders;

use App\Actions\GenerateCoupons;
use App\Enums\ProjectStatus;
use App\Models\PrizeTier;
use App\Models\Project;
use App\Models\User;
use Illuminate\Database\Seeder;

final class DatabaseSeeder extends Seeder
{
    public function run(): void
    {
        $admin = User::factory()->create([
            'name' => 'Admin User',
            'email' => 'admin@example.com',
            'password' => bcrypt('password'),
        ]);

        $token = $admin->createToken('admin-token')->plainTextToken;
        $this->command->info("\n--- TEST API CREDENTIALS ---");
        $this->command->info('Email: admin@example.com');
        $this->command->info('Password: password');
        $this->command->info('Bearer Token: '.$token);
        $this->command->info("----------------------------\n");

        // 1. Draft Project (ready to be tested for generation)
        $draftProject = Project::factory()->create([
            'created_by' => $admin->id,
            'name' => 'Promo Akhir Tahun',
            'status' => ProjectStatus::Draft,
        ]);
        $this->createTiers($draftProject);

        // 2. Completed Project (with already generated coupons)
        $completedProject = Project::factory()->create([
            'created_by' => $admin->id,
            'name' => 'Kupon Kemerdekaan',
            'status' => ProjectStatus::Draft,
        ]);
        $this->createTiers($completedProject);

        $this->command->info("Generating 10,000 coupons for {$completedProject->name}...");
        (new GenerateCoupons())->handle($completedProject);
    }

    private function createTiers(Project $project): void
    {
        PrizeTier::factory()->create(['project_id' => $project->id, 'name' => 'Hadiah Rp 100.000', 'amount' => 100000, 'total_quantity' => 50, 'per_box_quantity' => 5]);
        PrizeTier::factory()->create(['project_id' => $project->id, 'name' => 'Hadiah Rp 50.000', 'amount' => 50000, 'total_quantity' => 100, 'per_box_quantity' => 10]);
        PrizeTier::factory()->create(['project_id' => $project->id, 'name' => 'Hadiah Rp 20.000', 'amount' => 20000, 'total_quantity' => 250, 'per_box_quantity' => 25]);
        PrizeTier::factory()->create(['project_id' => $project->id, 'name' => 'Hadiah Rp 10.000', 'amount' => 10000, 'total_quantity' => 500, 'per_box_quantity' => 50]);
        PrizeTier::factory()->create(['project_id' => $project->id, 'name' => 'Hadiah Rp 5.000', 'amount' => 5000, 'total_quantity' => 1000, 'per_box_quantity' => 100]);
        PrizeTier::factory()->noPrize()->create(['project_id' => $project->id, 'total_quantity' => 8100, 'per_box_quantity' => 810]);
    }
}

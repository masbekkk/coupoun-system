<?php

declare(strict_types=1);

use App\Enums\BatchStatus;
use App\Enums\ProjectStatus;
use App\Models\Batch;
use App\Models\Box;
use App\Models\Coupon;
use App\Models\PrizeTier;
use App\Models\Project;
use App\Models\User;

uses(Illuminate\Foundation\Testing\LazilyRefreshDatabase::class);

describe('Project', function (): void {
    it('can be created with factory', function (): void {
        $project = Project::factory()->create();

        expect($project)
            ->toBeInstanceOf(Project::class)
            ->status->toBe(ProjectStatus::Draft)
            ->total_coupons->toBe(10000)
            ->coupons_per_box->toBe(1000)
            ->total_boxes->toBe(10)
            ->total_batches->toBe(2)
            ->boxes_per_batch->toBe(5);
    });

    it('belongs to a creator', function (): void {
        $user = User::factory()->create();
        $project = Project::factory()->create(['created_by' => $user->id]);

        expect($project->creator)
            ->toBeInstanceOf(User::class)
            ->id->toBe($user->id);
    });

    it('has many prize tiers', function (): void {
        $project = Project::factory()->create();
        PrizeTier::factory()->count(3)->create(['project_id' => $project->id]);

        expect($project->prizeTiers)->toHaveCount(3);
    });

    it('has many batches', function (): void {
        $project = Project::factory()->create();
        Batch::factory()->create(['project_id' => $project->id, 'batch_number' => 1]);
        Batch::factory()->create(['project_id' => $project->id, 'batch_number' => 2]);

        expect($project->batches)->toHaveCount(2);
    });

    it('has status states', function (): void {
        expect(Project::factory()->generating()->create()->status)->toBe(ProjectStatus::Generating);
        expect(Project::factory()->ready()->create()->status)->toBe(ProjectStatus::Ready);
        expect(Project::factory()->inProduction()->create()->status)->toBe(ProjectStatus::InProduction);
        expect(Project::factory()->completed()->create()->status)->toBe(ProjectStatus::Completed);
    });
});

describe('PrizeTier', function (): void {
    it('belongs to a project', function (): void {
        $project = Project::factory()->create();
        $tier = PrizeTier::factory()->create(['project_id' => $project->id]);

        expect($tier->project)
            ->toBeInstanceOf(Project::class)
            ->id->toBe($project->id);
    });

    it('can be created as no prize', function (): void {
        $tier = PrizeTier::factory()->noPrize()->create();

        expect($tier)
            ->amount->toBe(0)
            ->total_quantity->toBe(8100)
            ->per_box_quantity->toBe(810);
    });
});

describe('Batch', function (): void {
    it('belongs to a project and operator', function (): void {
        $user = User::factory()->create();
        $project = Project::factory()->create();
        $batch = Batch::factory()->create([
            'project_id' => $project->id,
            'user_id' => $user->id,
            'batch_number' => 1,
        ]);

        expect($batch->project)->toBeInstanceOf(Project::class);
        expect($batch->operator)
            ->toBeInstanceOf(User::class)
            ->id->toBe($user->id);
    });

    it('has status states', function (): void {
        $batch = Batch::factory()->completed()->create(['batch_number' => 1]);

        expect($batch)
            ->status->toBe(BatchStatus::Completed)
            ->produced_at->not->toBeNull();
    });

    it('enforces unique batch number per project', function (): void {
        $project = Project::factory()->create();
        Batch::factory()->create(['project_id' => $project->id, 'batch_number' => 1]);

        expect(fn () => Batch::factory()->create(['project_id' => $project->id, 'batch_number' => 1]))
            ->toThrow(Illuminate\Database\QueryException::class);
    });
});

describe('Box', function (): void {
    it('belongs to a project and batch', function (): void {
        $project = Project::factory()->create();
        $batch = Batch::factory()->create(['project_id' => $project->id, 'batch_number' => 1]);
        $box = Box::factory()->create([
            'project_id' => $project->id,
            'batch_id' => $batch->id,
            'box_number' => 1,
        ]);

        expect($box->project)->toBeInstanceOf(Project::class);
        expect($box->batch)->toBeInstanceOf(Batch::class);
    });

    it('has many coupons', function (): void {
        $project = Project::factory()->create();
        $tier = PrizeTier::factory()->create(['project_id' => $project->id]);
        $batch = Batch::factory()->create(['project_id' => $project->id, 'batch_number' => 1]);
        $box = Box::factory()->create(['project_id' => $project->id, 'batch_id' => $batch->id, 'box_number' => 1]);

        Coupon::factory()->count(3)->sequence(
            ['serial_number' => '00001', 'position_in_box' => 1],
            ['serial_number' => '00002', 'position_in_box' => 2],
            ['serial_number' => '00003', 'position_in_box' => 3],
        )->create([
            'project_id' => $project->id,
            'box_id' => $box->id,
            'prize_tier_id' => $tier->id,
        ]);

        expect($box->coupons)->toHaveCount(3);
    });

    it('enforces unique box number per project', function (): void {
        $project = Project::factory()->create();
        $batch = Batch::factory()->create(['project_id' => $project->id, 'batch_number' => 1]);
        Box::factory()->create(['project_id' => $project->id, 'batch_id' => $batch->id, 'box_number' => 1]);

        expect(fn () => Box::factory()->create(['project_id' => $project->id, 'batch_id' => $batch->id, 'box_number' => 1]))
            ->toThrow(Illuminate\Database\QueryException::class);
    });
});

describe('Coupon', function (): void {
    it('belongs to project, box, and prize tier', function (): void {
        $project = Project::factory()->create();
        $tier = PrizeTier::factory()->create(['project_id' => $project->id]);
        $batch = Batch::factory()->create(['project_id' => $project->id, 'batch_number' => 1]);
        $box = Box::factory()->create(['project_id' => $project->id, 'batch_id' => $batch->id, 'box_number' => 1]);

        $coupon = Coupon::factory()->create([
            'project_id' => $project->id,
            'box_id' => $box->id,
            'prize_tier_id' => $tier->id,
            'serial_number' => '00001',
            'position_in_box' => 1,
        ]);

        expect($coupon->project)->toBeInstanceOf(Project::class);
        expect($coupon->box)->toBeInstanceOf(Box::class);
        expect($coupon->prizeTier)->toBeInstanceOf(PrizeTier::class);
    });

    it('enforces unique serial number per project', function (): void {
        $project = Project::factory()->create();
        $tier = PrizeTier::factory()->create(['project_id' => $project->id]);
        $batch = Batch::factory()->create(['project_id' => $project->id, 'batch_number' => 1]);
        $box = Box::factory()->create(['project_id' => $project->id, 'batch_id' => $batch->id, 'box_number' => 1]);

        Coupon::factory()->create([
            'project_id' => $project->id,
            'box_id' => $box->id,
            'prize_tier_id' => $tier->id,
            'serial_number' => '00001',
            'position_in_box' => 1,
        ]);

        expect(fn () => Coupon::factory()->create([
            'project_id' => $project->id,
            'box_id' => $box->id,
            'prize_tier_id' => $tier->id,
            'serial_number' => '00001',
            'position_in_box' => 2,
        ]))->toThrow(Illuminate\Database\QueryException::class);
    });

    it('allows same serial number in different projects', function (): void {
        $projectA = Project::factory()->create();
        $projectB = Project::factory()->create();
        $tierA = PrizeTier::factory()->create(['project_id' => $projectA->id]);
        $tierB = PrizeTier::factory()->create(['project_id' => $projectB->id]);
        $batchA = Batch::factory()->create(['project_id' => $projectA->id, 'batch_number' => 1]);
        $batchB = Batch::factory()->create(['project_id' => $projectB->id, 'batch_number' => 1]);
        $boxA = Box::factory()->create(['project_id' => $projectA->id, 'batch_id' => $batchA->id, 'box_number' => 1]);
        $boxB = Box::factory()->create(['project_id' => $projectB->id, 'batch_id' => $batchB->id, 'box_number' => 1]);

        $couponA = Coupon::factory()->create([
            'project_id' => $projectA->id,
            'box_id' => $boxA->id,
            'prize_tier_id' => $tierA->id,
            'serial_number' => '00001',
            'position_in_box' => 1,
        ]);

        $couponB = Coupon::factory()->create([
            'project_id' => $projectB->id,
            'box_id' => $boxB->id,
            'prize_tier_id' => $tierB->id,
            'serial_number' => '00001',
            'position_in_box' => 1,
        ]);

        expect($couponA->serial_number)->toBe('00001');
        expect($couponB->serial_number)->toBe('00001');
        expect($couponA->project_id)->not->toBe($couponB->project_id);
    });
});

describe('User relationships', function (): void {
    it('has many projects', function (): void {
        $user = User::factory()->create();
        Project::factory()->count(2)->create(['created_by' => $user->id]);

        expect($user->projects)->toHaveCount(2);
    });

    it('has many operated batches', function (): void {
        $user = User::factory()->create();
        $project = Project::factory()->create();
        Batch::factory()->create(['project_id' => $project->id, 'user_id' => $user->id, 'batch_number' => 1]);
        Batch::factory()->create(['project_id' => $project->id, 'user_id' => $user->id, 'batch_number' => 2]);

        expect($user->operatedBatches)->toHaveCount(2);
    });
});

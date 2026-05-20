<?php

declare(strict_types=1);

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('projects', function (Blueprint $table): void {
            $table->id();
            $table->foreignUuid('created_by')->nullable()->constrained('users');
            $table->string('name', 100);
            $table->string('code', 30)->unique();
            $table->text('description')->nullable();
            $table->unsignedInteger('total_coupons');
            $table->unsignedSmallInteger('coupons_per_box');
            $table->unsignedSmallInteger('total_boxes');
            $table->unsignedSmallInteger('total_batches');
            $table->unsignedSmallInteger('boxes_per_batch');
            $table->string('status', 20)->default('draft');
            $table->timestamps();

            $table->index('status');
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('projects');
    }
};

<?php

declare(strict_types=1);

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('coupons', function (Blueprint $table): void {
            $table->id();
            $table->foreignId('project_id')->constrained()->cascadeOnDelete();
            $table->foreignId('box_id')->constrained()->cascadeOnDelete();
            $table->foreignId('prize_tier_id')->constrained()->cascadeOnDelete();
            $table->char('serial_number', 5);
            $table->unsignedSmallInteger('position_in_box');
            $table->timestamps();

            $table->unique(['project_id', 'serial_number']);
            $table->unique(['box_id', 'position_in_box']);
            $table->index('prize_tier_id');
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('coupons');
    }
};

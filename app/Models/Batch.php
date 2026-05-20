<?php

declare(strict_types=1);

namespace App\Models;

use App\Enums\BatchStatus;
use Carbon\CarbonInterface;
use Database\Factories\BatchFactory;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

/**
 * @property-read int $id
 * @property-read int $project_id
 * @property-read string|null $user_id
 * @property-read int $batch_number
 * @property-read string|null $location
 * @property-read BatchStatus $status
 * @property-read CarbonInterface|null $produced_at
 * @property-read CarbonInterface $created_at
 * @property-read CarbonInterface $updated_at
 */
final class Batch extends Model
{
    /** @use HasFactory<BatchFactory> */
    use HasFactory;

    protected $guarded = [];

    /**
     * @return array<string, string>
     */
    public function casts(): array
    {
        return [
            'id' => 'integer',
            'project_id' => 'integer',
            'batch_number' => 'integer',
            'status' => BatchStatus::class,
            'produced_at' => 'datetime',
            'created_at' => 'datetime',
            'updated_at' => 'datetime',
        ];
    }

    /**
     * @return BelongsTo<Project, $this>
     */
    public function project(): BelongsTo
    {
        return $this->belongsTo(Project::class);
    }

    /**
     * @return BelongsTo<User, $this>
     */
    public function operator(): BelongsTo
    {
        return $this->belongsTo(User::class, 'user_id');
    }

    /**
     * @return HasMany<Box, $this>
     */
    public function boxes(): HasMany
    {
        return $this->hasMany(Box::class);
    }
}

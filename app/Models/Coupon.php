<?php

declare(strict_types=1);

namespace App\Models;

use Carbon\CarbonInterface;
use Database\Factories\CouponFactory;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

/**
 * @property-read int $id
 * @property-read int $project_id
 * @property-read int $box_id
 * @property-read int $prize_tier_id
 * @property-read string $serial_number
 * @property-read int $position_in_box
 * @property-read CarbonInterface $created_at
 * @property-read CarbonInterface $updated_at
 */
final class Coupon extends Model
{
    /** @use HasFactory<CouponFactory> */
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
            'box_id' => 'integer',
            'prize_tier_id' => 'integer',
            'serial_number' => 'string',
            'position_in_box' => 'integer',
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
     * @return BelongsTo<Box, $this>
     */
    public function box(): BelongsTo
    {
        return $this->belongsTo(Box::class);
    }

    /**
     * @return BelongsTo<PrizeTier, $this>
     */
    public function prizeTier(): BelongsTo
    {
        return $this->belongsTo(PrizeTier::class);
    }
}

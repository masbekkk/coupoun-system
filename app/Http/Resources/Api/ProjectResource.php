<?php

declare(strict_types=1);

namespace App\Http\Resources\Api;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

/**
 * @mixin \App\Models\Project
 */
final class ProjectResource extends JsonResource
{
    /**
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'code' => $this->code,
            'name' => $this->name,
            'description' => $this->description,
            'status' => $this->status,
            'config' => [
                'total_coupons' => $this->total_coupons,
                'total_boxes' => $this->total_boxes,
                'coupons_per_box' => $this->coupons_per_box,
                'total_batches' => $this->total_batches,
                'boxes_per_batch' => $this->boxes_per_batch,
            ],
            'creator' => [
                'id' => $this->creator->id,
                'name' => $this->creator->name,
            ],
            'prize_tiers' => $this->whenLoaded('prizeTiers', fn () => $this->prizeTiers->map(fn ($tier) => [
                'id' => $tier->id,
                'name' => $tier->name,
                'amount' => $tier->amount,
            ])),
            'created_at' => $this->created_at->toIso8601String(),
        ];
    }
}

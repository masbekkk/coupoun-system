<?php

declare(strict_types=1);

namespace App\Http\Resources\Api;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

/**
 * @mixin \App\Models\Batch
 */
final class BatchResource extends JsonResource
{
    /**
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'batch_number' => $this->batch_number,
            'status' => $this->status->value,
            'operator' => $this->operator?->name,
            'location' => $this->location,
            'generated_at' => $this->produced_at?->format('Y-m-d H:i:s'),
            'total_boxes' => $this->boxes()->count(),
            'project_id' => $this->project_id,
        ];
    }
}

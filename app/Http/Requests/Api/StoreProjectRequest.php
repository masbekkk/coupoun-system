<?php

declare(strict_types=1);

namespace App\Http\Requests\Api;

use Illuminate\Foundation\Http\FormRequest;

final class StoreProjectRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true;
    }

    /**
     * @return array<string, mixed>
     */
    public function rules(): array
    {
        return [
            'name' => ['required', 'string', 'max:255'],
            'code' => ['required', 'string', 'max:30', 'unique:projects,code'],
            'description' => ['nullable', 'string'],
            'total_coupons' => ['required', 'integer', 'min:1'],
            'coupons_per_box' => ['required', 'integer', 'min:1'],
            'total_boxes' => ['required', 'integer', 'min:1'],
            'total_batches' => ['required', 'integer', 'min:1'],
            'boxes_per_batch' => ['required', 'integer', 'min:1'],
            'tiers' => ['required', 'array', 'min:1'],
            'tiers.*.name' => ['required', 'string', 'max:255'],
            'tiers.*.amount' => ['required', 'integer', 'min:0'],
            'tiers.*.total_quantity' => ['required', 'integer', 'min:1'],
            'tiers.*.per_box_quantity' => ['required', 'integer', 'min:1'],
        ];
    }
}

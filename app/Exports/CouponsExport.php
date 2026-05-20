<?php

declare(strict_types=1);

namespace App\Exports;

use App\Models\Coupon;
use Maatwebsite\Excel\Concerns\FromQuery;
use Maatwebsite\Excel\Concerns\Exportable;
use Maatwebsite\Excel\Concerns\WithHeadings;
use Maatwebsite\Excel\Concerns\WithMapping;

class CouponsExport implements FromQuery, WithHeadings, WithMapping
{
    use Exportable;

    public function __construct(
        private int $projectId,
        private ?int $tierId = null
    ) {}

    public function query()
    {
        $query = Coupon::query()
            ->with(['prizeTier', 'box'])
            ->where('project_id', $this->projectId);

        if ($this->tierId !== null) {
            $query->where('prize_tier_id', $this->tierId);
        }

        return $query->latest('id');
    }

    public function headings(): array
    {
        return [
            'Serial Number',
            'Box Number',
            'Position In Box',
            'Prize Tier',
            'Prize Amount',
            'Generated At'
        ];
    }

    public function map($coupon): array
    {
        return [
            $coupon->serial_number,
            $coupon->box?->box_number ?? '-',
            $coupon->position_in_box,
            $coupon->prizeTier?->name ?? '-',
            $coupon->prizeTier?->amount ?? '0',
            $coupon->created_at->format('Y-m-d H:i:s'),
        ];
    }
}

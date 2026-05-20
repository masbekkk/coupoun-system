import { Head, router } from '@inertiajs/react';
import AppLayout from '@/layouts/app-layout';
import { useState, useEffect } from 'react';
import { apiFetch } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Trash2, Plus } from 'lucide-react';

export default function CreateProject() {
    const [submitting, setSubmitting] = useState(false);
    const [error, setError] = useState('');

    const [form, setForm] = useState({
        name: 'Promo Akhir Tahun',
        description: 'Generating instant prize coupons',
        total_coupons: 10000,
        coupons_per_box: 1000,
        total_boxes: 10,
        total_batches: 2,
        boxes_per_batch: 5,
        tiers: [
            { name: 'Hadiah Rp 100.000', amount: 100000, per_box_quantity: 5 },
            { name: 'Hadiah Rp 50.000', amount: 50000, per_box_quantity: 10 },
            { name: 'Hadiah Rp 20.000', amount: 20000, per_box_quantity: 25 },
            { name: 'Hadiah Rp 10.000', amount: 10000, per_box_quantity: 50 },
            { name: 'Hadiah Rp 5.000', amount: 5000, per_box_quantity: 100 },
            { name: 'Anda Belum Beruntung', amount: 0, per_box_quantity: 810 },
        ]
    });

    // Auto-calculate boxes and batches based on total_coupons and coupons_per_box
    useEffect(() => {
        const totalBoxes = Math.ceil(form.total_coupons / form.coupons_per_box) || 0;
        setForm(f => ({
            ...f,
            total_boxes: totalBoxes,
            boxes_per_batch: Math.ceil(totalBoxes / f.total_batches) || 0
        }));
    }, [form.total_coupons, form.coupons_per_box, form.total_batches]);

    const handleTierChange = (index: number, field: string, value: string | number) => {
        const newTiers = [...form.tiers];
        newTiers[index] = { ...newTiers[index], [field]: value };
        setForm({ ...form, tiers: newTiers });
    };

    const addTier = () => {
        setForm({
            ...form,
            tiers: [...form.tiers, { name: '', amount: 0, per_box_quantity: 0 }]
        });
    };

    const removeTier = (index: number) => {
        const newTiers = form.tiers.filter((_, i) => i !== index);
        setForm({ ...form, tiers: newTiers });
    };

    const currentBoxTotal = form.tiers.reduce((sum, tier) => sum + (Number(tier.per_box_quantity) || 0), 0);
    const isBoxQuantityValid = currentBoxTotal === form.coupons_per_box;

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        
        if (!isBoxQuantityValid) {
            setError(`Prize quantities must sum up exactly to ${form.coupons_per_box} per box. Currently: ${currentBoxTotal}`);
            return;
        }

        setSubmitting(true);
        setError('');

        try {
            // Append calculated total_quantity to each tier before sending
            const payload = {
                ...form,
                tiers: form.tiers.map(t => ({
                    ...t,
                    total_quantity: Number(t.per_box_quantity) * form.total_boxes
                }))
            };

            await apiFetch('/api/v1/projects', {
                method: 'POST',
                body: JSON.stringify(payload)
            });
            router.visit('/projects');
        } catch (err: any) {
            setError(err.message || 'An error occurred while creating the project.');
            setSubmitting(false);
        }
    };

    return (
        <AppLayout breadcrumbs={[
            { title: 'Projects', href: '/projects' },
            { title: 'Create', href: '/projects/create' }
        ]}>
            <Head title="Create Project" />
            
            <div className="flex h-full flex-1 flex-col p-6 md:p-8 max-w-5xl mx-auto w-full">
                <div className="mb-6">
                    <h1 className="text-3xl font-bold tracking-tight">Create New Project</h1>
                    <p className="text-muted-foreground mt-1">Configure a new dynamic coupon generation run.</p>
                </div>

                {error && (
                    <div className="bg-destructive/15 text-destructive p-4 rounded-md mb-6 border border-destructive/30">
                        {error}
                    </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-8">
                    <Card>
                        <CardHeader>
                            <CardTitle>Basic Information</CardTitle>
                            <CardDescription>Primary details for this run. Changing coupons per box updates total boxes.</CardDescription>
                        </CardHeader>
                        <CardContent className="grid gap-6 md:grid-cols-2">
                            <div className="space-y-2">
                                <Label htmlFor="name">Project Name</Label>
                                <Input id="name" value={form.name} onChange={e => setForm({...form, name: e.target.value})} required />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="description">Description (Optional)</Label>
                                <Input id="description" value={form.description} onChange={e => setForm({...form, description: e.target.value})} />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="total_coupons">Total Coupons</Label>
                                <Input id="total_coupons" type="number" value={form.total_coupons} onChange={e => setForm({...form, total_coupons: Number(e.target.value)})} required />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="coupons_per_box">Coupons per Box</Label>
                                <Input id="coupons_per_box" type="number" value={form.coupons_per_box} onChange={e => setForm({...form, coupons_per_box: Number(e.target.value)})} required />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="total_batches">Total Batches to Produce</Label>
                                <Input id="total_batches" type="number" value={form.total_batches} onChange={e => setForm({...form, total_batches: Number(e.target.value)})} required />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="total_boxes">Total Boxes (Auto-calculated)</Label>
                                <Input id="total_boxes" type="number" value={form.total_boxes} readOnly className="bg-muted" />
                            </div>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between">
                            <div>
                                <CardTitle>Prize Tier Configuration</CardTitle>
                                <CardDescription>Define exactly what goes into each box of {form.coupons_per_box} coupons.</CardDescription>
                            </div>
                            <Button type="button" variant="outline" size="sm" onClick={addTier}>
                                <Plus className="w-4 h-4 mr-2" /> Add Tier
                            </Button>
                        </CardHeader>
                        <CardContent>
                            <div className="rounded-md border overflow-x-auto">
                                <table className="w-full text-sm text-left">
                                    <thead className="bg-muted/50 font-medium">
                                        <tr>
                                            <th className="px-4 py-3 border-b">Prize Tier Name</th>
                                            <th className="px-4 py-3 border-b">Amount (Rp)</th>
                                            <th className="px-4 py-3 border-b text-right">Per Box Quantity</th>
                                            <th className="px-4 py-3 border-b text-right">Total Quantity (Auto)</th>
                                            <th className="px-4 py-3 border-b w-12"></th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y">
                                        {form.tiers.map((tier, idx) => {
                                            const totalQuantity = (Number(tier.per_box_quantity) || 0) * form.total_boxes;
                                            return (
                                                <tr key={idx} className="hover:bg-muted/10 transition-colors">
                                                    <td className="px-4 py-2">
                                                        <Input value={tier.name} onChange={e => handleTierChange(idx, 'name', e.target.value)} required placeholder="Prize Name" className="h-8" />
                                                    </td>
                                                    <td className="px-4 py-2">
                                                        <Input type="number" value={tier.amount} onChange={e => handleTierChange(idx, 'amount', Number(e.target.value))} required className="h-8" />
                                                    </td>
                                                    <td className="px-4 py-2 text-right">
                                                        <Input type="number" value={tier.per_box_quantity} onChange={e => handleTierChange(idx, 'per_box_quantity', Number(e.target.value))} required className="h-8 text-right" />
                                                    </td>
                                                    <td className="px-4 py-2 text-right text-muted-foreground font-mono">
                                                        {new Intl.NumberFormat().format(totalQuantity)}
                                                    </td>
                                                    <td className="px-4 py-2 text-center">
                                                        <Button type="button" variant="ghost" size="icon" className="h-8 w-8 text-destructive/70 hover:text-destructive hover:bg-destructive/10" onClick={() => removeTier(idx)}>
                                                            <Trash2 className="w-4 h-4" />
                                                        </Button>
                                                    </td>
                                                </tr>
                                            );
                                        })}
                                    </tbody>
                                    <tfoot className="bg-muted/20 font-semibold border-t">
                                        <tr>
                                            <td colSpan={2} className="px-4 py-3 text-right">Per Box Allocation Check:</td>
                                            <td className={`px-4 py-3 text-right ${isBoxQuantityValid ? 'text-green-600 dark:text-green-400' : 'text-destructive'}`}>
                                                {currentBoxTotal} / {form.coupons_per_box}
                                            </td>
                                            <td colSpan={2}></td>
                                        </tr>
                                    </tfoot>
                                </table>
                            </div>
                        </CardContent>
                    </Card>

                    <div className="flex justify-end gap-4 pb-12">
                        <Button type="button" variant="outline" onClick={() => router.visit('/projects')} disabled={submitting}>
                            Cancel
                        </Button>
                        <Button type="submit" disabled={submitting || !isBoxQuantityValid}>
                            {submitting ? 'Creating Project...' : 'Create Project'}
                        </Button>
                    </div>
                </form>
            </div>
        </AppLayout>
    );
}

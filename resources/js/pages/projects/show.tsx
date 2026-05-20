import { Head, Link, router } from '@inertiajs/react';
import AppLayout from '@/layouts/app-layout';
import { useEffect, useState, useMemo, useRef } from 'react';
import { apiFetch } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import { Download, Trash2, ChevronDown, ChevronUp, ChevronsUpDown, Search, X } from 'lucide-react';
import {
    useReactTable,
    getCoreRowModel,
    getSortedRowModel,
    flexRender,
    type ColumnDef,
    type SortingState,
} from '@tanstack/react-table';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';

// -------------------------------------------------------------------
// Types
// -------------------------------------------------------------------
interface Coupon {
    serial_number: string;
    box?: { box_number: number };
    position_in_box: number;
    prize_tier?: { id: number; name: string; amount: number };
}

// -------------------------------------------------------------------
// Coupon DataTable (isolated component)
// -------------------------------------------------------------------
function CouponDataTable({ coupons, isLoading }: { coupons: Coupon[]; isLoading: boolean }) {
    const [sorting, setSorting] = useState<SortingState>([]);

    const columns = useMemo<ColumnDef<Coupon>[]>(() => [
        {
            accessorKey: 'serial_number',
            header: ({ column }) => (
                <Button
                    variant="ghost"
                    size="sm"
                    className="-ml-2 gap-1 font-medium"
                    onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
                >
                    Serial Number
                    {column.getIsSorted() === 'asc' ? (
                        <ChevronUp className="w-3.5 h-3.5" />
                    ) : column.getIsSorted() === 'desc' ? (
                        <ChevronDown className="w-3.5 h-3.5" />
                    ) : (
                        <ChevronsUpDown className="w-3.5 h-3.5 opacity-50" />
                    )}
                </Button>
            ),
            cell: ({ getValue }) => (
                <span className="font-mono font-medium text-xs tracking-widest">{getValue() as string}</span>
            ),
        },
        {
            accessorKey: 'box',
            id: 'box_number',
            header: 'Box',
            cell: ({ row }) => (
                <span className="text-muted-foreground">
                    Box #{row.original.box?.box_number ?? '—'}
                </span>
            ),
        },
        {
            accessorKey: 'position_in_box',
            header: ({ column }) => (
                <Button
                    variant="ghost"
                    size="sm"
                    className="-ml-2 gap-1 font-medium"
                    onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
                >
                    Position
                    {column.getIsSorted() === 'asc' ? (
                        <ChevronUp className="w-3.5 h-3.5" />
                    ) : column.getIsSorted() === 'desc' ? (
                        <ChevronDown className="w-3.5 h-3.5" />
                    ) : (
                        <ChevronsUpDown className="w-3.5 h-3.5 opacity-50" />
                    )}
                </Button>
            ),
            cell: ({ getValue }) => (
                <span className="text-muted-foreground">{getValue() as number}</span>
            ),
        },
        {
            id: 'prize_tier',
            header: 'Prize Tier',
            cell: ({ row }) => {
                const tier = row.original.prize_tier;
                if (!tier) return <span className="text-muted-foreground">—</span>;
                const isWin = tier.amount > 0;
                return (
                    <span className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold border ${
                        isWin
                            ? 'bg-emerald-500/10 text-emerald-600 border-emerald-500/20 dark:text-emerald-400'
                            : 'bg-muted text-muted-foreground border-transparent'
                    }`}>
                        {tier.name}
                    </span>
                );
            },
        },
        {
            id: 'prize_amount',
            header: 'Amount',
            cell: ({ row }) => {
                const amount = row.original.prize_tier?.amount ?? 0;
                return (
                    <span className={`font-medium text-sm ${amount > 0 ? 'text-foreground' : 'text-muted-foreground'}`}>
                        {amount > 0 ? new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumFractionDigits: 0 }).format(amount) : '—'}
                    </span>
                );
            },
        },
    ], []);

    const table = useReactTable({
        data: coupons,
        columns,
        state: { sorting },
        onSortingChange: setSorting,
        getCoreRowModel: getCoreRowModel(),
        getSortedRowModel: getSortedRowModel(),
    });

    if (isLoading) {
        return (
            <div className="space-y-2 p-4">
                {[1, 2, 3, 4, 5].map(i => <Skeleton key={i} className="h-10 w-full" />)}
            </div>
        );
    }

    return (
        <div className="rounded-md border">
            <Table>
                <TableHeader>
                    {table.getHeaderGroups().map((headerGroup) => (
                        <TableRow key={headerGroup.id} className="bg-muted/40 hover:bg-muted/40">
                            {headerGroup.headers.map((header) => (
                                <TableHead key={header.id} className="h-10 text-xs font-semibold uppercase tracking-wide">
                                    {header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}
                                </TableHead>
                            ))}
                        </TableRow>
                    ))}
                </TableHeader>
                <TableBody>
                    {table.getRowModel().rows.length > 0 ? (
                        table.getRowModel().rows.map((row) => (
                            <TableRow key={row.id} className="hover:bg-muted/30 transition-colors">
                                {row.getVisibleCells().map((cell) => (
                                    <TableCell key={cell.id} className="py-2.5">
                                        {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                    </TableCell>
                                ))}
                            </TableRow>
                        ))
                    ) : (
                        <TableRow>
                            <TableCell colSpan={columns.length} className="h-24 text-center text-muted-foreground">
                                No coupons found. Generate a batch to get started.
                            </TableCell>
                        </TableRow>
                    )}
                </TableBody>
            </Table>
        </div>
    );
}

// -------------------------------------------------------------------
// Main Page Component
// -------------------------------------------------------------------
export default function ProjectShow({ id }: { id: string }) {
    const projectId = typeof window !== 'undefined' ? window.location.pathname.split('/').pop() : id;

    const [project, setProject] = useState<any>(null);
    const [batches, setBatches] = useState<any[]>([]);
    const [coupons, setCoupons] = useState<Coupon[]>([]);
    const [couponMeta, setCouponMeta] = useState<{ total: number; per_page: number; current_page: number } | null>(null);
    const [loading, setLoading] = useState(true);
    const [couponsLoading, setCouponsLoading] = useState(false);
    const [deleting, setDeleting] = useState(false);

    const [generatingBatchId, setGeneratingBatchId] = useState<number | null>(null);
    const [activeTab, setActiveTab] = useState<'overview' | 'batches' | 'coupons'>('overview');
    const [selectedTier, setSelectedTier] = useState<string>('all');
    const [searchQuery, setSearchQuery] = useState<string>('');
    const searchDebounceRef = useRef<ReturnType<typeof setTimeout> | null>(null);

    const loadProjectData = async () => {
        try {
            const projRes = await apiFetch(`/api/v1/projects/${projectId}`);
            setProject(projRes.data);

            const batchRes = await apiFetch(`/api/v1/projects/${projectId}/batches`);
            setBatches(batchRes.data || []);
        } catch (error) {
            console.error('Failed to fetch project details:', error);
        } finally {
            setLoading(false);
        }
    };

    const loadCoupons = async (tierId: string = selectedTier, search: string = searchQuery) => {
        setCouponsLoading(true);
        try {
            const params = new URLSearchParams();
            if (tierId !== 'all') params.set('tier_id', tierId);
            if (search.trim()) params.set('search', search.trim());
            const couponUrl = `/api/v1/projects/${projectId}/coupons${params.toString() ? '?' + params.toString() : ''}`;
            const coupRes = await apiFetch(couponUrl);
            const responseData = coupRes.data;

            // Handle paginated response
            if (responseData?.data && Array.isArray(responseData.data)) {
                setCoupons(responseData.data);
                setCouponMeta({ total: responseData.total, per_page: responseData.per_page, current_page: responseData.current_page });
            } else if (Array.isArray(responseData)) {
                setCoupons(responseData);
                setCouponMeta(null);
            } else {
                setCoupons([]);
            }
        } catch (error) {
            console.error('Failed to fetch coupons:', error);
        } finally {
            setCouponsLoading(false);
        }
    };

    useEffect(() => {
        if (projectId) loadProjectData();
    }, [projectId]);

    useEffect(() => {
        if (projectId && activeTab === 'coupons') loadCoupons(selectedTier, searchQuery);
    }, [projectId, selectedTier, activeTab]);

    const handleSearchChange = (value: string) => {
        setSearchQuery(value);
        if (searchDebounceRef.current) clearTimeout(searchDebounceRef.current);
        searchDebounceRef.current = setTimeout(() => {
            loadCoupons(selectedTier, value);
        }, 400);
    };

    const handleTierChange = (value: string) => {
        setSelectedTier(value);
    };

    const handleGenerateBatch = async (batchId: number) => {
        setGeneratingBatchId(batchId);
        try {
            await apiFetch(`/api/v1/batches/${batchId}/generate`, { method: 'POST' });
            loadProjectData();
            if (activeTab === 'coupons') loadCoupons(selectedTier);
        } catch (error) {
            console.error(error);
            alert('Failed to generate batch. It might be already processing.');
        } finally {
            setGeneratingBatchId(null);
        }
    };

    const handleDeleteProject = async () => {
        if (!confirm('Are you sure you want to permanently delete this project and all its generated coupons? This action cannot be undone.')) {
            return;
        }

        setDeleting(true);
        try {
            await apiFetch(`/api/v1/projects/${projectId}`, { method: 'DELETE' });
            router.visit('/projects');
        } catch (error) {
            console.error('Failed to delete project:', error);
            alert('Failed to delete project.');
            setDeleting(false);
        }
    };

    const handleExportExcel = () => {
        const exportUrl = selectedTier === 'all'
            ? `/api/v1/projects/${projectId}/coupons/export`
            : `/api/v1/projects/${projectId}/coupons/export?tier_id=${selectedTier}`;
        window.location.href = exportUrl;
    };

    return (
        <AppLayout breadcrumbs={[
            { title: 'Projects', href: '/projects' },
            { title: project?.name || 'Details', href: `/projects/${projectId}` },
        ]}>
            <Head title={project ? project.name : 'Project Details'} />

            <div className="flex h-full flex-1 flex-col p-6 md:p-8 max-w-7xl mx-auto w-full gap-6">
                {loading ? (
                    <div className="space-y-6">
                        <Skeleton className="h-20 w-1/3" />
                        <Skeleton className="h-[300px] w-full" />
                    </div>
                ) : !project ? (
                    <div className="text-center py-20">Project not found</div>
                ) : (
                    <>
                        {/* Header */}
                        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border-b pb-6">
                            <div>
                                <div className="flex items-center gap-3 mb-1">
                                    <h1 className="text-3xl font-bold tracking-tight">{project.name}</h1>
                                    <div className={`text-xs px-2.5 py-1 rounded-full capitalize border font-medium ${
                                        project.status === 'ready' ? 'border-green-500/30 text-green-600 bg-green-500/10' :
                                        project.status === 'generating' ? 'border-amber-500/30 text-amber-600 bg-amber-500/10' :
                                        'border-slate-500/30 text-slate-600 bg-slate-500/10'
                                    }`}>
                                        {project.status}
                                    </div>
                                </div>
                                <p className="text-muted-foreground font-mono text-sm">{project.code}</p>
                            </div>
                            <Button
                                variant="destructive"
                                size="sm"
                                onClick={handleDeleteProject}
                                disabled={deleting}
                                className="gap-2"
                            >
                                <Trash2 className="w-4 h-4" />
                                {deleting ? 'Deleting...' : 'Delete Project'}
                            </Button>
                        </div>

                        {/* Tab Navigation */}
                        <div className="flex space-x-2 border-b border-border/50 pb-1">
                            <Button variant={activeTab === 'overview' ? 'default' : 'ghost'} size="sm" onClick={() => setActiveTab('overview')}>Overview</Button>
                            <Button variant={activeTab === 'batches' ? 'default' : 'ghost'} size="sm" onClick={() => setActiveTab('batches')}>Batches</Button>
                            <Button
                                variant={activeTab === 'coupons' ? 'default' : 'ghost'}
                                size="sm"
                                onClick={() => setActiveTab('coupons')}
                                disabled={project.status === 'draft'}
                            >
                                Generated Coupons
                            </Button>
                        </div>

                        {/* Overview Tab */}
                        {activeTab === 'overview' && (
                            <div className="grid md:grid-cols-3 gap-6 animate-in fade-in slide-in-from-bottom-2">
                                <Card>
                                    <CardHeader className="pb-3">
                                        <CardTitle className="text-sm font-medium text-muted-foreground">Configuration</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="text-2xl font-bold">{new Intl.NumberFormat().format(project.config.total_coupons)}</div>
                                        <p className="text-xs text-muted-foreground mt-1">
                                            Split into {project.config.total_boxes} boxes ({project.config.coupons_per_box} per box)
                                        </p>
                                    </CardContent>
                                </Card>
                                <Card>
                                    <CardHeader className="pb-3">
                                        <CardTitle className="text-sm font-medium text-muted-foreground">Batches</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="text-2xl font-bold">{project.config.total_batches}</div>
                                        <p className="text-xs text-muted-foreground mt-1">Production batches mapped to this run</p>
                                    </CardContent>
                                </Card>
                                <Card>
                                    <CardHeader className="pb-3">
                                        <CardTitle className="text-sm font-medium text-muted-foreground">Created By</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="text-xl font-medium">{project.creator?.name || 'System'}</div>
                                        <p className="text-xs text-muted-foreground mt-1">
                                            On {new Date(project.created_at).toLocaleDateString()}
                                        </p>
                                    </CardContent>
                                </Card>
                            </div>
                        )}

                        {/* Batches Tab */}
                        {activeTab === 'batches' && (
                            <div className="animate-in fade-in slide-in-from-bottom-2">
                                <h2 className="text-xl font-semibold mb-4">Production Batches</h2>
                                <div className="grid md:grid-cols-2 gap-4">
                                    {batches.length === 0 ? (
                                        <p className="text-muted-foreground">No batches assigned to this project.</p>
                                    ) : (
                                        batches.map((batch) => (
                                            <Card key={batch.id} className="hover:border-primary/50 transition-colors flex flex-col justify-between">
                                                <CardHeader>
                                                    <CardTitle className="text-lg flex justify-between items-center">
                                                        <span>Batch #{batch.batch_number}</span>
                                                        <span className={`text-xs px-2 py-1 rounded capitalize font-medium ${
                                                            batch.status === 'ready' ? 'bg-green-100 text-green-700 dark:bg-green-500/20 dark:text-green-400' :
                                                            batch.status === 'generating' ? 'bg-amber-100 text-amber-700 dark:bg-amber-500/20 dark:text-amber-400' :
                                                            'bg-slate-100 text-slate-700 dark:bg-slate-500/20 dark:text-slate-300'
                                                        }`}>
                                                            {batch.status}
                                                        </span>
                                                    </CardTitle>
                                                    <CardDescription>
                                                        {batch.status === 'ready'
                                                            ? `Generated by ${batch.operator?.name || 'System'} • ${new Date(batch.produced_at || batch.created_at).toLocaleString()}`
                                                            : 'Awaiting operator generation'}
                                                    </CardDescription>
                                                </CardHeader>
                                                <CardContent>
                                                    {batch.status === 'ready' ? (
                                                        <Link href={`/batches/${batch.id}/report`} className="block w-full">
                                                            <Button variant="secondary" size="sm" className="w-full">View Distribution Report</Button>
                                                        </Link>
                                                    ) : (
                                                        <Button
                                                            onClick={() => handleGenerateBatch(batch.id)}
                                                            disabled={generatingBatchId === batch.id || batch.status === 'generating'}
                                                            className="w-full"
                                                        >
                                                            {generatingBatchId === batch.id ? 'Generating Algorithm...' : 'Generate Batch'}
                                                        </Button>
                                                    )}
                                                </CardContent>
                                            </Card>
                                        ))
                                    )}
                                </div>
                            </div>
                        )}

                        {/* Coupons Tab */}
                        {activeTab === 'coupons' && (
                            <div className="animate-in fade-in slide-in-from-bottom-2 space-y-4">
                                {/* Toolbar */}
                                <div className="flex flex-col gap-3">
                                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
                                        <div>
                                            <h2 className="text-xl font-semibold">Generated Coupons</h2>
                                            {couponMeta && (
                                                <p className="text-sm text-muted-foreground">
                                                    Showing {coupons.length} of {new Intl.NumberFormat().format(couponMeta.total)} coupons
                                                </p>
                                            )}
                                        </div>
                                        <Button
                                            variant="outline"
                                            size="sm"
                                            onClick={handleExportExcel}
                                            className="gap-2 shrink-0"
                                            disabled={coupons.length === 0}
                                        >
                                            <Download className="w-4 h-4" />
                                            Export Excel
                                        </Button>
                                    </div>

                                    {/* Search + Filter Row */}
                                    <div className="flex flex-col sm:flex-row gap-2">
                                        {/* Search Input */}
                                        <div className="relative flex-1">
                                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
                                            <input
                                                id="coupon-search"
                                                type="text"
                                                placeholder="Search by serial number..."
                                                value={searchQuery}
                                                onChange={(e) => handleSearchChange(e.target.value)}
                                                className="w-full pl-9 pr-9 h-9 rounded-md border border-input bg-transparent text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                                            />
                                            {searchQuery && (
                                                <button
                                                    onClick={() => handleSearchChange('')}
                                                    className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                                                >
                                                    <X className="w-4 h-4" />
                                                </button>
                                            )}
                                        </div>

                                        {/* Prize Tier Filter */}
                                        <Select value={selectedTier} onValueChange={handleTierChange}>
                                            <SelectTrigger className="w-full sm:w-56" id="tier-filter">
                                                <SelectValue placeholder="All Prize Tiers" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="all">All Prize Tiers</SelectItem>
                                                {project.prize_tiers?.map((tier: any) => (
                                                    <SelectItem key={tier.id} value={String(tier.id)}>
                                                        <div className="flex items-center gap-2">
                                                            <span>{tier.name}</span>
                                                            {tier.amount > 0 && (
                                                                <span className="text-xs text-muted-foreground">
                                                                    ({new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumFractionDigits: 0 }).format(tier.amount)})
                                                                </span>
                                                            )}
                                                        </div>
                                                    </SelectItem>
                                                ))}
                                            </SelectContent>
                                        </Select>
                                    </div>
                                </div>

                                {/* Data Table */}
                                <CouponDataTable coupons={coupons} isLoading={couponsLoading} />

                                {couponMeta && couponMeta.total > couponMeta.per_page && (
                                    <p className="text-center text-xs text-muted-foreground pt-2">
                                        Showing first {couponMeta.per_page} records. Use Export Excel to download the full dataset.
                                    </p>
                                )}
                            </div>
                        )}
                    </>
                )}
            </div>
        </AppLayout>
    );
}

import { Head, Link, router } from '@inertiajs/react';
import AppLayout from '@/layouts/app-layout';
import { useEffect, useState } from 'react';
import { apiFetch } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';

export default function ProjectShow({ id }: { id: string }) {
    const projectId = typeof window !== 'undefined' ? window.location.pathname.split('/').pop() : id;
    
    const [project, setProject] = useState<any>(null);
    const [batches, setBatches] = useState<any[]>([]);
    const [coupons, setCoupons] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const [generating, setGenerating] = useState(false);
    
    const [activeTab, setActiveTab] = useState<'overview' | 'batches' | 'coupons'>('overview');

    const loadProjectData = async () => {
        setLoading(true);
        try {
            const projRes = await apiFetch(`/api/v1/projects/${projectId}`);
            setProject(projRes.data);
            
            if (projRes.data.status !== 'draft') {
                const batchRes = await apiFetch(`/api/v1/projects/${projectId}/batches`);
                setBatches(batchRes.data || []);
                
                const coupRes = await apiFetch(`/api/v1/projects/${projectId}/coupons`);
                setCoupons(coupRes.data || []);
            }
        } catch (error) {
            console.error('Failed to fetch project details:', error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (projectId) loadProjectData();
    }, [projectId]);

    const handleGenerate = async () => {
        setGenerating(true);
        try {
            await apiFetch(`/api/v1/projects/${projectId}/generate`, { method: 'POST' });
            loadProjectData(); // Reload to get new status and batches
        } catch (error) {
            console.error(error);
            alert("Failed to generate coupons. See console.");
        } finally {
            setGenerating(false);
        }
    };

    return (
        <AppLayout breadcrumbs={[
            { title: 'Projects', href: '/projects' },
            { title: project?.name || 'Details', href: `/projects/${projectId}` }
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

                            {project.status === 'draft' && (
                                <Button 
                                    size="lg" 
                                    onClick={handleGenerate} 
                                    disabled={generating}
                                    className="bg-accent text-accent-foreground hover:bg-accent/90"
                                >
                                    {generating ? 'Running Algorithm...' : `Generate ${new Intl.NumberFormat().format(project.config.total_coupons)} Coupons`}
                                </Button>
                            )}
                        </div>

                        {/* Navigation Tabs */}
                        <div className="flex space-x-2 border-b border-border/50 pb-1 mb-2">
                            <Button variant={activeTab === 'overview' ? 'default' : 'ghost'} size="sm" onClick={() => setActiveTab('overview')}>Overview</Button>
                            <Button variant={activeTab === 'batches' ? 'default' : 'ghost'} size="sm" onClick={() => setActiveTab('batches')} disabled={project.status === 'draft'}>Batches</Button>
                            <Button variant={activeTab === 'coupons' ? 'default' : 'ghost'} size="sm" onClick={() => setActiveTab('coupons')} disabled={project.status === 'draft'}>Generated Coupons</Button>
                        </div>

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
                                        <p className="text-xs text-muted-foreground mt-1">
                                            Production batches mapped to this run
                                        </p>
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

                        {activeTab === 'batches' && (
                            <div className="animate-in fade-in slide-in-from-bottom-2">
                                <h2 className="text-xl font-semibold mb-4">Production Batches Log</h2>
                                <div className="grid md:grid-cols-2 gap-4">
                                    {batches.length === 0 ? (
                                        <p className="text-muted-foreground">No batches generated yet.</p>
                                    ) : (
                                        batches.map((batch) => (
                                            <Link key={batch.id} href={`/batches/${batch.id}/report`} className="block">
                                                <Card className="hover:border-primary/50 transition-colors">
                                                    <CardHeader>
                                                        <CardTitle className="text-lg">Batch #{batch.batch_number}</CardTitle>
                                                        <CardDescription>
                                                            Generated by {batch.operator?.name || 'System'} • {new Date(batch.created_at).toLocaleString()}
                                                        </CardDescription>
                                                    </CardHeader>
                                                    <CardContent>
                                                        <Button variant="secondary" size="sm" className="w-full">View Box Distribution Report</Button>
                                                    </CardContent>
                                                </Card>
                                            </Link>
                                        ))
                                    )}
                                </div>
                            </div>
                        )}

                        {activeTab === 'coupons' && (
                            <div className="animate-in fade-in slide-in-from-bottom-2">
                                <h2 className="text-xl font-semibold mb-4">Latest Generated Coupons</h2>
                                <Card className="overflow-hidden">
                                    <div className="overflow-x-auto">
                                        <table className="w-full text-sm text-left">
                                            <thead className="bg-muted/50 font-medium">
                                                <tr>
                                                    <th className="px-4 py-3 border-b">Serial Number</th>
                                                    <th className="px-4 py-3 border-b">Box ID</th>
                                                    <th className="px-4 py-3 border-b">Position</th>
                                                    <th className="px-4 py-3 border-b">Prize Tier</th>
                                                </tr>
                                            </thead>
                                            <tbody className="divide-y">
                                                {coupons.length === 0 ? (
                                                    <tr>
                                                        <td colSpan={4} className="px-4 py-8 text-center text-muted-foreground">No coupons generated yet.</td>
                                                    </tr>
                                                ) : (
                                                    coupons.map((coupon, idx) => (
                                                        <tr key={idx} className="hover:bg-muted/30">
                                                            <td className="px-4 py-2 font-mono font-medium">{coupon.serial_number}</td>
                                                            <td className="px-4 py-2 text-muted-foreground">Box #{coupon.box?.box_number}</td>
                                                            <td className="px-4 py-2 text-muted-foreground">{coupon.position_in_box}</td>
                                                            <td className="px-4 py-2">
                                                                <span className={`px-2 py-1 rounded text-xs font-medium ${coupon.prize_tier?.amount > 0 ? 'bg-primary/10 text-primary' : 'bg-muted text-muted-foreground'}`}>
                                                                    {coupon.prize_tier?.name}
                                                                </span>
                                                            </td>
                                                        </tr>
                                                    ))
                                                )}
                                            </tbody>
                                        </table>
                                    </div>
                                    <div className="p-4 border-t bg-muted/20 text-xs text-muted-foreground text-center">
                                        Showing latest 50 coupons for security reasons. Export features required for full manifest.
                                    </div>
                                </Card>
                            </div>
                        )}
                    </>
                )}
            </div>
        </AppLayout>
    );
}

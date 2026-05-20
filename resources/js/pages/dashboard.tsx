import { Head, Link } from '@inertiajs/react';
import AppLayout from '@/layouts/app-layout';
import { dashboard } from '@/routes';
import type { BreadcrumbItem } from '@/types';
import { useEffect, useState } from 'react';
import { apiFetch } from '@/lib/utils';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import { Activity, FolderKanban, Ticket, Box, ArrowUpRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Dashboard',
        href: dashboard(),
    },
];

export default function Dashboard() {
    const [stats, setStats] = useState<any>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        apiFetch('/api/v1/dashboard/stats')
            .then(res => setStats(res.data))
            .catch(console.error)
            .finally(() => setLoading(false));
    }, []);

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Dashboard Overview" />
            <div className="flex h-full flex-1 flex-col gap-8 overflow-x-auto p-6 md:p-8 max-w-7xl mx-auto w-full">
                
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 border-b border-border/50 pb-6">
                    <div>
                        <h1 className="text-4xl font-bold tracking-tight text-foreground">Overview</h1>
                        <p className="text-muted-foreground mt-2 text-lg">Instant Prize Coupon Generation System Analytics</p>
                    </div>
                    <Link href="/projects/create">
                        <Button size="lg" className="shadow-md bg-primary text-primary-foreground hover:bg-primary/90">
                            Create New Run
                        </Button>
                    </Link>
                </div>

                {loading ? (
                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                        {[1, 2, 3, 4].map(i => <Skeleton key={i} className="h-32 rounded-xl" />)}
                    </div>
                ) : (
                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                        <Card className="bg-card shadow-sm border-l-4 border-l-blue-600 dark:border-l-blue-500 hover:shadow-md transition-all">
                            <CardHeader className="flex flex-row items-center justify-between pb-2">
                                <CardTitle className="text-sm font-medium text-muted-foreground">Total Projects</CardTitle>
                                <FolderKanban className="h-5 w-5 text-blue-600 dark:text-blue-500 opacity-80" />
                            </CardHeader>
                            <CardContent>
                                <div className="text-4xl font-bold">{new Intl.NumberFormat().format(stats?.total_projects || 0)}</div>
                                <p className="text-xs text-muted-foreground mt-2 flex items-center">
                                    <Activity className="h-3 w-3 mr-1 text-green-500" />
                                    Active configurations
                                </p>
                            </CardContent>
                        </Card>

                        <Card className="bg-card shadow-sm border-l-4 border-l-orange-500 dark:border-l-orange-400 hover:shadow-md transition-all">
                            <CardHeader className="flex flex-row items-center justify-between pb-2">
                                <CardTitle className="text-sm font-medium text-muted-foreground">Generated Batches</CardTitle>
                                <Box className="h-5 w-5 text-orange-500 dark:text-orange-400 opacity-80" />
                            </CardHeader>
                            <CardContent>
                                <div className="text-4xl font-bold">{new Intl.NumberFormat().format(stats?.total_batches || 0)}</div>
                                <p className="text-xs text-muted-foreground mt-2 flex items-center">
                                    <Activity className="h-3 w-3 mr-1 text-green-500" />
                                    Production batches processed
                                </p>
                            </CardContent>
                        </Card>

                        <Card className="bg-card shadow-sm border-l-4 border-l-emerald-500 dark:border-l-emerald-400 hover:shadow-md transition-all">
                            <CardHeader className="flex flex-row items-center justify-between pb-2">
                                <CardTitle className="text-sm font-medium text-muted-foreground">Total Coupons</CardTitle>
                                <Ticket className="h-5 w-5 text-emerald-500 dark:text-emerald-400 opacity-80" />
                            </CardHeader>
                            <CardContent>
                                <div className="text-4xl font-bold text-foreground">{new Intl.NumberFormat().format(stats?.total_coupons || 0)}</div>
                                <p className="text-xs text-muted-foreground mt-2 flex items-center">
                                    <Activity className="h-3 w-3 mr-1 text-green-500" />
                                    Individual serials generated
                                </p>
                            </CardContent>
                        </Card>
                    </div>
                )}

                <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-7 mt-4">
                    <Card className="col-span-1 lg:col-span-7 shadow-sm bg-card/50 backdrop-blur-sm">
                        <CardHeader className="flex flex-row items-center justify-between">
                            <div>
                                <CardTitle>Recent Projects</CardTitle>
                                <CardDescription>Latest coupon generation configurations.</CardDescription>
                            </div>
                            <Link href="/projects">
                                <Button variant="outline" size="sm" className="hidden sm:flex">
                                    View All <ArrowUpRight className="ml-2 h-4 w-4" />
                                </Button>
                            </Link>
                        </CardHeader>
                        <CardContent>
                            {loading ? (
                                <div className="space-y-4">
                                    <Skeleton className="h-12 w-full" />
                                    <Skeleton className="h-12 w-full" />
                                    <Skeleton className="h-12 w-full" />
                                </div>
                            ) : !stats?.recent_projects?.length ? (
                                <div className="py-12 text-center text-muted-foreground border border-dashed rounded-lg bg-background/50">
                                    No projects created yet.
                                </div>
                            ) : (
                                <div className="overflow-x-auto">
                                    <table className="w-full text-sm text-left">
                                        <thead className="bg-muted/40 font-medium text-muted-foreground">
                                            <tr>
                                                <th className="px-4 py-3 border-b rounded-tl-lg">Code</th>
                                                <th className="px-4 py-3 border-b">Project Name</th>
                                                <th className="px-4 py-3 border-b">Status</th>
                                                <th className="px-4 py-3 border-b">Coupons</th>
                                                <th className="px-4 py-3 border-b">Created By</th>
                                                <th className="px-4 py-3 border-b text-right rounded-tr-lg">Action</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-border/50">
                                            {stats.recent_projects.map((project: any) => (
                                                <tr key={project.id} className="hover:bg-muted/30 transition-colors group">
                                                    <td className="px-4 py-3 font-mono text-xs">{project.code}</td>
                                                    <td className="px-4 py-3 font-medium text-foreground">{project.name}</td>
                                                    <td className="px-4 py-3">
                                                        <span className={`px-2.5 py-1 rounded-full text-xs font-medium border ${
                                                            project.status === 'ready' ? 'border-green-500/30 text-green-600 bg-green-500/10' :
                                                            project.status === 'generating' ? 'border-amber-500/30 text-amber-600 bg-amber-500/10' :
                                                            'border-slate-500/30 text-slate-600 bg-slate-500/10'
                                                        }`}>
                                                            {project.status}
                                                        </span>
                                                    </td>
                                                    <td className="px-4 py-3 text-muted-foreground">
                                                        {new Intl.NumberFormat().format(project.config.total_coupons)}
                                                    </td>
                                                    <td className="px-4 py-3 text-muted-foreground">
                                                        {project.creator?.name || 'System'}
                                                    </td>
                                                    <td className="px-4 py-3 text-right">
                                                        <Link href={`/projects/${project.id}`}>
                                                            <Button variant="ghost" size="sm" className="opacity-0 group-hover:opacity-100 transition-opacity">
                                                                Details
                                                            </Button>
                                                        </Link>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            )}
                        </CardContent>
                    </Card>
                </div>
                
            </div>
        </AppLayout>
    );
}

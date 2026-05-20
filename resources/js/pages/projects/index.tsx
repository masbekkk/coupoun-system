import { Head, Link } from '@inertiajs/react';
import AppLayout from '@/layouts/app-layout';
import { useEffect, useState } from 'react';
import { apiFetch } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';

export default function ProjectsIndex() {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        apiFetch('/api/v1/projects')
            .then(res => setProjects(res.data?.data || res.data || []))
            .catch(console.error)
            .finally(() => setLoading(false));
    }, []);

    return (
        <AppLayout breadcrumbs={[{ title: 'Projects', href: '/projects' }]}>
            <Head title="Coupon Projects" />
            
            <div className="flex h-full flex-1 flex-col gap-6 p-6 md:p-8 max-w-7xl mx-auto w-full">
                <div className="flex items-center justify-between border-b pb-4">
                    <div>
                        <h1 className="text-3xl font-bold tracking-tight text-foreground">Coupon Projects</h1>
                        <p className="text-muted-foreground mt-1">Manage and track your generated coupon systems.</p>
                    </div>
                    <Link href="/projects/create">
                        <Button size="lg" className="shadow-sm">Create New Project</Button>
                    </Link>
                </div>

                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {loading ? (
                        [1,2,3].map(i => <Skeleton key={i} className="h-[220px] w-full rounded-xl" />)
                    ) : projects.length === 0 ? (
                        <div className="col-span-full py-24 text-center border border-dashed rounded-xl bg-card/50">
                            <p className="text-muted-foreground text-lg">No projects found. Create one to get started.</p>
                            <Link href="/projects/create" className="inline-block mt-4">
                                <Button variant="secondary">Create Project</Button>
                            </Link>
                        </div>
                    ) : (
                        projects.map((project: any) => (
                            <Card key={project.id} className="transition-all hover:border-primary/40 hover:shadow-md bg-card/50 backdrop-blur-sm">
                                <CardHeader>
                                    <div className="flex items-center justify-between mb-2">
                                        <div className="text-xs font-mono bg-secondary/80 px-2.5 py-1 rounded-md text-secondary-foreground font-semibold">
                                            {project.code}
                                        </div>
                                        <div className={`text-xs px-2.5 py-1 rounded-full capitalize border font-medium ${
                                            project.status === 'ready' ? 'border-green-500/30 text-green-600 bg-green-500/10 dark:text-green-400' :
                                            project.status === 'generating' ? 'border-amber-500/30 text-amber-600 bg-amber-500/10 dark:text-amber-400' :
                                            'border-slate-500/30 text-slate-600 bg-slate-500/10 dark:text-slate-400'
                                        }`}>
                                            {project.status}
                                        </div>
                                    </div>
                                    <CardTitle className="text-xl line-clamp-1">{project.name}</CardTitle>
                                    <CardDescription className="line-clamp-2 min-h-[40px]">
                                        {project.description || 'No description provided'}
                                    </CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <div className="flex justify-between text-sm mb-6 pb-4 border-b border-border/50">
                                        <span className="text-muted-foreground">Total Coupons:</span>
                                        <span className="font-semibold text-foreground">{new Intl.NumberFormat().format(project.config.total_coupons)}</span>
                                    </div>
                                    <div className="flex gap-2">
                                        <Link href={`/projects/${project.id}`} className="block w-full flex-1">
                                            <Button variant="outline" className="w-full">View Details</Button>
                                        </Link>
                                    </div>
                                </CardContent>
                            </Card>
                        ))
                    )}
                </div>
            </div>
        </AppLayout>
    );
}

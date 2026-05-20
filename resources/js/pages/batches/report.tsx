import { Head, Link } from '@inertiajs/react';
import AppLayout from '@/layouts/app-layout';
import { useEffect, useState } from 'react';
import { apiFetch } from '@/lib/utils';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

export default function BatchReport() {
    const batchId = typeof window !== 'undefined' ? window.location.pathname.split('/')[2] : '1';
    
    const [report, setReport] = useState<any>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        apiFetch(`/api/v1/batches/${batchId}/report`)
            .then(res => setReport(res.data))
            .catch(console.error)
            .finally(() => setLoading(false));
    }, [batchId]);

    return (
        <AppLayout breadcrumbs={[
            { title: 'Projects', href: '/projects' },
            { title: report ? report.project_name : 'Batch Report', href: '#' }
        ]}>
            <Head title={`Batch Report ${batchId}`} />
            
            <div className="flex h-full flex-1 flex-col p-6 md:p-8 max-w-6xl mx-auto w-full gap-6">
                
                <div className="flex items-center gap-4 mb-2">
                    <Link href="/projects">
                        <Button variant="ghost" size="icon" className="rounded-full">
                            <ArrowLeft className="h-5 w-5" />
                        </Button>
                    </Link>
                    <div>
                        <h1 className="text-3xl font-bold tracking-tight">Batch #{report?.batch_number || batchId} Report</h1>
                        {report && <p className="text-muted-foreground mt-1">Project: {report.project_name}</p>}
                    </div>
                </div>

                {loading ? (
                    <div className="space-y-4">
                        <Skeleton className="h-[200px] w-full rounded-xl" />
                        <Skeleton className="h-[400px] w-full rounded-xl" />
                    </div>
                ) : !report ? (
                    <div className="py-20 text-center text-muted-foreground">Report not found.</div>
                ) : (
                    <>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                            <Card className="bg-muted/30">
                                <CardContent className="p-4">
                                    <div className="text-xs text-muted-foreground font-medium uppercase tracking-wider mb-1">Operator</div>
                                    <div className="font-semibold text-lg">{report.operator.name}</div>
                                </CardContent>
                            </Card>
                            <Card className="bg-muted/30">
                                <CardContent className="p-4">
                                    <div className="text-xs text-muted-foreground font-medium uppercase tracking-wider mb-1">Location</div>
                                    <div className="font-semibold text-lg">{report.location}</div>
                                </CardContent>
                            </Card>
                            <Card className="bg-muted/30">
                                <CardContent className="p-4">
                                    <div className="text-xs text-muted-foreground font-medium uppercase tracking-wider mb-1">Total Boxes</div>
                                    <div className="font-semibold text-lg">{report.total_boxes}</div>
                                </CardContent>
                            </Card>
                            <Card className="bg-muted/30">
                                <CardContent className="p-4">
                                    <div className="text-xs text-muted-foreground font-medium uppercase tracking-wider mb-1">Status</div>
                                    <div className="font-semibold text-lg capitalize">{report.status}</div>
                                </CardContent>
                            </Card>
                        </div>

                        <div className="space-y-6">
                            <h2 className="text-xl font-semibold border-b pb-2">Box Distributions</h2>
                            
                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {report.boxes.map((box: any) => (
                                    <Card key={box.box_number} className="overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                                        <CardHeader className="bg-primary/5 pb-4">
                                            <CardTitle className="text-lg flex justify-between items-center">
                                                <span>Box #{box.box_number}</span>
                                                <span className="text-sm font-normal text-muted-foreground">
                                                    {new Intl.NumberFormat().format(box.total_coupons)} coupons
                                                </span>
                                            </CardTitle>
                                        </CardHeader>
                                        <CardContent className="p-0">
                                            <table className="w-full text-sm">
                                                <tbody className="divide-y">
                                                    {Object.entries(box.prize_distribution).map(([prize, count]: [string, any]) => (
                                                        <tr key={prize} className="hover:bg-muted/30">
                                                            <td className="px-4 py-3">{prize}</td>
                                                            <td className="px-4 py-3 text-right font-medium text-primary">
                                                                {count}
                                                            </td>
                                                        </tr>
                                                    ))}
                                                </tbody>
                                            </table>
                                        </CardContent>
                                    </Card>
                                ))}
                            </div>
                        </div>
                    </>
                )}
            </div>
        </AppLayout>
    );
}

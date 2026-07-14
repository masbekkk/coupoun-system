import { t as apiFetch } from "./utils-dvte0Nyw.js";
import { n as Button } from "./app-logo-icon-BdX04kDK.js";
import { i as Skeleton, t as app_layout_default } from "./app-layout-CSnI9nK2.js";
import { t as dashboard } from "./routes-CxfnxDFD.js";
import { a as CardTitle, i as CardHeader, n as CardContent, r as CardDescription, t as Card } from "./card-C2uVgNnb.js";
import { Head, Link } from "@inertiajs/react";
import { useEffect, useState } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import { Activity, ArrowUpRight, Box, FolderKanban, Ticket } from "lucide-react";
//#region resources/js/pages/dashboard.tsx
var breadcrumbs = [{
	title: "Dashboard",
	href: dashboard()
}];
function Dashboard() {
	const [stats, setStats] = useState(null);
	const [loading, setLoading] = useState(true);
	useEffect(() => {
		apiFetch("/api/v1/dashboard/stats").then((res) => setStats(res.data)).catch(console.error).finally(() => setLoading(false));
	}, []);
	return /* @__PURE__ */ jsxs(app_layout_default, {
		breadcrumbs,
		children: [/* @__PURE__ */ jsx(Head, { title: "Dashboard Overview" }), /* @__PURE__ */ jsxs("div", {
			className: "flex h-full flex-1 flex-col gap-8 overflow-x-auto p-6 md:p-8 max-w-7xl mx-auto w-full",
			children: [
				/* @__PURE__ */ jsxs("div", {
					className: "flex flex-col md:flex-row justify-between items-start md:items-end gap-4 border-b border-border/50 pb-6",
					children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h1", {
						className: "text-4xl font-bold tracking-tight text-foreground",
						children: "Overview"
					}), /* @__PURE__ */ jsx("p", {
						className: "text-muted-foreground mt-2 text-lg",
						children: "Instant Prize Coupon Generation System Analytics"
					})] }), /* @__PURE__ */ jsx(Link, {
						href: "/projects/create",
						children: /* @__PURE__ */ jsx(Button, {
							size: "lg",
							className: "shadow-md bg-primary text-primary-foreground hover:bg-primary/90",
							children: "Create New Run"
						})
					})]
				}),
				loading ? /* @__PURE__ */ jsx("div", {
					className: "grid gap-6 md:grid-cols-2 lg:grid-cols-4",
					children: [
						1,
						2,
						3,
						4
					].map((i) => /* @__PURE__ */ jsx(Skeleton, { className: "h-32 rounded-xl" }, i))
				}) : /* @__PURE__ */ jsxs("div", {
					className: "grid gap-6 md:grid-cols-2 lg:grid-cols-3",
					children: [
						/* @__PURE__ */ jsxs(Card, {
							className: "bg-card shadow-sm border-l-4 border-l-blue-600 dark:border-l-blue-500 hover:shadow-md transition-all",
							children: [/* @__PURE__ */ jsxs(CardHeader, {
								className: "flex flex-row items-center justify-between pb-2",
								children: [/* @__PURE__ */ jsx(CardTitle, {
									className: "text-sm font-medium text-muted-foreground",
									children: "Total Projects"
								}), /* @__PURE__ */ jsx(FolderKanban, { className: "h-5 w-5 text-blue-600 dark:text-blue-500 opacity-80" })]
							}), /* @__PURE__ */ jsxs(CardContent, { children: [/* @__PURE__ */ jsx("div", {
								className: "text-4xl font-bold",
								children: new Intl.NumberFormat().format(stats?.total_projects || 0)
							}), /* @__PURE__ */ jsxs("p", {
								className: "text-xs text-muted-foreground mt-2 flex items-center",
								children: [/* @__PURE__ */ jsx(Activity, { className: "h-3 w-3 mr-1 text-green-500" }), "Active configurations"]
							})] })]
						}),
						/* @__PURE__ */ jsxs(Card, {
							className: "bg-card shadow-sm border-l-4 border-l-orange-500 dark:border-l-orange-400 hover:shadow-md transition-all",
							children: [/* @__PURE__ */ jsxs(CardHeader, {
								className: "flex flex-row items-center justify-between pb-2",
								children: [/* @__PURE__ */ jsx(CardTitle, {
									className: "text-sm font-medium text-muted-foreground",
									children: "Generated Batches"
								}), /* @__PURE__ */ jsx(Box, { className: "h-5 w-5 text-orange-500 dark:text-orange-400 opacity-80" })]
							}), /* @__PURE__ */ jsxs(CardContent, { children: [/* @__PURE__ */ jsx("div", {
								className: "text-4xl font-bold",
								children: new Intl.NumberFormat().format(stats?.total_batches || 0)
							}), /* @__PURE__ */ jsxs("p", {
								className: "text-xs text-muted-foreground mt-2 flex items-center",
								children: [/* @__PURE__ */ jsx(Activity, { className: "h-3 w-3 mr-1 text-green-500" }), "Production batches processed"]
							})] })]
						}),
						/* @__PURE__ */ jsxs(Card, {
							className: "bg-card shadow-sm border-l-4 border-l-emerald-500 dark:border-l-emerald-400 hover:shadow-md transition-all",
							children: [/* @__PURE__ */ jsxs(CardHeader, {
								className: "flex flex-row items-center justify-between pb-2",
								children: [/* @__PURE__ */ jsx(CardTitle, {
									className: "text-sm font-medium text-muted-foreground",
									children: "Total Coupons"
								}), /* @__PURE__ */ jsx(Ticket, { className: "h-5 w-5 text-emerald-500 dark:text-emerald-400 opacity-80" })]
							}), /* @__PURE__ */ jsxs(CardContent, { children: [/* @__PURE__ */ jsx("div", {
								className: "text-4xl font-bold text-foreground",
								children: new Intl.NumberFormat().format(stats?.total_coupons || 0)
							}), /* @__PURE__ */ jsxs("p", {
								className: "text-xs text-muted-foreground mt-2 flex items-center",
								children: [/* @__PURE__ */ jsx(Activity, { className: "h-3 w-3 mr-1 text-green-500" }), "Individual serials generated"]
							})] })]
						})
					]
				}),
				/* @__PURE__ */ jsx("div", {
					className: "grid gap-6 md:grid-cols-1 lg:grid-cols-7 mt-4",
					children: /* @__PURE__ */ jsxs(Card, {
						className: "col-span-1 lg:col-span-7 shadow-sm bg-card/50 backdrop-blur-sm",
						children: [/* @__PURE__ */ jsxs(CardHeader, {
							className: "flex flex-row items-center justify-between",
							children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx(CardTitle, { children: "Recent Projects" }), /* @__PURE__ */ jsx(CardDescription, { children: "Latest coupon generation configurations." })] }), /* @__PURE__ */ jsx(Link, {
								href: "/projects",
								children: /* @__PURE__ */ jsxs(Button, {
									variant: "outline",
									size: "sm",
									className: "hidden sm:flex",
									children: ["View All ", /* @__PURE__ */ jsx(ArrowUpRight, { className: "ml-2 h-4 w-4" })]
								})
							})]
						}), /* @__PURE__ */ jsx(CardContent, { children: loading ? /* @__PURE__ */ jsxs("div", {
							className: "space-y-4",
							children: [
								/* @__PURE__ */ jsx(Skeleton, { className: "h-12 w-full" }),
								/* @__PURE__ */ jsx(Skeleton, { className: "h-12 w-full" }),
								/* @__PURE__ */ jsx(Skeleton, { className: "h-12 w-full" })
							]
						}) : !stats?.recent_projects?.length ? /* @__PURE__ */ jsx("div", {
							className: "py-12 text-center text-muted-foreground border border-dashed rounded-lg bg-background/50",
							children: "No projects created yet."
						}) : /* @__PURE__ */ jsx("div", {
							className: "overflow-x-auto",
							children: /* @__PURE__ */ jsxs("table", {
								className: "w-full text-sm text-left",
								children: [/* @__PURE__ */ jsx("thead", {
									className: "bg-muted/40 font-medium text-muted-foreground",
									children: /* @__PURE__ */ jsxs("tr", { children: [
										/* @__PURE__ */ jsx("th", {
											className: "px-4 py-3 border-b rounded-tl-lg",
											children: "Code"
										}),
										/* @__PURE__ */ jsx("th", {
											className: "px-4 py-3 border-b",
											children: "Project Name"
										}),
										/* @__PURE__ */ jsx("th", {
											className: "px-4 py-3 border-b",
											children: "Status"
										}),
										/* @__PURE__ */ jsx("th", {
											className: "px-4 py-3 border-b",
											children: "Coupons"
										}),
										/* @__PURE__ */ jsx("th", {
											className: "px-4 py-3 border-b",
											children: "Created By"
										}),
										/* @__PURE__ */ jsx("th", {
											className: "px-4 py-3 border-b text-right rounded-tr-lg",
											children: "Action"
										})
									] })
								}), /* @__PURE__ */ jsx("tbody", {
									className: "divide-y divide-border/50",
									children: stats.recent_projects.map((project) => /* @__PURE__ */ jsxs("tr", {
										className: "hover:bg-muted/30 transition-colors group",
										children: [
											/* @__PURE__ */ jsx("td", {
												className: "px-4 py-3 font-mono text-xs",
												children: project.code
											}),
											/* @__PURE__ */ jsx("td", {
												className: "px-4 py-3 font-medium text-foreground",
												children: project.name
											}),
											/* @__PURE__ */ jsx("td", {
												className: "px-4 py-3",
												children: /* @__PURE__ */ jsx("span", {
													className: `px-2.5 py-1 rounded-full text-xs font-medium border ${project.status === "ready" ? "border-green-500/30 text-green-600 bg-green-500/10" : project.status === "generating" ? "border-amber-500/30 text-amber-600 bg-amber-500/10" : "border-slate-500/30 text-slate-600 bg-slate-500/10"}`,
													children: project.status
												})
											}),
											/* @__PURE__ */ jsx("td", {
												className: "px-4 py-3 text-muted-foreground",
												children: new Intl.NumberFormat().format(project.config.total_coupons)
											}),
											/* @__PURE__ */ jsx("td", {
												className: "px-4 py-3 text-muted-foreground",
												children: project.creator?.name || "System"
											}),
											/* @__PURE__ */ jsx("td", {
												className: "px-4 py-3 text-right",
												children: /* @__PURE__ */ jsx(Link, {
													href: `/projects/${project.id}`,
													children: /* @__PURE__ */ jsx(Button, {
														variant: "ghost",
														size: "sm",
														className: "group-hover:opacity-100 transition-opacity",
														children: "Details"
													})
												})
											})
										]
									}, project.id))
								})]
							})
						}) })]
					})
				})
			]
		})]
	});
}
//#endregion
export { Dashboard as default };

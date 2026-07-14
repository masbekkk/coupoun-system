import { t as apiFetch } from "./utils-dvte0Nyw.js";
import { n as Button } from "./app-logo-icon-BdX04kDK.js";
import { i as Skeleton, t as app_layout_default } from "./app-layout-CSnI9nK2.js";
import { a as CardTitle, i as CardHeader, n as CardContent, r as CardDescription, t as Card } from "./card-C2uVgNnb.js";
import { Head, Link } from "@inertiajs/react";
import { useEffect, useState } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
//#region resources/js/pages/projects/index.tsx
function ProjectsIndex() {
	const [projects, setProjects] = useState([]);
	const [loading, setLoading] = useState(true);
	useEffect(() => {
		apiFetch("/api/v1/projects").then((res) => setProjects(res.data?.data || res.data || [])).catch(console.error).finally(() => setLoading(false));
	}, []);
	return /* @__PURE__ */ jsxs(app_layout_default, {
		breadcrumbs: [{
			title: "Projects",
			href: "/projects"
		}],
		children: [/* @__PURE__ */ jsx(Head, { title: "Coupon Projects" }), /* @__PURE__ */ jsxs("div", {
			className: "flex h-full flex-1 flex-col gap-6 p-6 md:p-8 max-w-7xl mx-auto w-full",
			children: [/* @__PURE__ */ jsxs("div", {
				className: "flex items-center justify-between border-b pb-4",
				children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h1", {
					className: "text-3xl font-bold tracking-tight text-foreground",
					children: "Coupon Projects"
				}), /* @__PURE__ */ jsx("p", {
					className: "text-muted-foreground mt-1",
					children: "Manage and track your generated coupon systems."
				})] }), /* @__PURE__ */ jsx(Link, {
					href: "/projects/create",
					children: /* @__PURE__ */ jsx(Button, {
						size: "lg",
						className: "shadow-sm",
						children: "Create New Project"
					})
				})]
			}), /* @__PURE__ */ jsx("div", {
				className: "grid gap-6 md:grid-cols-2 lg:grid-cols-3",
				children: loading ? [
					1,
					2,
					3
				].map((i) => /* @__PURE__ */ jsx(Skeleton, { className: "h-[220px] w-full rounded-xl" }, i)) : projects.length === 0 ? /* @__PURE__ */ jsxs("div", {
					className: "col-span-full py-24 text-center border border-dashed rounded-xl bg-card/50",
					children: [/* @__PURE__ */ jsx("p", {
						className: "text-muted-foreground text-lg",
						children: "No projects found. Create one to get started."
					}), /* @__PURE__ */ jsx(Link, {
						href: "/projects/create",
						className: "inline-block mt-4",
						children: /* @__PURE__ */ jsx(Button, {
							variant: "secondary",
							children: "Create Project"
						})
					})]
				}) : projects.map((project) => /* @__PURE__ */ jsxs(Card, {
					className: "transition-all hover:border-primary/40 hover:shadow-md bg-card/50 backdrop-blur-sm",
					children: [/* @__PURE__ */ jsxs(CardHeader, { children: [
						/* @__PURE__ */ jsxs("div", {
							className: "flex items-center justify-between mb-2",
							children: [/* @__PURE__ */ jsx("div", {
								className: "text-xs font-mono bg-secondary/80 px-2.5 py-1 rounded-md text-secondary-foreground font-semibold",
								children: project.code
							}), /* @__PURE__ */ jsx("div", {
								className: `text-xs px-2.5 py-1 rounded-full capitalize border font-medium ${project.status === "ready" ? "border-green-500/30 text-green-600 bg-green-500/10 dark:text-green-400" : project.status === "generating" ? "border-amber-500/30 text-amber-600 bg-amber-500/10 dark:text-amber-400" : "border-slate-500/30 text-slate-600 bg-slate-500/10 dark:text-slate-400"}`,
								children: project.status
							})]
						}),
						/* @__PURE__ */ jsx(CardTitle, {
							className: "text-xl line-clamp-1",
							children: project.name
						}),
						/* @__PURE__ */ jsx(CardDescription, {
							className: "line-clamp-2 min-h-[40px]",
							children: project.description || "No description provided"
						})
					] }), /* @__PURE__ */ jsxs(CardContent, { children: [/* @__PURE__ */ jsxs("div", {
						className: "flex justify-between text-sm mb-6 pb-4 border-b border-border/50",
						children: [/* @__PURE__ */ jsx("span", {
							className: "text-muted-foreground",
							children: "Total Coupons:"
						}), /* @__PURE__ */ jsx("span", {
							className: "font-semibold text-foreground",
							children: new Intl.NumberFormat().format(project.config.total_coupons)
						})]
					}), /* @__PURE__ */ jsx("div", {
						className: "flex gap-2",
						children: /* @__PURE__ */ jsx(Link, {
							href: `/projects/${project.id}`,
							className: "block w-full flex-1",
							children: /* @__PURE__ */ jsx(Button, {
								variant: "outline",
								className: "w-full",
								children: "View Details"
							})
						})
					})] })]
				}, project.id))
			})]
		})]
	});
}
//#endregion
export { ProjectsIndex as default };

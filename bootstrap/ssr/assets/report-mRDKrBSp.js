import { t as apiFetch } from "./utils-dvte0Nyw.js";
import { n as Button } from "./app-logo-icon-BdX04kDK.js";
import { i as Skeleton, t as app_layout_default } from "./app-layout-CSnI9nK2.js";
import { a as CardTitle, i as CardHeader, n as CardContent, t as Card } from "./card-C2uVgNnb.js";
import { Head, Link } from "@inertiajs/react";
import { useEffect, useState } from "react";
import { Fragment as Fragment$1, jsx, jsxs } from "react/jsx-runtime";
import { ArrowLeft } from "lucide-react";
//#region resources/js/pages/batches/report.tsx
function BatchReport() {
	const batchId = typeof window !== "undefined" ? window.location.pathname.split("/")[2] : "1";
	const [report, setReport] = useState(null);
	const [loading, setLoading] = useState(true);
	useEffect(() => {
		apiFetch(`/api/v1/batches/${batchId}/report`).then((res) => setReport(res.data)).catch(console.error).finally(() => setLoading(false));
	}, [batchId]);
	return /* @__PURE__ */ jsxs(app_layout_default, {
		breadcrumbs: [{
			title: "Projects",
			href: "/projects"
		}, {
			title: report ? report.project_name : "Batch Report",
			href: "#"
		}],
		children: [/* @__PURE__ */ jsx(Head, { title: `Batch Report ${batchId}` }), /* @__PURE__ */ jsxs("div", {
			className: "flex h-full flex-1 flex-col p-6 md:p-8 max-w-6xl mx-auto w-full gap-6",
			children: [/* @__PURE__ */ jsxs("div", {
				className: "flex items-center gap-4 mb-2",
				children: [/* @__PURE__ */ jsx(Link, {
					href: "/projects",
					children: /* @__PURE__ */ jsx(Button, {
						variant: "ghost",
						size: "icon",
						className: "rounded-full",
						children: /* @__PURE__ */ jsx(ArrowLeft, { className: "h-5 w-5" })
					})
				}), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsxs("h1", {
					className: "text-3xl font-bold tracking-tight",
					children: [
						"Batch #",
						report?.batch_number || batchId,
						" Report"
					]
				}), report && /* @__PURE__ */ jsxs("p", {
					className: "text-muted-foreground mt-1",
					children: ["Project: ", report.project_name]
				})] })]
			}), loading ? /* @__PURE__ */ jsxs("div", {
				className: "space-y-4",
				children: [/* @__PURE__ */ jsx(Skeleton, { className: "h-[200px] w-full rounded-xl" }), /* @__PURE__ */ jsx(Skeleton, { className: "h-[400px] w-full rounded-xl" })]
			}) : !report ? /* @__PURE__ */ jsx("div", {
				className: "py-20 text-center text-muted-foreground",
				children: "Report not found."
			}) : /* @__PURE__ */ jsxs(Fragment$1, { children: [/* @__PURE__ */ jsxs("div", {
				className: "grid grid-cols-2 md:grid-cols-4 gap-4 mb-4",
				children: [
					/* @__PURE__ */ jsx(Card, {
						className: "bg-muted/30",
						children: /* @__PURE__ */ jsxs(CardContent, {
							className: "p-4",
							children: [/* @__PURE__ */ jsx("div", {
								className: "text-xs text-muted-foreground font-medium uppercase tracking-wider mb-1",
								children: "Operator"
							}), /* @__PURE__ */ jsx("div", {
								className: "font-semibold text-lg",
								children: report.operator.name
							})]
						})
					}),
					/* @__PURE__ */ jsx(Card, {
						className: "bg-muted/30",
						children: /* @__PURE__ */ jsxs(CardContent, {
							className: "p-4",
							children: [/* @__PURE__ */ jsx("div", {
								className: "text-xs text-muted-foreground font-medium uppercase tracking-wider mb-1",
								children: "Location"
							}), /* @__PURE__ */ jsx("div", {
								className: "font-semibold text-lg",
								children: report.location
							})]
						})
					}),
					/* @__PURE__ */ jsx(Card, {
						className: "bg-muted/30",
						children: /* @__PURE__ */ jsxs(CardContent, {
							className: "p-4",
							children: [/* @__PURE__ */ jsx("div", {
								className: "text-xs text-muted-foreground font-medium uppercase tracking-wider mb-1",
								children: "Total Boxes"
							}), /* @__PURE__ */ jsx("div", {
								className: "font-semibold text-lg",
								children: report.total_boxes
							})]
						})
					}),
					/* @__PURE__ */ jsx(Card, {
						className: "bg-muted/30",
						children: /* @__PURE__ */ jsxs(CardContent, {
							className: "p-4",
							children: [/* @__PURE__ */ jsx("div", {
								className: "text-xs text-muted-foreground font-medium uppercase tracking-wider mb-1",
								children: "Status"
							}), /* @__PURE__ */ jsx("div", {
								className: "font-semibold text-lg capitalize",
								children: report.status
							})]
						})
					})
				]
			}), /* @__PURE__ */ jsxs("div", {
				className: "space-y-6",
				children: [/* @__PURE__ */ jsx("h2", {
					className: "text-xl font-semibold border-b pb-2",
					children: "Box Distributions"
				}), /* @__PURE__ */ jsx("div", {
					className: "grid md:grid-cols-2 lg:grid-cols-3 gap-6",
					children: report.boxes.map((box) => /* @__PURE__ */ jsxs(Card, {
						className: "overflow-hidden shadow-sm hover:shadow-md transition-shadow",
						children: [/* @__PURE__ */ jsx(CardHeader, {
							className: "bg-primary/5 pb-4",
							children: /* @__PURE__ */ jsxs(CardTitle, {
								className: "text-lg flex justify-between items-center",
								children: [/* @__PURE__ */ jsxs("span", { children: ["Box #", box.box_number] }), /* @__PURE__ */ jsxs("span", {
									className: "text-sm font-normal text-muted-foreground",
									children: [new Intl.NumberFormat().format(box.total_coupons), " coupons"]
								})]
							})
						}), /* @__PURE__ */ jsx(CardContent, {
							className: "p-0",
							children: /* @__PURE__ */ jsx("table", {
								className: "w-full text-sm",
								children: /* @__PURE__ */ jsx("tbody", {
									className: "divide-y",
									children: Object.entries(box.prize_distribution).map(([prize, count]) => /* @__PURE__ */ jsxs("tr", {
										className: "hover:bg-muted/30",
										children: [/* @__PURE__ */ jsx("td", {
											className: "px-4 py-3",
											children: prize
										}), /* @__PURE__ */ jsx("td", {
											className: "px-4 py-3 text-right font-medium text-primary",
											children: count
										})]
									}, prize))
								})
							})
						})]
					}, box.box_number))
				})]
			})] })]
		})]
	});
}
//#endregion
export { BatchReport as default };

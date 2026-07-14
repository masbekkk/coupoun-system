import { n as cn, t as apiFetch } from "./utils-dvte0Nyw.js";
import { n as Button } from "./app-logo-icon-BdX04kDK.js";
import { i as Skeleton, t as app_layout_default } from "./app-layout-CSnI9nK2.js";
import { a as CardTitle, i as CardHeader, n as CardContent, r as CardDescription, t as Card } from "./card-C2uVgNnb.js";
import { Head, Link, router } from "@inertiajs/react";
import { useEffect, useMemo, useRef, useState } from "react";
import { Fragment as Fragment$1, jsx, jsxs } from "react/jsx-runtime";
import { CheckIcon, ChevronDown, ChevronDownIcon, ChevronUp, ChevronUpIcon, ChevronsUpDown, Download, Search, Trash2, X } from "lucide-react";
import { flexRender, getCoreRowModel, getSortedRowModel, useReactTable } from "@tanstack/react-table";
import * as SelectPrimitive from "@radix-ui/react-select";
//#region resources/js/components/ui/table.tsx
function Table({ className, ...props }) {
	return /* @__PURE__ */ jsx("div", {
		"data-slot": "table-container",
		className: "relative w-full overflow-x-auto",
		children: /* @__PURE__ */ jsx("table", {
			"data-slot": "table",
			className: cn("w-full caption-bottom text-sm", className),
			...props
		})
	});
}
function TableHeader({ className, ...props }) {
	return /* @__PURE__ */ jsx("thead", {
		"data-slot": "table-header",
		className: cn("[&_tr]:border-b", className),
		...props
	});
}
function TableBody({ className, ...props }) {
	return /* @__PURE__ */ jsx("tbody", {
		"data-slot": "table-body",
		className: cn("[&_tr:last-child]:border-0", className),
		...props
	});
}
function TableRow({ className, ...props }) {
	return /* @__PURE__ */ jsx("tr", {
		"data-slot": "table-row",
		className: cn("border-b transition-colors hover:bg-muted/50 has-aria-expanded:bg-muted/50 data-[state=selected]:bg-muted", className),
		...props
	});
}
function TableHead({ className, ...props }) {
	return /* @__PURE__ */ jsx("th", {
		"data-slot": "table-head",
		className: cn("h-10 px-2 text-left align-middle font-medium whitespace-nowrap text-foreground [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]", className),
		...props
	});
}
function TableCell({ className, ...props }) {
	return /* @__PURE__ */ jsx("td", {
		"data-slot": "table-cell",
		className: cn("p-2 align-middle whitespace-nowrap [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]", className),
		...props
	});
}
//#endregion
//#region resources/js/components/ui/select.tsx
function Select({ ...props }) {
	return /* @__PURE__ */ jsx(SelectPrimitive.Root, {
		"data-slot": "select",
		...props
	});
}
function SelectValue({ ...props }) {
	return /* @__PURE__ */ jsx(SelectPrimitive.Value, {
		"data-slot": "select-value",
		...props
	});
}
function SelectTrigger({ className, size = "default", children, ...props }) {
	return /* @__PURE__ */ jsxs(SelectPrimitive.Trigger, {
		"data-slot": "select-trigger",
		"data-size": size,
		className: cn("border-input data-[placeholder]:text-muted-foreground [&_svg:not([class*='text-'])]:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 dark:hover:bg-input/50 flex w-fit items-center justify-between gap-2 rounded-md border bg-transparent px-3 py-2 text-sm whitespace-nowrap shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 data-[size=default]:h-9 data-[size=sm]:h-8 *:data-[slot=select-value]:line-clamp-1 *:data-[slot=select-value]:flex *:data-[slot=select-value]:items-center *:data-[slot=select-value]:gap-2 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", className),
		...props,
		children: [children, /* @__PURE__ */ jsx(SelectPrimitive.Icon, {
			asChild: true,
			children: /* @__PURE__ */ jsx(ChevronDownIcon, { className: "size-4 opacity-50" })
		})]
	});
}
function SelectContent({ className, children, position = "popper", side = "bottom", sideOffset = 4, align = "center", ...props }) {
	return /* @__PURE__ */ jsx(SelectPrimitive.Portal, { children: /* @__PURE__ */ jsxs(SelectPrimitive.Content, {
		"data-slot": "select-content",
		className: cn("bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 relative z-50 max-h-(--radix-select-content-available-height) min-w-[8rem] origin-(--radix-select-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border shadow-md", position === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1", className),
		position,
		side,
		sideOffset,
		avoidCollisions: false,
		align,
		...props,
		children: [
			/* @__PURE__ */ jsx(SelectScrollUpButton, {}),
			/* @__PURE__ */ jsx(SelectPrimitive.Viewport, {
				className: cn("p-1", position === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)] scroll-my-1"),
				children
			}),
			/* @__PURE__ */ jsx(SelectScrollDownButton, {})
		]
	}) });
}
function SelectItem({ className, children, ...props }) {
	return /* @__PURE__ */ jsxs(SelectPrimitive.Item, {
		"data-slot": "select-item",
		className: cn("focus:bg-accent focus:text-accent-foreground [&_svg:not([class*='text-'])]:text-muted-foreground relative flex w-full cursor-default items-center gap-2 rounded-sm py-1.5 pr-8 pl-2 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 *:[span]:last:flex *:[span]:last:items-center *:[span]:last:gap-2", className),
		...props,
		children: [/* @__PURE__ */ jsx("span", {
			"data-slot": "select-item-indicator",
			className: "absolute right-2 flex size-3.5 items-center justify-center",
			children: /* @__PURE__ */ jsx(SelectPrimitive.ItemIndicator, { children: /* @__PURE__ */ jsx(CheckIcon, { className: "size-4" }) })
		}), /* @__PURE__ */ jsx(SelectPrimitive.ItemText, { children })]
	});
}
function SelectScrollUpButton({ className, ...props }) {
	return /* @__PURE__ */ jsx(SelectPrimitive.ScrollUpButton, {
		"data-slot": "select-scroll-up-button",
		className: cn("flex cursor-default items-center justify-center py-1", className),
		...props,
		children: /* @__PURE__ */ jsx(ChevronUpIcon, { className: "size-4" })
	});
}
function SelectScrollDownButton({ className, ...props }) {
	return /* @__PURE__ */ jsx(SelectPrimitive.ScrollDownButton, {
		"data-slot": "select-scroll-down-button",
		className: cn("flex cursor-default items-center justify-center py-1", className),
		...props,
		children: /* @__PURE__ */ jsx(ChevronDownIcon, { className: "size-4" })
	});
}
//#endregion
//#region resources/js/pages/projects/show.tsx
function CouponDataTable({ coupons, isLoading }) {
	const [sorting, setSorting] = useState([]);
	const columns = useMemo(() => [
		{
			accessorKey: "serial_number",
			header: ({ column }) => /* @__PURE__ */ jsxs(Button, {
				variant: "ghost",
				size: "sm",
				className: "-ml-2 gap-1 font-medium",
				onClick: () => column.toggleSorting(column.getIsSorted() === "asc"),
				children: ["Serial Number", column.getIsSorted() === "asc" ? /* @__PURE__ */ jsx(ChevronUp, { className: "w-3.5 h-3.5" }) : column.getIsSorted() === "desc" ? /* @__PURE__ */ jsx(ChevronDown, { className: "w-3.5 h-3.5" }) : /* @__PURE__ */ jsx(ChevronsUpDown, { className: "w-3.5 h-3.5 opacity-50" })]
			}),
			cell: ({ getValue }) => /* @__PURE__ */ jsx("span", {
				className: "font-mono font-medium text-xs tracking-widest",
				children: getValue()
			})
		},
		{
			accessorKey: "box",
			id: "box_number",
			header: "Box",
			cell: ({ row }) => /* @__PURE__ */ jsxs("span", {
				className: "text-muted-foreground",
				children: ["Box #", row.original.box?.box_number ?? "—"]
			})
		},
		{
			accessorKey: "position_in_box",
			header: ({ column }) => /* @__PURE__ */ jsxs(Button, {
				variant: "ghost",
				size: "sm",
				className: "-ml-2 gap-1 font-medium",
				onClick: () => column.toggleSorting(column.getIsSorted() === "asc"),
				children: ["Position", column.getIsSorted() === "asc" ? /* @__PURE__ */ jsx(ChevronUp, { className: "w-3.5 h-3.5" }) : column.getIsSorted() === "desc" ? /* @__PURE__ */ jsx(ChevronDown, { className: "w-3.5 h-3.5" }) : /* @__PURE__ */ jsx(ChevronsUpDown, { className: "w-3.5 h-3.5 opacity-50" })]
			}),
			cell: ({ getValue }) => /* @__PURE__ */ jsx("span", {
				className: "text-muted-foreground",
				children: getValue()
			})
		},
		{
			id: "prize_tier",
			header: "Prize Tier",
			cell: ({ row }) => {
				const tier = row.original.prize_tier;
				if (!tier) return /* @__PURE__ */ jsx("span", {
					className: "text-muted-foreground",
					children: "—"
				});
				return /* @__PURE__ */ jsx("span", {
					className: `inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold border ${tier.amount > 0 ? "bg-emerald-500/10 text-emerald-600 border-emerald-500/20 dark:text-emerald-400" : "bg-muted text-muted-foreground border-transparent"}`,
					children: tier.name
				});
			}
		},
		{
			id: "prize_amount",
			header: "Amount",
			cell: ({ row }) => {
				const amount = row.original.prize_tier?.amount ?? 0;
				return /* @__PURE__ */ jsx("span", {
					className: `font-medium text-sm ${amount > 0 ? "text-foreground" : "text-muted-foreground"}`,
					children: amount > 0 ? new Intl.NumberFormat("id-ID", {
						style: "currency",
						currency: "IDR",
						maximumFractionDigits: 0
					}).format(amount) : "—"
				});
			}
		}
	], []);
	const table = useReactTable({
		data: coupons,
		columns,
		state: { sorting },
		onSortingChange: setSorting,
		getCoreRowModel: getCoreRowModel(),
		getSortedRowModel: getSortedRowModel()
	});
	if (isLoading) return /* @__PURE__ */ jsx("div", {
		className: "space-y-2 p-4",
		children: [
			1,
			2,
			3,
			4,
			5
		].map((i) => /* @__PURE__ */ jsx(Skeleton, { className: "h-10 w-full" }, i))
	});
	return /* @__PURE__ */ jsx("div", {
		className: "rounded-md border",
		children: /* @__PURE__ */ jsxs(Table, { children: [/* @__PURE__ */ jsx(TableHeader, { children: table.getHeaderGroups().map((headerGroup) => /* @__PURE__ */ jsx(TableRow, {
			className: "bg-muted/40 hover:bg-muted/40",
			children: headerGroup.headers.map((header) => /* @__PURE__ */ jsx(TableHead, {
				className: "h-10 text-xs font-semibold uppercase tracking-wide",
				children: header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())
			}, header.id))
		}, headerGroup.id)) }), /* @__PURE__ */ jsx(TableBody, { children: table.getRowModel().rows.length > 0 ? table.getRowModel().rows.map((row) => /* @__PURE__ */ jsx(TableRow, {
			className: "hover:bg-muted/30 transition-colors",
			children: row.getVisibleCells().map((cell) => /* @__PURE__ */ jsx(TableCell, {
				className: "py-2.5",
				children: flexRender(cell.column.columnDef.cell, cell.getContext())
			}, cell.id))
		}, row.id)) : /* @__PURE__ */ jsx(TableRow, { children: /* @__PURE__ */ jsx(TableCell, {
			colSpan: columns.length,
			className: "h-24 text-center text-muted-foreground",
			children: "No coupons found. Generate a batch to get started."
		}) }) })] })
	});
}
function ProjectShow({ id }) {
	const projectId = typeof window !== "undefined" ? window.location.pathname.split("/").pop() : id;
	const [project, setProject] = useState(null);
	const [batches, setBatches] = useState([]);
	const [coupons, setCoupons] = useState([]);
	const [couponMeta, setCouponMeta] = useState(null);
	const [loading, setLoading] = useState(true);
	const [couponsLoading, setCouponsLoading] = useState(false);
	const [deleting, setDeleting] = useState(false);
	const [generatingBatchId, setGeneratingBatchId] = useState(null);
	const [locationInput, setLocationInput] = useState("");
	const [pendingGenerateBatchId, setPendingGenerateBatchId] = useState(null);
	const [activeTab, setActiveTab] = useState("overview");
	const [selectedTier, setSelectedTier] = useState("all");
	const [selectedBatch, setSelectedBatch] = useState("all");
	const [searchQuery, setSearchQuery] = useState("");
	const [perPage, setPerPage] = useState(50);
	const [sortOrder, setSortOrder] = useState("asc");
	const [currentPage, setCurrentPage] = useState(1);
	const searchDebounceRef = useRef(null);
	const loadProjectData = async () => {
		try {
			const [projRes, batchRes] = await Promise.all([apiFetch(`/api/v1/projects/${projectId}`), apiFetch(`/api/v1/projects/${projectId}/batches`)]);
			setProject(projRes.data);
			setBatches(batchRes.data || []);
		} catch (error) {
			console.error("Failed to fetch project details:", error);
		} finally {
			setLoading(false);
		}
	};
	const loadCoupons = async (tierId = selectedTier, batchId = selectedBatch, search = searchQuery, page = currentPage, limit = perPage, order = sortOrder) => {
		setCouponsLoading(true);
		try {
			const params = new URLSearchParams();
			if (tierId !== "all") params.set("tier_id", tierId);
			if (batchId !== "all") params.set("batch_id", batchId);
			if (search.trim()) params.set("search", search.trim());
			params.set("page", String(page));
			params.set("per_page", String(limit));
			params.set("sort", order);
			const coupRes = await apiFetch(`/api/v1/projects/${projectId}/coupons?${params.toString()}`);
			if (coupRes && typeof coupRes === "object" && "data" in coupRes && Array.isArray(coupRes.data)) {
				setCoupons(coupRes.data);
				setCouponMeta({
					total: coupRes.total ?? coupRes.data.length,
					per_page: coupRes.per_page ?? limit,
					current_page: coupRes.current_page ?? page
				});
			} else if (Array.isArray(coupRes)) {
				setCoupons(coupRes);
				setCouponMeta({
					total: coupRes.length,
					per_page: limit,
					current_page: page
				});
			} else {
				setCoupons([]);
				setCouponMeta(null);
			}
		} catch (error) {
			console.error("Failed to fetch coupons:", error);
		} finally {
			setCouponsLoading(false);
		}
	};
	useEffect(() => {
		if (projectId) loadProjectData();
	}, [projectId]);
	useEffect(() => {
		if (projectId && activeTab === "coupons") {
			setCurrentPage(1);
			loadCoupons(selectedTier, selectedBatch, searchQuery, 1, perPage, sortOrder);
		}
	}, [
		projectId,
		selectedTier,
		selectedBatch,
		activeTab,
		perPage,
		sortOrder
	]);
	const handleSearchChange = (value) => {
		setSearchQuery(value);
		if (searchDebounceRef.current) clearTimeout(searchDebounceRef.current);
		searchDebounceRef.current = setTimeout(() => {
			setCurrentPage(1);
			loadCoupons(selectedTier, selectedBatch, value, 1, perPage, sortOrder);
		}, 400);
	};
	const handleTierChange = (value) => {
		setSelectedTier(value);
		setCurrentPage(1);
	};
	const handleBatchChange = (value) => {
		setSelectedBatch(value);
		setCurrentPage(1);
	};
	const handlePageChange = (page) => {
		setCurrentPage(page);
		loadCoupons(selectedTier, selectedBatch, searchQuery, page, perPage, sortOrder);
	};
	const promptGenerateBatch = (batchId) => {
		setLocationInput("");
		setPendingGenerateBatchId(batchId);
	};
	const handleGenerateBatch = async (batchId) => {
		setPendingGenerateBatchId(null);
		setGeneratingBatchId(batchId);
		try {
			await apiFetch(`/api/v1/batches/${batchId}/generate`, {
				method: "POST",
				body: JSON.stringify({ location: locationInput.trim() || "HQ Production Facility" })
			});
			loadProjectData();
			if (activeTab === "coupons") loadCoupons(selectedTier);
		} catch (error) {
			console.error(error);
			alert("Failed to generate batch. It might be already processing.");
		} finally {
			setGeneratingBatchId(null);
		}
	};
	const handleDeleteProject = async () => {
		if (!confirm("Are you sure you want to permanently delete this project and all its generated coupons? This action cannot be undone.")) return;
		setDeleting(true);
		try {
			await apiFetch(`/api/v1/projects/${projectId}`, { method: "DELETE" });
			router.visit("/projects");
		} catch (error) {
			console.error("Failed to delete project:", error);
			alert("Failed to delete project.");
			setDeleting(false);
		}
	};
	const handleExportExcel = () => {
		const exportUrl = selectedTier === "all" ? `/api/v1/projects/${projectId}/coupons/export` : `/api/v1/projects/${projectId}/coupons/export?tier_id=${selectedTier}`;
		window.location.href = exportUrl;
	};
	return /* @__PURE__ */ jsxs(app_layout_default, {
		breadcrumbs: [{
			title: "Projects",
			href: "/projects"
		}, {
			title: project?.name || "Details",
			href: `/projects/${projectId}`
		}],
		children: [/* @__PURE__ */ jsx(Head, { title: project ? project.name : "Project Details" }), /* @__PURE__ */ jsx("div", {
			className: "flex h-full flex-1 flex-col p-6 md:p-8 max-w-7xl mx-auto w-full gap-6",
			children: loading ? /* @__PURE__ */ jsxs("div", {
				className: "space-y-6",
				children: [/* @__PURE__ */ jsx(Skeleton, { className: "h-20 w-1/3" }), /* @__PURE__ */ jsx(Skeleton, { className: "h-[300px] w-full" })]
			}) : !project ? /* @__PURE__ */ jsx("div", {
				className: "text-center py-20",
				children: "Project not found"
			}) : /* @__PURE__ */ jsxs(Fragment$1, { children: [
				/* @__PURE__ */ jsxs("div", {
					className: "flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border-b pb-6",
					children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsxs("div", {
						className: "flex items-center gap-3 mb-1",
						children: [/* @__PURE__ */ jsx("h1", {
							className: "text-3xl font-bold tracking-tight",
							children: project.name
						}), /* @__PURE__ */ jsx("div", {
							className: `text-xs px-2.5 py-1 rounded-full capitalize border font-medium ${project.status === "ready" ? "border-green-500/30 text-green-600 bg-green-500/10" : project.status === "generating" ? "border-amber-500/30 text-amber-600 bg-amber-500/10" : "border-slate-500/30 text-slate-600 bg-slate-500/10"}`,
							children: project.status
						})]
					}), /* @__PURE__ */ jsx("p", {
						className: "text-muted-foreground font-mono text-sm",
						children: project.code
					})] }), /* @__PURE__ */ jsxs(Button, {
						variant: "destructive",
						size: "sm",
						onClick: handleDeleteProject,
						disabled: deleting,
						className: "gap-2",
						children: [/* @__PURE__ */ jsx(Trash2, { className: "w-4 h-4" }), deleting ? "Deleting..." : "Delete Project"]
					})]
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "flex space-x-2 border-b border-border/50 pb-1",
					children: [
						/* @__PURE__ */ jsx(Button, {
							variant: activeTab === "overview" ? "default" : "ghost",
							size: "sm",
							onClick: () => setActiveTab("overview"),
							children: "Overview"
						}),
						/* @__PURE__ */ jsx(Button, {
							variant: activeTab === "batches" ? "default" : "ghost",
							size: "sm",
							onClick: () => setActiveTab("batches"),
							children: "Batches"
						}),
						/* @__PURE__ */ jsx(Button, {
							variant: activeTab === "coupons" ? "default" : "ghost",
							size: "sm",
							onClick: () => setActiveTab("coupons"),
							disabled: project.status === "draft",
							children: "Generated Coupons"
						})
					]
				}),
				activeTab === "overview" && /* @__PURE__ */ jsxs("div", {
					className: "grid md:grid-cols-3 gap-6 animate-in fade-in slide-in-from-bottom-2",
					children: [
						/* @__PURE__ */ jsxs(Card, { children: [/* @__PURE__ */ jsx(CardHeader, {
							className: "pb-3",
							children: /* @__PURE__ */ jsx(CardTitle, {
								className: "text-sm font-medium text-muted-foreground",
								children: "Configuration"
							})
						}), /* @__PURE__ */ jsxs(CardContent, { children: [/* @__PURE__ */ jsx("div", {
							className: "text-2xl font-bold",
							children: new Intl.NumberFormat().format(project.config.total_coupons)
						}), /* @__PURE__ */ jsxs("p", {
							className: "text-xs text-muted-foreground mt-1",
							children: [
								"Split into ",
								project.config.total_boxes,
								" boxes (",
								project.config.coupons_per_box,
								" per box)"
							]
						})] })] }),
						/* @__PURE__ */ jsxs(Card, { children: [/* @__PURE__ */ jsx(CardHeader, {
							className: "pb-3",
							children: /* @__PURE__ */ jsx(CardTitle, {
								className: "text-sm font-medium text-muted-foreground",
								children: "Batches"
							})
						}), /* @__PURE__ */ jsxs(CardContent, { children: [/* @__PURE__ */ jsx("div", {
							className: "text-2xl font-bold",
							children: project.config.total_batches
						}), /* @__PURE__ */ jsx("p", {
							className: "text-xs text-muted-foreground mt-1",
							children: "Production batches mapped to this run"
						})] })] }),
						/* @__PURE__ */ jsxs(Card, { children: [/* @__PURE__ */ jsx(CardHeader, {
							className: "pb-3",
							children: /* @__PURE__ */ jsx(CardTitle, {
								className: "text-sm font-medium text-muted-foreground",
								children: "Created By"
							})
						}), /* @__PURE__ */ jsxs(CardContent, { children: [/* @__PURE__ */ jsx("div", {
							className: "text-xl font-medium",
							children: project.creator?.name || "System"
						}), /* @__PURE__ */ jsxs("p", {
							className: "text-xs text-muted-foreground mt-1",
							children: ["On ", new Date(project.created_at).toLocaleDateString()]
						})] })] })
					]
				}),
				pendingGenerateBatchId !== null && /* @__PURE__ */ jsx("div", {
					className: "fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm",
					children: /* @__PURE__ */ jsxs(Card, {
						className: "w-full max-w-md mx-4 shadow-2xl",
						children: [/* @__PURE__ */ jsxs(CardHeader, { children: [/* @__PURE__ */ jsx(CardTitle, { children: "Set Production Location" }), /* @__PURE__ */ jsx(CardDescription, { children: "Enter the facility or location for this batch generation run." })] }), /* @__PURE__ */ jsxs(CardContent, {
							className: "space-y-4",
							children: [/* @__PURE__ */ jsxs("div", {
								className: "space-y-2",
								children: [/* @__PURE__ */ jsx("label", {
									className: "text-sm font-medium",
									htmlFor: "location-input",
									children: "Location"
								}), /* @__PURE__ */ jsx("input", {
									id: "location-input",
									type: "text",
									placeholder: "e.g. HQ Production Facility, Jakarta",
									value: locationInput,
									onChange: (e) => setLocationInput(e.target.value),
									className: "w-full h-9 px-3 rounded-md border border-input bg-transparent text-sm shadow-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring",
									autoFocus: true,
									onKeyDown: (e) => {
										if (e.key === "Enter") handleGenerateBatch(pendingGenerateBatchId);
									}
								})]
							}), /* @__PURE__ */ jsxs("div", {
								className: "flex gap-2 justify-end",
								children: [/* @__PURE__ */ jsx(Button, {
									variant: "outline",
									size: "sm",
									onClick: () => setPendingGenerateBatchId(null),
									children: "Cancel"
								}), /* @__PURE__ */ jsx(Button, {
									size: "sm",
									onClick: () => handleGenerateBatch(pendingGenerateBatchId),
									children: "Start Generation"
								})]
							})]
						})]
					})
				}),
				activeTab === "batches" && /* @__PURE__ */ jsxs("div", {
					className: "animate-in fade-in slide-in-from-bottom-2",
					children: [/* @__PURE__ */ jsx("h2", {
						className: "text-xl font-semibold mb-4",
						children: "Production Batches"
					}), /* @__PURE__ */ jsx("div", {
						className: "grid md:grid-cols-2 gap-4",
						children: batches.length === 0 ? /* @__PURE__ */ jsx("p", {
							className: "text-muted-foreground",
							children: "No batches assigned to this project."
						}) : batches.map((batch) => /* @__PURE__ */ jsxs(Card, {
							className: "hover:border-primary/50 transition-colors flex flex-col justify-between",
							children: [/* @__PURE__ */ jsxs(CardHeader, { children: [/* @__PURE__ */ jsxs(CardTitle, {
								className: "text-lg flex justify-between items-center",
								children: [/* @__PURE__ */ jsxs("span", { children: ["Batch #", batch.batch_number] }), /* @__PURE__ */ jsx("span", {
									className: `text-xs px-2 py-1 rounded capitalize font-medium ${batch.status === "completed" ? "bg-green-100 text-green-700 dark:bg-green-500/20 dark:text-green-400" : batch.status === "in_progress" ? "bg-amber-100 text-amber-700 dark:bg-amber-500/20 dark:text-amber-400" : "bg-slate-100 text-slate-700 dark:bg-slate-500/20 dark:text-slate-300"}`,
									children: batch.status.replace("_", " ")
								})]
							}), /* @__PURE__ */ jsx(CardDescription, { children: batch.status === "completed" ? `Generated by ${batch.operator?.name || "System"} at ${batch.location || "—"} • ${new Date(batch.produced_at || batch.created_at).toLocaleString()}` : "Awaiting operator generation" })] }), /* @__PURE__ */ jsx(CardContent, {
								className: "flex flex-col gap-2",
								children: batch.status === "completed" ? /* @__PURE__ */ jsxs(Fragment$1, { children: [/* @__PURE__ */ jsx(Link, {
									href: `/batches/${batch.id}/report`,
									className: "block w-full",
									children: /* @__PURE__ */ jsx(Button, {
										variant: "secondary",
										size: "sm",
										className: "w-full",
										children: "View Distribution Report"
									})
								}), /* @__PURE__ */ jsx(Button, {
									variant: "outline",
									size: "sm",
									className: "w-full",
									onClick: () => {
										setSelectedBatch(String(batch.id));
										setActiveTab("coupons");
										setSelectedTier("all");
										setSearchQuery("");
										setCurrentPage(1);
										loadCoupons("all", String(batch.id), "", 1, perPage, sortOrder);
									},
									children: "View Generated Coupons"
								})] }) : /* @__PURE__ */ jsx(Button, {
									onClick: () => promptGenerateBatch(batch.id),
									disabled: generatingBatchId === batch.id || batch.status === "in_progress",
									className: "w-full",
									children: generatingBatchId === batch.id ? "Generating Algorithm..." : "Generate Batch"
								})
							})]
						}, batch.id))
					})]
				}),
				activeTab === "coupons" && /* @__PURE__ */ jsxs("div", {
					className: "animate-in fade-in slide-in-from-bottom-2 space-y-4",
					children: [
						/* @__PURE__ */ jsxs("div", {
							className: "flex flex-col gap-3",
							children: [/* @__PURE__ */ jsxs("div", {
								className: "flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3",
								children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h2", {
									className: "text-xl font-semibold",
									children: "Generated Coupons"
								}), couponMeta && /* @__PURE__ */ jsxs("p", {
									className: "text-sm text-muted-foreground mt-1",
									children: [
										"Showing ",
										/* @__PURE__ */ jsxs("span", {
											className: "font-semibold text-foreground",
											children: [
												(couponMeta.current_page - 1) * couponMeta.per_page + 1,
												" - ",
												Math.min(couponMeta.current_page * couponMeta.per_page, couponMeta.total)
											]
										}),
										" of",
										" ",
										/* @__PURE__ */ jsx("span", {
											className: "font-semibold text-foreground",
											children: new Intl.NumberFormat().format(couponMeta.total)
										}),
										" coupons",
										(selectedTier !== "all" || selectedBatch !== "all" || searchQuery.trim() !== "") && /* @__PURE__ */ jsxs("span", { children: [
											" (filtered from ",
											new Intl.NumberFormat().format(project.config.total_coupons),
											" total)"
										] })
									]
								})] }), /* @__PURE__ */ jsxs(Button, {
									variant: "outline",
									size: "sm",
									onClick: handleExportExcel,
									className: "gap-2 shrink-0",
									disabled: coupons.length === 0,
									children: [/* @__PURE__ */ jsx(Download, { className: "w-4 h-4" }), "Export Excel"]
								})]
							}), /* @__PURE__ */ jsxs("div", {
								className: "flex flex-col sm:flex-row gap-2",
								children: [
									/* @__PURE__ */ jsxs("div", {
										className: "relative flex-1",
										children: [
											/* @__PURE__ */ jsx(Search, { className: "absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" }),
											/* @__PURE__ */ jsx("input", {
												id: "coupon-search",
												type: "text",
												placeholder: "Search by serial number...",
												value: searchQuery,
												onChange: (e) => handleSearchChange(e.target.value),
												className: "w-full pl-9 pr-9 h-9 rounded-md border border-input bg-transparent text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
											}),
											searchQuery && /* @__PURE__ */ jsx("button", {
												onClick: () => handleSearchChange(""),
												className: "absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors",
												children: /* @__PURE__ */ jsx(X, { className: "w-4 h-4" })
											})
										]
									}),
									/* @__PURE__ */ jsxs(Select, {
										value: selectedBatch,
										onValueChange: handleBatchChange,
										children: [/* @__PURE__ */ jsx(SelectTrigger, {
											className: "w-full sm:w-56",
											id: "batch-filter",
											children: /* @__PURE__ */ jsx(SelectValue, { placeholder: "All Batches" })
										}), /* @__PURE__ */ jsxs(SelectContent, { children: [/* @__PURE__ */ jsx(SelectItem, {
											value: "all",
											children: "All Batches"
										}), batches.filter((b) => b.status === "completed").map((batch) => /* @__PURE__ */ jsxs(SelectItem, {
											value: String(batch.id),
											children: [
												"Batch #",
												batch.batch_number,
												" (",
												batch.location || "HQ",
												")"
											]
										}, batch.id))] })]
									}),
									/* @__PURE__ */ jsxs(Select, {
										value: selectedTier,
										onValueChange: handleTierChange,
										children: [/* @__PURE__ */ jsx(SelectTrigger, {
											className: "w-full sm:w-56",
											id: "tier-filter",
											children: /* @__PURE__ */ jsx(SelectValue, { placeholder: "All Prize Tiers" })
										}), /* @__PURE__ */ jsxs(SelectContent, { children: [/* @__PURE__ */ jsx(SelectItem, {
											value: "all",
											children: "All Prize Tiers"
										}), project.prize_tiers?.map((tier) => /* @__PURE__ */ jsx(SelectItem, {
											value: String(tier.id),
											children: /* @__PURE__ */ jsxs("div", {
												className: "flex items-center gap-2",
												children: [/* @__PURE__ */ jsx("span", { children: tier.name }), tier.amount > 0 && /* @__PURE__ */ jsxs("span", {
													className: "text-xs text-muted-foreground",
													children: [
														"(",
														new Intl.NumberFormat("id-ID", {
															style: "currency",
															currency: "IDR",
															maximumFractionDigits: 0
														}).format(tier.amount),
														")"
													]
												})]
											})
										}, tier.id))] })]
									})
								]
							})]
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "flex flex-col sm:flex-row items-center justify-between gap-3",
							children: [/* @__PURE__ */ jsxs("div", {
								className: "flex items-center gap-2 text-sm",
								children: [/* @__PURE__ */ jsx("span", {
									className: "text-muted-foreground",
									children: "Rows per page:"
								}), /* @__PURE__ */ jsxs(Select, {
									value: String(perPage),
									onValueChange: (v) => {
										setPerPage(Number(v));
										setCurrentPage(1);
									},
									children: [/* @__PURE__ */ jsx(SelectTrigger, {
										className: "h-8 w-20",
										id: "per-page",
										children: /* @__PURE__ */ jsx(SelectValue, {})
									}), /* @__PURE__ */ jsx(SelectContent, { children: [
										25,
										50,
										100,
										250,
										500
									].map((n) => /* @__PURE__ */ jsx(SelectItem, {
										value: String(n),
										children: n
									}, n)) })]
								})]
							}), /* @__PURE__ */ jsxs("div", {
								className: "flex items-center gap-2 text-sm",
								children: [/* @__PURE__ */ jsx("span", {
									className: "text-muted-foreground",
									children: "Order:"
								}), /* @__PURE__ */ jsxs(Select, {
									value: sortOrder,
									onValueChange: (v) => setSortOrder(v),
									children: [/* @__PURE__ */ jsx(SelectTrigger, {
										className: "h-8 w-36",
										id: "sort-order",
										children: /* @__PURE__ */ jsx(SelectValue, {})
									}), /* @__PURE__ */ jsxs(SelectContent, { children: [/* @__PURE__ */ jsx(SelectItem, {
										value: "asc",
										children: "Ascending (001 → end)"
									}), /* @__PURE__ */ jsx(SelectItem, {
										value: "desc",
										children: "Descending (end → 001)"
									})] })]
								})]
							})]
						}),
						/* @__PURE__ */ jsx(CouponDataTable, {
							coupons,
							isLoading: couponsLoading
						}),
						couponMeta && couponMeta.total > couponMeta.per_page && /* @__PURE__ */ jsxs("div", {
							className: "flex items-center justify-between pt-2",
							children: [/* @__PURE__ */ jsxs("span", {
								className: "text-xs text-muted-foreground",
								children: [
									"Page ",
									couponMeta.current_page,
									" of ",
									Math.ceil(couponMeta.total / couponMeta.per_page)
								]
							}), /* @__PURE__ */ jsxs("div", {
								className: "flex gap-1",
								children: [/* @__PURE__ */ jsx(Button, {
									variant: "outline",
									size: "sm",
									disabled: couponMeta.current_page <= 1 || couponsLoading,
									onClick: () => handlePageChange(couponMeta.current_page - 1),
									children: "← Prev"
								}), /* @__PURE__ */ jsx(Button, {
									variant: "outline",
									size: "sm",
									disabled: couponMeta.current_page >= Math.ceil(couponMeta.total / couponMeta.per_page) || couponsLoading,
									onClick: () => handlePageChange(couponMeta.current_page + 1),
									children: "Next →"
								})]
							})]
						})
					]
				})
			] })
		})]
	});
}
//#endregion
export { ProjectShow as default };

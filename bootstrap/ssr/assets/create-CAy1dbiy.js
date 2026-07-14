import { t as apiFetch } from "./utils-dvte0Nyw.js";
import { n as Button } from "./app-logo-icon-BdX04kDK.js";
import { t as Input } from "./input-PqtjiIiR.js";
import { t as app_layout_default } from "./app-layout-CSnI9nK2.js";
import { a as CardTitle, i as CardHeader, n as CardContent, r as CardDescription, t as Card } from "./card-C2uVgNnb.js";
import { t as Label } from "./label-Du9C55rc.js";
import { Head, router } from "@inertiajs/react";
import { useEffect, useState } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import { Plus, Trash2 } from "lucide-react";
//#region resources/js/pages/projects/create.tsx
function NumberInput({ id, value, onChange, required, readOnly, className, min }) {
	const [raw, setRaw] = useState(String(value));
	useEffect(() => {
		setRaw(String(value));
	}, [value]);
	const handleChange = (e) => {
		const stripped = e.target.value.replace(/^0+(\d)/, "$1");
		setRaw(stripped);
		const num = parseInt(stripped, 10);
		if (!isNaN(num)) onChange(num);
	};
	const handleFocus = (e) => {
		if (e.target.value === "0") setRaw("");
	};
	const handleBlur = () => {
		const num = parseInt(raw, 10);
		if (isNaN(num)) {
			setRaw("0");
			onChange(0);
		} else setRaw(String(num));
	};
	return /* @__PURE__ */ jsx(Input, {
		id,
		type: "number",
		value: raw,
		onChange: handleChange,
		onFocus: handleFocus,
		onBlur: handleBlur,
		required,
		readOnly,
		className,
		min
	});
}
function CreateProject() {
	const [submitting, setSubmitting] = useState(false);
	const [error, setError] = useState("");
	const [form, setForm] = useState({
		code: "",
		name: "Promo Akhir Tahun",
		description: "Generating instant prize coupons",
		total_coupons: 1e4,
		coupons_per_box: 1e3,
		total_boxes: 10,
		total_batches: 2,
		boxes_per_batch: 5,
		tiers: [
			{
				name: "Hadiah Rp 100.000",
				amount: 1e5,
				per_box_quantity: 5
			},
			{
				name: "Hadiah Rp 50.000",
				amount: 5e4,
				per_box_quantity: 10
			},
			{
				name: "Hadiah Rp 20.000",
				amount: 2e4,
				per_box_quantity: 25
			},
			{
				name: "Hadiah Rp 10.000",
				amount: 1e4,
				per_box_quantity: 50
			},
			{
				name: "Hadiah Rp 5.000",
				amount: 5e3,
				per_box_quantity: 100
			},
			{
				name: "Anda Belum Beruntung",
				amount: 0,
				per_box_quantity: 810
			}
		]
	});
	useEffect(() => {
		const totalBoxes = Math.ceil(form.total_coupons / form.coupons_per_box) || 0;
		setForm((f) => ({
			...f,
			total_boxes: totalBoxes,
			boxes_per_batch: Math.ceil(totalBoxes / f.total_batches) || 0
		}));
	}, [
		form.total_coupons,
		form.coupons_per_box,
		form.total_batches
	]);
	const handleTierChange = (index, field, value) => {
		const newTiers = [...form.tiers];
		newTiers[index] = {
			...newTiers[index],
			[field]: value
		};
		setForm({
			...form,
			tiers: newTiers
		});
	};
	const addTier = () => {
		setForm({
			...form,
			tiers: [...form.tiers, {
				name: "",
				amount: 0,
				per_box_quantity: 0
			}]
		});
	};
	const removeTier = (index) => {
		const newTiers = form.tiers.filter((_, i) => i !== index);
		setForm({
			...form,
			tiers: newTiers
		});
	};
	const currentBoxTotal = form.tiers.reduce((sum, tier) => sum + (Number(tier.per_box_quantity) || 0), 0);
	const isBoxQuantityValid = currentBoxTotal === form.coupons_per_box;
	const handleSubmit = async (e) => {
		e.preventDefault();
		if (!form.code.trim()) {
			setError("Project code is required.");
			return;
		}
		if (!isBoxQuantityValid) {
			setError(`Prize quantities must sum up exactly to ${form.coupons_per_box} per box. Currently: ${currentBoxTotal}`);
			return;
		}
		setSubmitting(true);
		setError("");
		try {
			const payload = {
				...form,
				tiers: form.tiers.map((t) => ({
					...t,
					total_quantity: Number(t.per_box_quantity) * form.total_boxes
				}))
			};
			await apiFetch("/api/v1/projects", {
				method: "POST",
				body: JSON.stringify(payload)
			});
			router.visit("/projects");
		} catch (err) {
			setError(err.message || "An error occurred while creating the project.");
			setSubmitting(false);
		}
	};
	return /* @__PURE__ */ jsxs(app_layout_default, {
		breadcrumbs: [{
			title: "Projects",
			href: "/projects"
		}, {
			title: "Create",
			href: "/projects/create"
		}],
		children: [/* @__PURE__ */ jsx(Head, { title: "Create Project" }), /* @__PURE__ */ jsxs("div", {
			className: "flex h-full flex-1 flex-col p-6 md:p-8 max-w-5xl mx-auto w-full",
			children: [
				/* @__PURE__ */ jsxs("div", {
					className: "mb-6",
					children: [/* @__PURE__ */ jsx("h1", {
						className: "text-3xl font-bold tracking-tight",
						children: "Create New Project"
					}), /* @__PURE__ */ jsx("p", {
						className: "text-muted-foreground mt-1",
						children: "Configure a new dynamic coupon generation run."
					})]
				}),
				error && /* @__PURE__ */ jsx("div", {
					className: "bg-destructive/15 text-destructive p-4 rounded-md mb-6 border border-destructive/30",
					children: error
				}),
				/* @__PURE__ */ jsxs("form", {
					onSubmit: handleSubmit,
					className: "space-y-8",
					children: [
						/* @__PURE__ */ jsxs(Card, { children: [/* @__PURE__ */ jsxs(CardHeader, { children: [/* @__PURE__ */ jsx(CardTitle, { children: "Basic Information" }), /* @__PURE__ */ jsx(CardDescription, { children: "Primary details for this run. Changing coupons per box updates total boxes automatically." })] }), /* @__PURE__ */ jsxs(CardContent, {
							className: "grid gap-6 md:grid-cols-2",
							children: [
								/* @__PURE__ */ jsxs("div", {
									className: "space-y-2",
									children: [/* @__PURE__ */ jsx(Label, {
										htmlFor: "name",
										children: "Project Name"
									}), /* @__PURE__ */ jsx(Input, {
										id: "name",
										value: form.name,
										onChange: (e) => setForm({
											...form,
											name: e.target.value
										}),
										required: true
									})]
								}),
								/* @__PURE__ */ jsxs("div", {
									className: "space-y-2",
									children: [
										/* @__PURE__ */ jsxs(Label, {
											htmlFor: "code",
											children: ["Project Code", /* @__PURE__ */ jsx("span", {
												className: "text-destructive ml-1",
												children: "*"
											})]
										}),
										/* @__PURE__ */ jsx(Input, {
											id: "code",
											value: form.code,
											onChange: (e) => setForm({
												...form,
												code: e.target.value.toUpperCase()
											}),
											placeholder: "e.g. PROMO-2026-01",
											required: true,
											className: "font-mono uppercase tracking-wider"
										}),
										/* @__PURE__ */ jsx("p", {
											className: "text-xs text-muted-foreground",
											children: "Unique identifier for this campaign run."
										})
									]
								}),
								/* @__PURE__ */ jsxs("div", {
									className: "space-y-2 md:col-span-2",
									children: [/* @__PURE__ */ jsx(Label, {
										htmlFor: "description",
										children: "Description (Optional)"
									}), /* @__PURE__ */ jsx(Input, {
										id: "description",
										value: form.description,
										onChange: (e) => setForm({
											...form,
											description: e.target.value
										})
									})]
								}),
								/* @__PURE__ */ jsxs("div", {
									className: "space-y-2",
									children: [/* @__PURE__ */ jsx(Label, {
										htmlFor: "total_coupons",
										children: "Total Coupons"
									}), /* @__PURE__ */ jsx(NumberInput, {
										id: "total_coupons",
										value: form.total_coupons,
										onChange: (val) => setForm({
											...form,
											total_coupons: val
										}),
										required: true,
										min: 1
									})]
								}),
								/* @__PURE__ */ jsxs("div", {
									className: "space-y-2",
									children: [/* @__PURE__ */ jsx(Label, {
										htmlFor: "coupons_per_box",
										children: "Coupons per Box"
									}), /* @__PURE__ */ jsx(NumberInput, {
										id: "coupons_per_box",
										value: form.coupons_per_box,
										onChange: (val) => setForm({
											...form,
											coupons_per_box: val
										}),
										required: true,
										min: 1
									})]
								}),
								/* @__PURE__ */ jsxs("div", {
									className: "space-y-2",
									children: [/* @__PURE__ */ jsx(Label, {
										htmlFor: "total_batches",
										children: "Total Batches to Produce"
									}), /* @__PURE__ */ jsx(NumberInput, {
										id: "total_batches",
										value: form.total_batches,
										onChange: (val) => setForm({
											...form,
											total_batches: val
										}),
										required: true,
										min: 1
									})]
								}),
								/* @__PURE__ */ jsxs("div", {
									className: "space-y-2",
									children: [/* @__PURE__ */ jsx(Label, {
										htmlFor: "total_boxes",
										children: "Total Boxes (Auto-calculated)"
									}), /* @__PURE__ */ jsx(NumberInput, {
										id: "total_boxes",
										value: form.total_boxes,
										onChange: () => {},
										readOnly: true,
										className: "bg-muted cursor-not-allowed"
									})]
								})
							]
						})] }),
						/* @__PURE__ */ jsxs(Card, { children: [/* @__PURE__ */ jsxs(CardHeader, {
							className: "flex flex-row items-center justify-between",
							children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx(CardTitle, { children: "Prize Tier Configuration" }), /* @__PURE__ */ jsxs(CardDescription, { children: [
								"Define exactly what goes into each box of ",
								/* @__PURE__ */ jsx("strong", { children: form.coupons_per_box }),
								" coupons."
							] })] }), /* @__PURE__ */ jsxs(Button, {
								type: "button",
								variant: "outline",
								size: "sm",
								onClick: addTier,
								children: [/* @__PURE__ */ jsx(Plus, { className: "w-4 h-4 mr-2" }), " Add Tier"]
							})]
						}), /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsx("div", {
							className: "rounded-md border overflow-x-auto",
							children: /* @__PURE__ */ jsxs("table", {
								className: "w-full text-sm text-left",
								children: [
									/* @__PURE__ */ jsx("thead", {
										className: "bg-muted/50 font-medium",
										children: /* @__PURE__ */ jsxs("tr", { children: [
											/* @__PURE__ */ jsx("th", {
												className: "px-4 py-3 border-b",
												children: "Prize Tier Name"
											}),
											/* @__PURE__ */ jsx("th", {
												className: "px-4 py-3 border-b",
												children: "Amount (Rp)"
											}),
											/* @__PURE__ */ jsx("th", {
												className: "px-4 py-3 border-b text-right",
												children: "Per Box Quantity"
											}),
											/* @__PURE__ */ jsx("th", {
												className: "px-4 py-3 border-b text-right",
												children: "Total Quantity (Auto)"
											}),
											/* @__PURE__ */ jsx("th", { className: "px-4 py-3 border-b w-12" })
										] })
									}),
									/* @__PURE__ */ jsx("tbody", {
										className: "divide-y",
										children: form.tiers.map((tier, idx) => {
											const totalQuantity = (Number(tier.per_box_quantity) || 0) * form.total_boxes;
											return /* @__PURE__ */ jsxs("tr", {
												className: "hover:bg-muted/10 transition-colors",
												children: [
													/* @__PURE__ */ jsx("td", {
														className: "px-4 py-2",
														children: /* @__PURE__ */ jsx(Input, {
															value: tier.name,
															onChange: (e) => handleTierChange(idx, "name", e.target.value),
															required: true,
															placeholder: "Prize Name",
															className: "h-8"
														})
													}),
													/* @__PURE__ */ jsx("td", {
														className: "px-4 py-2",
														children: /* @__PURE__ */ jsx(NumberInput, {
															value: tier.amount,
															onChange: (val) => handleTierChange(idx, "amount", val),
															required: true,
															min: 0,
															className: "h-8"
														})
													}),
													/* @__PURE__ */ jsx("td", {
														className: "px-4 py-2 text-right",
														children: /* @__PURE__ */ jsx(NumberInput, {
															value: tier.per_box_quantity,
															onChange: (val) => handleTierChange(idx, "per_box_quantity", val),
															required: true,
															min: 1,
															className: "h-8 text-right"
														})
													}),
													/* @__PURE__ */ jsx("td", {
														className: "px-4 py-2 text-right text-muted-foreground font-mono",
														children: new Intl.NumberFormat().format(totalQuantity)
													}),
													/* @__PURE__ */ jsx("td", {
														className: "px-4 py-2 text-center",
														children: /* @__PURE__ */ jsx(Button, {
															type: "button",
															variant: "ghost",
															size: "icon",
															className: "h-8 w-8 text-destructive/70 hover:text-destructive hover:bg-destructive/10",
															onClick: () => removeTier(idx),
															children: /* @__PURE__ */ jsx(Trash2, { className: "w-4 h-4" })
														})
													})
												]
											}, idx);
										})
									}),
									/* @__PURE__ */ jsx("tfoot", {
										className: "bg-muted/20 font-semibold border-t",
										children: /* @__PURE__ */ jsxs("tr", { children: [
											/* @__PURE__ */ jsx("td", {
												colSpan: 2,
												className: "px-4 py-3 text-right",
												children: "Per Box Allocation Check:"
											}),
											/* @__PURE__ */ jsxs("td", {
												className: `px-4 py-3 text-right ${isBoxQuantityValid ? "text-green-600 dark:text-green-400" : "text-destructive"}`,
												children: [
													currentBoxTotal,
													" / ",
													form.coupons_per_box
												]
											}),
											/* @__PURE__ */ jsx("td", { colSpan: 2 })
										] })
									})
								]
							})
						}) })] }),
						/* @__PURE__ */ jsxs("div", {
							className: "flex justify-end gap-4 pb-12",
							children: [/* @__PURE__ */ jsx(Button, {
								type: "button",
								variant: "outline",
								onClick: () => router.visit("/projects"),
								disabled: submitting,
								children: "Cancel"
							}), /* @__PURE__ */ jsx(Button, {
								type: "submit",
								disabled: submitting || !isBoxQuantityValid,
								children: submitting ? "Creating Project..." : "Create Project"
							})]
						})
					]
				})
			]
		})]
	});
}
//#endregion
export { CreateProject as default };

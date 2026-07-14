import { n as cn } from "./utils-dvte0Nyw.js";
import { t as useAppearance } from "./use-appearance-eh0fYXyg.js";
import { n as edit, r as Heading, t as SettingsLayout } from "./layout-DXeUlC8q.js";
import { t as app_layout_default } from "./app-layout-CSnI9nK2.js";
import { Head } from "@inertiajs/react";
import { jsx, jsxs } from "react/jsx-runtime";
import { Monitor, Moon, Sun } from "lucide-react";
//#region resources/js/components/appearance-tabs.tsx
function AppearanceToggleTab({ className = "", ...props }) {
	const { appearance, updateAppearance } = useAppearance();
	const tabs = [
		{
			value: "light",
			icon: Sun,
			label: "Light"
		},
		{
			value: "dark",
			icon: Moon,
			label: "Dark"
		},
		{
			value: "system",
			icon: Monitor,
			label: "System"
		}
	];
	return /* @__PURE__ */ jsx("div", {
		className: cn("inline-flex gap-1 rounded-lg bg-neutral-100 p-1 dark:bg-neutral-800", className),
		...props,
		children: tabs.map(({ value, icon: Icon, label }) => /* @__PURE__ */ jsxs("button", {
			onClick: () => updateAppearance(value),
			className: cn("flex items-center rounded-md px-3.5 py-1.5 transition-colors", appearance === value ? "bg-white shadow-xs dark:bg-neutral-700 dark:text-neutral-100" : "text-neutral-500 hover:bg-neutral-200/60 hover:text-black dark:text-neutral-400 dark:hover:bg-neutral-700/60"),
			children: [/* @__PURE__ */ jsx(Icon, { className: "-ml-1 h-4 w-4" }), /* @__PURE__ */ jsx("span", {
				className: "ml-1.5 text-sm",
				children: label
			})]
		}, value))
	});
}
//#endregion
//#region resources/js/pages/appearance/update.tsx
var breadcrumbs = [{
	title: "Appearance settings",
	href: edit()
}];
function Update() {
	return /* @__PURE__ */ jsxs(app_layout_default, {
		breadcrumbs,
		children: [
			/* @__PURE__ */ jsx(Head, { title: "Appearance settings" }),
			/* @__PURE__ */ jsx("h1", {
				className: "sr-only",
				children: "Appearance settings"
			}),
			/* @__PURE__ */ jsx(SettingsLayout, { children: /* @__PURE__ */ jsxs("div", {
				className: "space-y-6",
				children: [/* @__PURE__ */ jsx(Heading, {
					variant: "small",
					title: "Appearance settings",
					description: "Update your account's appearance settings"
				}), /* @__PURE__ */ jsx(AppearanceToggleTab, {})]
			}) })
		]
	});
}
//#endregion
export { Update as default };

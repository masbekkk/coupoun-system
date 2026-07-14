import { n as cn, r as toUrl } from "./utils-dvte0Nyw.js";
import { n as Button } from "./app-logo-icon-BdX04kDK.js";
import { a as Separator, n as edit$1, r as useCurrentUrl } from "./app-layout-CSnI9nK2.js";
import { n as queryParams } from "./wayfinder-CODn9dES.js";
import { t as edit$2 } from "./password-BY7F0G3Y.js";
import { Link } from "@inertiajs/react";
import { jsx, jsxs } from "react/jsx-runtime";
//#region resources/js/components/heading.tsx
function Heading({ title, description, variant = "default" }) {
	return /* @__PURE__ */ jsxs("header", {
		className: variant === "small" ? "" : "mb-8 space-y-0.5",
		children: [/* @__PURE__ */ jsx("h2", {
			className: variant === "small" ? "mb-0.5 text-base font-medium" : "text-xl font-semibold tracking-tight",
			children: title
		}), description && /* @__PURE__ */ jsx("p", {
			className: "text-sm text-muted-foreground",
			children: description
		})]
	});
}
//#endregion
//#region resources/js/routes/appearance/index.ts
/**
* @see routes/web.php:44
* @route '/settings/appearance'
*/
var edit = (options) => ({
	url: edit.url(options),
	method: "get"
});
edit.definition = {
	methods: ["get", "head"],
	url: "/settings/appearance"
};
/**
* @see routes/web.php:44
* @route '/settings/appearance'
*/
edit.url = (options) => {
	return edit.definition.url + queryParams(options);
};
/**
* @see routes/web.php:44
* @route '/settings/appearance'
*/
edit.get = (options) => ({
	url: edit.url(options),
	method: "get"
});
/**
* @see routes/web.php:44
* @route '/settings/appearance'
*/
edit.head = (options) => ({
	url: edit.url(options),
	method: "head"
});
/**
* @see routes/web.php:44
* @route '/settings/appearance'
*/
var editForm = (options) => ({
	action: edit.url(options),
	method: "get"
});
/**
* @see routes/web.php:44
* @route '/settings/appearance'
*/
editForm.get = (options) => ({
	action: edit.url(options),
	method: "get"
});
/**
* @see routes/web.php:44
* @route '/settings/appearance'
*/
editForm.head = (options) => ({
	action: edit.url({ [options?.mergeQuery ? "mergeQuery" : "query"]: {
		_method: "HEAD",
		...options?.query ?? options?.mergeQuery ?? {}
	} }),
	method: "get"
});
edit.form = editForm;
Object.assign(edit, edit);
//#endregion
//#region resources/js/layouts/settings/layout.tsx
var sidebarNavItems = [
	{
		title: "Profile",
		href: edit$1(),
		icon: null
	},
	{
		title: "Password",
		href: edit$2(),
		icon: null
	},
	{
		title: "Appearance",
		href: edit(),
		icon: null
	}
];
function SettingsLayout({ children }) {
	const { isCurrentOrParentUrl } = useCurrentUrl();
	if (typeof window === "undefined") return null;
	return /* @__PURE__ */ jsxs("div", {
		className: "px-4 py-6",
		children: [/* @__PURE__ */ jsx(Heading, {
			title: "Settings",
			description: "Manage your profile and account settings"
		}), /* @__PURE__ */ jsxs("div", {
			className: "flex flex-col lg:flex-row lg:space-x-12",
			children: [
				/* @__PURE__ */ jsx("aside", {
					className: "w-full max-w-xl lg:w-48",
					children: /* @__PURE__ */ jsx("nav", {
						className: "flex flex-col space-y-1 space-x-0",
						"aria-label": "Settings",
						children: sidebarNavItems.map((item, index) => /* @__PURE__ */ jsx(Button, {
							size: "sm",
							variant: "ghost",
							asChild: true,
							className: cn("w-full justify-start", { "bg-muted": isCurrentOrParentUrl(item.href) }),
							children: /* @__PURE__ */ jsxs(Link, {
								href: item.href,
								children: [item.icon && /* @__PURE__ */ jsx(item.icon, { className: "h-4 w-4" }), item.title]
							})
						}, `${toUrl(item.href)}-${index}`))
					})
				}),
				/* @__PURE__ */ jsx(Separator, { className: "my-6 lg:hidden" }),
				/* @__PURE__ */ jsx("div", {
					className: "flex-1 md:max-w-2xl",
					children: /* @__PURE__ */ jsx("section", {
						className: "max-w-xl space-y-12",
						children
					})
				})
			]
		})]
	});
}
//#endregion
export { edit as n, Heading as r, SettingsLayout as t };

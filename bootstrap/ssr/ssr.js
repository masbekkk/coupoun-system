import { n as cn } from "./assets/utils-dvte0Nyw.js";
import { createInertiaApp } from "@inertiajs/react";
import createServer from "@inertiajs/react/server";
import ReactDOMServer from "react-dom/server";
import * as TooltipPrimitive from "@radix-ui/react-tooltip";
import "react";
import { jsx, jsxs } from "react/jsx-runtime";
//#region node_modules/laravel-vite-plugin/inertia-helpers/index.js
async function resolvePageComponent(path, pages) {
	for (const p of Array.isArray(path) ? path : [path]) {
		const page = pages[p];
		if (typeof page === "undefined") continue;
		return typeof page === "function" ? page() : page;
	}
	throw new Error(`Page not found: ${path}`);
}
//#endregion
//#region resources/js/components/ui/tooltip.tsx
function TooltipProvider({ delayDuration = 0, ...props }) {
	return /* @__PURE__ */ jsx(TooltipPrimitive.Provider, {
		"data-slot": "tooltip-provider",
		delayDuration,
		...props
	});
}
function Tooltip({ ...props }) {
	return /* @__PURE__ */ jsx(TooltipPrimitive.Root, {
		"data-slot": "tooltip",
		...props
	});
}
function TooltipTrigger({ ...props }) {
	return /* @__PURE__ */ jsx(TooltipPrimitive.Trigger, {
		"data-slot": "tooltip-trigger",
		...props
	});
}
function TooltipContent({ className, sideOffset = 4, children, ...props }) {
	return /* @__PURE__ */ jsx(TooltipPrimitive.Portal, { children: /* @__PURE__ */ jsxs(TooltipPrimitive.Content, {
		"data-slot": "tooltip-content",
		sideOffset,
		className: cn("bg-primary text-primary-foreground animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 max-w-sm rounded-md px-3 py-1.5 text-xs", className),
		...props,
		children: [children, /* @__PURE__ */ jsx(TooltipPrimitive.Arrow, { className: "bg-primary fill-primary z-50 size-2.5 translate-y-[calc(-50%_-_2px)] rotate-45 rounded-[2px]" })]
	}) });
}
//#endregion
//#region resources/js/ssr.tsx
var appName = "Laravel";
createServer((page) => createInertiaApp({
	page,
	render: ReactDOMServer.renderToString,
	title: (title) => title ? `${title} - ${appName}` : appName,
	resolve: (name) => resolvePageComponent(`./pages/${name}.tsx`, /* @__PURE__ */ Object.assign({
		"./pages/appearance/update.tsx": () => import("./assets/update-C7eJBfWs.js"),
		"./pages/batches/report.tsx": () => import("./assets/report-mRDKrBSp.js"),
		"./pages/dashboard.tsx": () => import("./assets/dashboard-D1MLXd36.js"),
		"./pages/projects/create.tsx": () => import("./assets/create-CAy1dbiy.js"),
		"./pages/projects/index.tsx": () => import("./assets/projects-l3axJQMK.js"),
		"./pages/projects/show.tsx": () => import("./assets/show-hu0aCO0T.js"),
		"./pages/session/create.tsx": () => import("./assets/create-eWaovgF7.js"),
		"./pages/user/create.tsx": () => import("./assets/create-BnAdA_yG.js"),
		"./pages/user-email-reset-notification/create.tsx": () => import("./assets/create-CDbe0KBX.js"),
		"./pages/user-email-verification-notification/create.tsx": () => import("./assets/create-DIZYSVji.js"),
		"./pages/user-password/create.tsx": () => import("./assets/create-CkN7csKo.js"),
		"./pages/user-password/edit.tsx": () => import("./assets/edit-Di15r4Ly.js"),
		"./pages/user-password-confirmation/create.tsx": () => import("./assets/create-r-VyFOEB.js"),
		"./pages/user-profile/edit.tsx": () => import("./assets/edit-culXndrw.js"),
		"./pages/user-two-factor-authentication/show.tsx": () => import("./assets/show-DBQxAziv.js"),
		"./pages/user-two-factor-authentication-challenge/show.tsx": () => import("./assets/show-xJT6fH_y.js"),
		"./pages/welcome.tsx": () => import("./assets/welcome-BHSMlMYU.js")
	})),
	setup: ({ App, props }) => {
		return /* @__PURE__ */ jsx(TooltipProvider, {
			delayDuration: 0,
			children: /* @__PURE__ */ jsx(App, { ...props })
		});
	}
}));
//#endregion
export { TooltipContent as n, TooltipTrigger as r, Tooltip as t };

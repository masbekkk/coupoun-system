import { n as cn } from "./utils-dvte0Nyw.js";
import { n as Button } from "./app-logo-icon-BdX04kDK.js";
import { t as Input } from "./input-PqtjiIiR.js";
import { n as queryParams } from "./wayfinder-CODn9dES.js";
import { i as register } from "./routes-CxfnxDFD.js";
import { r as request } from "./password-BY7F0G3Y.js";
import { t as Label } from "./label-Du9C55rc.js";
import { t as InputError } from "./input-error-IogAeC-f.js";
import { t as PasswordInput } from "./password-input-DdIihFBH.js";
import { t as TextLink } from "./text-link-CSAslL3X.js";
import { t as Spinner } from "./spinner-BPvD6hPA.js";
import { t as AuthLayout } from "./auth-layout-DNlItS39.js";
import { Form, Head } from "@inertiajs/react";
import "react";
import { Fragment as Fragment$1, jsx, jsxs } from "react/jsx-runtime";
import { CheckIcon } from "lucide-react";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
//#region resources/js/components/ui/checkbox.tsx
function Checkbox({ className, ...props }) {
	return /* @__PURE__ */ jsx(CheckboxPrimitive.Root, {
		"data-slot": "checkbox",
		className: cn("peer border-input data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground data-[state=checked]:border-primary focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive size-4 shrink-0 rounded-[4px] border shadow-xs transition-shadow outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50", className),
		...props,
		children: /* @__PURE__ */ jsx(CheckboxPrimitive.Indicator, {
			"data-slot": "checkbox-indicator",
			className: "flex items-center justify-center text-current transition-none",
			children: /* @__PURE__ */ jsx(CheckIcon, { className: "size-3.5" })
		})
	});
}
//#endregion
//#region resources/js/routes/login/index.ts
/**
* @see \App\Http\Controllers\SessionController::store
* @see app/Http/Controllers/SessionController.php:25
* @route '/login'
*/
var store = (options) => ({
	url: store.url(options),
	method: "post"
});
store.definition = {
	methods: ["post"],
	url: "/login"
};
/**
* @see \App\Http\Controllers\SessionController::store
* @see app/Http/Controllers/SessionController.php:25
* @route '/login'
*/
store.url = (options) => {
	return store.definition.url + queryParams(options);
};
/**
* @see \App\Http\Controllers\SessionController::store
* @see app/Http/Controllers/SessionController.php:25
* @route '/login'
*/
store.post = (options) => ({
	url: store.url(options),
	method: "post"
});
/**
* @see \App\Http\Controllers\SessionController::store
* @see app/Http/Controllers/SessionController.php:25
* @route '/login'
*/
var storeForm = (options) => ({
	action: store.url(options),
	method: "post"
});
/**
* @see \App\Http\Controllers\SessionController::store
* @see app/Http/Controllers/SessionController.php:25
* @route '/login'
*/
storeForm.post = (options) => ({
	action: store.url(options),
	method: "post"
});
store.form = storeForm;
Object.assign(store, store);
//#endregion
//#region resources/js/pages/session/create.tsx
function Login({ status, canResetPassword, canRegister }) {
	return /* @__PURE__ */ jsxs(AuthLayout, {
		title: "Log in to your account",
		description: "Enter your email and password below to log in",
		children: [
			/* @__PURE__ */ jsx(Head, { title: "Log in" }),
			/* @__PURE__ */ jsx(Form, {
				...store.form(),
				resetOnSuccess: ["password"],
				className: "flex flex-col gap-6",
				children: ({ processing, errors }) => /* @__PURE__ */ jsxs(Fragment$1, { children: [/* @__PURE__ */ jsxs("div", {
					className: "grid gap-6",
					children: [
						/* @__PURE__ */ jsxs("div", {
							className: "grid gap-2",
							children: [
								/* @__PURE__ */ jsx(Label, {
									htmlFor: "email",
									children: "Email address"
								}),
								/* @__PURE__ */ jsx(Input, {
									id: "email",
									type: "email",
									name: "email",
									required: true,
									autoFocus: true,
									tabIndex: 1,
									autoComplete: "email",
									placeholder: "email@example.com"
								}),
								/* @__PURE__ */ jsx(InputError, { message: errors.email })
							]
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "grid gap-2",
							children: [
								/* @__PURE__ */ jsxs("div", {
									className: "flex items-center",
									children: [/* @__PURE__ */ jsx(Label, {
										htmlFor: "password",
										children: "Password"
									}), canResetPassword && /* @__PURE__ */ jsx(TextLink, {
										href: request(),
										className: "ml-auto text-sm",
										tabIndex: 5,
										children: "Forgot password?"
									})]
								}),
								/* @__PURE__ */ jsx(PasswordInput, {
									id: "password",
									name: "password",
									required: true,
									tabIndex: 2,
									autoComplete: "current-password",
									placeholder: "Password"
								}),
								/* @__PURE__ */ jsx(InputError, { message: errors.password })
							]
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "flex items-center space-x-3",
							children: [/* @__PURE__ */ jsx(Checkbox, {
								id: "remember",
								name: "remember",
								tabIndex: 3
							}), /* @__PURE__ */ jsx(Label, {
								htmlFor: "remember",
								children: "Remember me"
							})]
						}),
						/* @__PURE__ */ jsxs(Button, {
							type: "submit",
							className: "mt-4 w-full",
							tabIndex: 4,
							disabled: processing,
							"data-test": "login-button",
							children: [processing && /* @__PURE__ */ jsx(Spinner, {}), "Log in"]
						})
					]
				}), canRegister && /* @__PURE__ */ jsxs("div", {
					className: "text-center text-sm text-muted-foreground",
					children: [
						"Don't have an account?",
						" ",
						/* @__PURE__ */ jsx(TextLink, {
							href: register(),
							tabIndex: 5,
							children: "Sign up"
						})
					]
				})] })
			}),
			status && /* @__PURE__ */ jsx("div", {
				className: "mb-4 text-center text-sm font-medium text-green-600",
				children: status
			})
		]
	});
}
//#endregion
export { Login as default };

import { n as Button } from "./app-logo-icon-BdX04kDK.js";
import { n as store } from "./confirm-C_hqR8gn.js";
import { t as Label } from "./label-Du9C55rc.js";
import { t as InputError } from "./input-error-IogAeC-f.js";
import { t as PasswordInput } from "./password-input-DdIihFBH.js";
import { t as Spinner } from "./spinner-BPvD6hPA.js";
import { t as AuthLayout } from "./auth-layout-DNlItS39.js";
import { Form, Head } from "@inertiajs/react";
import { jsx, jsxs } from "react/jsx-runtime";
//#region resources/js/pages/user-password-confirmation/create.tsx
function Create() {
	return /* @__PURE__ */ jsxs(AuthLayout, {
		title: "Confirm your password",
		description: "This is a secure area of the application. Please confirm your password before continuing.",
		children: [/* @__PURE__ */ jsx(Head, { title: "Confirm password" }), /* @__PURE__ */ jsx(Form, {
			...store.form(),
			resetOnSuccess: ["password"],
			children: ({ processing, errors }) => /* @__PURE__ */ jsxs("div", {
				className: "space-y-6",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "grid gap-2",
					children: [
						/* @__PURE__ */ jsx(Label, {
							htmlFor: "password",
							children: "Password"
						}),
						/* @__PURE__ */ jsx(PasswordInput, {
							id: "password",
							name: "password",
							placeholder: "Password",
							autoComplete: "current-password",
							autoFocus: true
						}),
						/* @__PURE__ */ jsx(InputError, { message: errors.password })
					]
				}), /* @__PURE__ */ jsx("div", {
					className: "flex items-center",
					children: /* @__PURE__ */ jsxs(Button, {
						className: "w-full",
						disabled: processing,
						"data-test": "confirm-password-button",
						children: [processing && /* @__PURE__ */ jsx(Spinner, {}), "Confirm password"]
					})
				})]
			})
		})]
	});
}
//#endregion
export { Create as default };

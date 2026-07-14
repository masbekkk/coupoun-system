import { n as Button } from "./app-logo-icon-BdX04kDK.js";
import { t as Input } from "./input-PqtjiIiR.js";
import { i as update } from "./password-BY7F0G3Y.js";
import { t as Label } from "./label-Du9C55rc.js";
import { t as InputError } from "./input-error-IogAeC-f.js";
import { t as PasswordInput } from "./password-input-DdIihFBH.js";
import { t as Spinner } from "./spinner-BPvD6hPA.js";
import { t as AuthLayout } from "./auth-layout-DNlItS39.js";
import { Form, Head } from "@inertiajs/react";
import { jsx, jsxs } from "react/jsx-runtime";
//#region resources/js/pages/user-password/create.tsx
function ResetPassword({ token, email }) {
	return /* @__PURE__ */ jsxs(AuthLayout, {
		title: "Reset password",
		description: "Please enter your new password below",
		children: [/* @__PURE__ */ jsx(Head, { title: "Reset password" }), /* @__PURE__ */ jsx(Form, {
			...update.form(),
			transform: (data) => ({
				...data,
				token,
				email
			}),
			resetOnSuccess: ["password", "password_confirmation"],
			children: ({ processing, errors }) => /* @__PURE__ */ jsxs("div", {
				className: "grid gap-6",
				children: [
					/* @__PURE__ */ jsxs("div", {
						className: "grid gap-2",
						children: [
							/* @__PURE__ */ jsx(Label, {
								htmlFor: "email",
								children: "Email"
							}),
							/* @__PURE__ */ jsx(Input, {
								id: "email",
								type: "email",
								name: "email",
								autoComplete: "email",
								value: email,
								className: "mt-1 block w-full",
								readOnly: true
							}),
							/* @__PURE__ */ jsx(InputError, {
								message: errors.email,
								className: "mt-2"
							})
						]
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "grid gap-2",
						children: [
							/* @__PURE__ */ jsx(Label, {
								htmlFor: "password",
								children: "Password"
							}),
							/* @__PURE__ */ jsx(PasswordInput, {
								id: "password",
								name: "password",
								autoComplete: "new-password",
								className: "mt-1 block w-full",
								autoFocus: true,
								placeholder: "Password"
							}),
							/* @__PURE__ */ jsx(InputError, { message: errors.password })
						]
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "grid gap-2",
						children: [
							/* @__PURE__ */ jsx(Label, {
								htmlFor: "password_confirmation",
								children: "Confirm password"
							}),
							/* @__PURE__ */ jsx(PasswordInput, {
								id: "password_confirmation",
								name: "password_confirmation",
								autoComplete: "new-password",
								className: "mt-1 block w-full",
								placeholder: "Confirm password"
							}),
							/* @__PURE__ */ jsx(InputError, {
								message: errors.password_confirmation,
								className: "mt-2"
							})
						]
					}),
					/* @__PURE__ */ jsxs(Button, {
						type: "submit",
						className: "mt-4 w-full",
						disabled: processing,
						"data-test": "reset-password-button",
						children: [processing && /* @__PURE__ */ jsx(Spinner, {}), "Reset password"]
					})
				]
			})
		})]
	});
}
//#endregion
export { ResetPassword as default };

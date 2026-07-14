import { n as Button } from "./app-logo-icon-BdX04kDK.js";
import { t as Input } from "./input-PqtjiIiR.js";
import { n as login } from "./routes-CxfnxDFD.js";
import { n as email } from "./password-BY7F0G3Y.js";
import { t as Label } from "./label-Du9C55rc.js";
import { t as InputError } from "./input-error-IogAeC-f.js";
import { t as TextLink } from "./text-link-CSAslL3X.js";
import { t as AuthLayout } from "./auth-layout-DNlItS39.js";
import { Form, Head } from "@inertiajs/react";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { LoaderCircle } from "lucide-react";
//#region resources/js/pages/user-email-reset-notification/create.tsx
function ForgotPassword({ status }) {
	return /* @__PURE__ */ jsxs(AuthLayout, {
		title: "Forgot password",
		description: "Enter your email to receive a password reset link",
		children: [
			/* @__PURE__ */ jsx(Head, { title: "Forgot password" }),
			status && /* @__PURE__ */ jsx("div", {
				className: "mb-4 text-center text-sm font-medium text-green-600",
				children: status
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "space-y-6",
				children: [/* @__PURE__ */ jsx(Form, {
					...email.form(),
					children: ({ processing, errors }) => /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsxs("div", {
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
								autoComplete: "off",
								autoFocus: true,
								placeholder: "email@example.com"
							}),
							/* @__PURE__ */ jsx(InputError, { message: errors.email })
						]
					}), /* @__PURE__ */ jsx("div", {
						className: "my-6 flex items-center justify-start",
						children: /* @__PURE__ */ jsxs(Button, {
							className: "w-full",
							disabled: processing,
							"data-test": "email-password-reset-link-button",
							children: [processing && /* @__PURE__ */ jsx(LoaderCircle, { className: "h-4 w-4 animate-spin" }), "Email password reset link"]
						})
					})] })
				}), /* @__PURE__ */ jsxs("div", {
					className: "space-x-1 text-center text-sm text-muted-foreground",
					children: [/* @__PURE__ */ jsx("span", { children: "Or, return to" }), /* @__PURE__ */ jsx(TextLink, {
						href: login(),
						children: "log in"
					})]
				})]
			})
		]
	});
}
//#endregion
export { ForgotPassword as default };

import { n as Button } from "./app-logo-icon-BdX04kDK.js";
import { t as Input } from "./input-PqtjiIiR.js";
import { t as InputError } from "./input-error-IogAeC-f.js";
import { t as AuthLayout } from "./auth-layout-DNlItS39.js";
import { c as InputOTP, l as InputOTPGroup, s as store, u as InputOTPSlot } from "./use-two-factor-auth-CR2Txqsa.js";
import { Form, Head } from "@inertiajs/react";
import { useMemo, useState } from "react";
import { Fragment as Fragment$1, jsx, jsxs } from "react/jsx-runtime";
import { REGEXP_ONLY_DIGITS } from "input-otp";
//#region resources/js/pages/user-two-factor-authentication-challenge/show.tsx
function Show() {
	const [showRecoveryInput, setShowRecoveryInput] = useState(false);
	const [code, setCode] = useState("");
	const authConfigContent = useMemo(() => {
		if (showRecoveryInput) return {
			title: "Recovery code",
			description: "Please confirm access to your account by entering one of your emergency recovery codes.",
			toggleText: "login using an authentication code"
		};
		return {
			title: "Authentication code",
			description: "Enter the authentication code provided by your authenticator application.",
			toggleText: "login using a recovery code"
		};
	}, [showRecoveryInput]);
	const toggleRecoveryMode = (clearErrors) => {
		setShowRecoveryInput(!showRecoveryInput);
		clearErrors();
		setCode("");
	};
	return /* @__PURE__ */ jsxs(AuthLayout, {
		title: authConfigContent.title,
		description: authConfigContent.description,
		children: [/* @__PURE__ */ jsx(Head, { title: "Two-factor authentication" }), /* @__PURE__ */ jsx("div", {
			className: "space-y-6",
			children: /* @__PURE__ */ jsx(Form, {
				...store.form(),
				className: "space-y-4",
				resetOnError: true,
				resetOnSuccess: !showRecoveryInput,
				children: ({ errors, processing, clearErrors }) => /* @__PURE__ */ jsxs(Fragment$1, { children: [
					showRecoveryInput ? /* @__PURE__ */ jsxs(Fragment$1, { children: [/* @__PURE__ */ jsx(Input, {
						name: "recovery_code",
						type: "text",
						placeholder: "Enter recovery code",
						autoFocus: showRecoveryInput,
						required: true
					}), /* @__PURE__ */ jsx(InputError, { message: errors.recovery_code })] }) : /* @__PURE__ */ jsxs("div", {
						className: "flex flex-col items-center justify-center space-y-3 text-center",
						children: [/* @__PURE__ */ jsx("div", {
							className: "flex w-full items-center justify-center",
							children: /* @__PURE__ */ jsx(InputOTP, {
								name: "code",
								maxLength: 6,
								value: code,
								onChange: (value) => setCode(value),
								disabled: processing,
								pattern: REGEXP_ONLY_DIGITS,
								children: /* @__PURE__ */ jsx(InputOTPGroup, { children: Array.from({ length: 6 }, (_, index) => /* @__PURE__ */ jsx(InputOTPSlot, { index }, index)) })
							})
						}), /* @__PURE__ */ jsx(InputError, { message: errors.code })]
					}),
					/* @__PURE__ */ jsx(Button, {
						type: "submit",
						className: "w-full",
						disabled: processing,
						children: "Continue"
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "text-center text-sm text-muted-foreground",
						children: [/* @__PURE__ */ jsx("span", { children: "or you can " }), /* @__PURE__ */ jsx("button", {
							type: "button",
							className: "cursor-pointer text-foreground underline decoration-neutral-300 underline-offset-4 transition-colors duration-300 ease-out hover:decoration-current! dark:decoration-neutral-500",
							onClick: () => toggleRecoveryMode(clearErrors),
							children: authConfigContent.toggleText
						})]
					})
				] })
			})
		})]
	});
}
//#endregion
export { Show as default };

import { r as Heading, t as SettingsLayout } from "./layout-DXeUlC8q.js";
import { n as Button } from "./app-logo-icon-BdX04kDK.js";
import { t as app_layout_default } from "./app-layout-CSnI9nK2.js";
import { n as queryParams, t as applyUrlDefaults } from "./wayfinder-CODn9dES.js";
import { t as edit$1 } from "./password-BY7F0G3Y.js";
import { t as Label } from "./label-Du9C55rc.js";
import { t as InputError } from "./input-error-IogAeC-f.js";
import { t as PasswordInput } from "./password-input-DdIihFBH.js";
import { Form, Head } from "@inertiajs/react";
import { useRef } from "react";
import { Fragment as Fragment$1, jsx, jsxs } from "react/jsx-runtime";
import { Transition } from "@headlessui/react";
//#region resources/js/actions/App/Http/Controllers/UserPasswordController.ts
/**
* @see \App\Http\Controllers\UserPasswordController::edit
* @see app/Http/Controllers/UserPasswordController.php:47
* @route '/settings/password'
*/
var edit = (options) => ({
	url: edit.url(options),
	method: "get"
});
edit.definition = {
	methods: ["get", "head"],
	url: "/settings/password"
};
/**
* @see \App\Http\Controllers\UserPasswordController::edit
* @see app/Http/Controllers/UserPasswordController.php:47
* @route '/settings/password'
*/
edit.url = (options) => {
	return edit.definition.url + queryParams(options);
};
/**
* @see \App\Http\Controllers\UserPasswordController::edit
* @see app/Http/Controllers/UserPasswordController.php:47
* @route '/settings/password'
*/
edit.get = (options) => ({
	url: edit.url(options),
	method: "get"
});
/**
* @see \App\Http\Controllers\UserPasswordController::edit
* @see app/Http/Controllers/UserPasswordController.php:47
* @route '/settings/password'
*/
edit.head = (options) => ({
	url: edit.url(options),
	method: "head"
});
/**
* @see \App\Http\Controllers\UserPasswordController::edit
* @see app/Http/Controllers/UserPasswordController.php:47
* @route '/settings/password'
*/
var editForm = (options) => ({
	action: edit.url(options),
	method: "get"
});
/**
* @see \App\Http\Controllers\UserPasswordController::edit
* @see app/Http/Controllers/UserPasswordController.php:47
* @route '/settings/password'
*/
editForm.get = (options) => ({
	action: edit.url(options),
	method: "get"
});
/**
* @see \App\Http\Controllers\UserPasswordController::edit
* @see app/Http/Controllers/UserPasswordController.php:47
* @route '/settings/password'
*/
editForm.head = (options) => ({
	action: edit.url({ [options?.mergeQuery ? "mergeQuery" : "query"]: {
		_method: "HEAD",
		...options?.query ?? options?.mergeQuery ?? {}
	} }),
	method: "get"
});
edit.form = editForm;
/**
* @see \App\Http\Controllers\UserPasswordController::update
* @see app/Http/Controllers/UserPasswordController.php:52
* @route '/settings/password'
*/
var update = (options) => ({
	url: update.url(options),
	method: "put"
});
update.definition = {
	methods: ["put"],
	url: "/settings/password"
};
/**
* @see \App\Http\Controllers\UserPasswordController::update
* @see app/Http/Controllers/UserPasswordController.php:52
* @route '/settings/password'
*/
update.url = (options) => {
	return update.definition.url + queryParams(options);
};
/**
* @see \App\Http\Controllers\UserPasswordController::update
* @see app/Http/Controllers/UserPasswordController.php:52
* @route '/settings/password'
*/
update.put = (options) => ({
	url: update.url(options),
	method: "put"
});
/**
* @see \App\Http\Controllers\UserPasswordController::update
* @see app/Http/Controllers/UserPasswordController.php:52
* @route '/settings/password'
*/
var updateForm = (options) => ({
	action: update.url({ [options?.mergeQuery ? "mergeQuery" : "query"]: {
		_method: "PUT",
		...options?.query ?? options?.mergeQuery ?? {}
	} }),
	method: "post"
});
/**
* @see \App\Http\Controllers\UserPasswordController::update
* @see app/Http/Controllers/UserPasswordController.php:52
* @route '/settings/password'
*/
updateForm.put = (options) => ({
	action: update.url({ [options?.mergeQuery ? "mergeQuery" : "query"]: {
		_method: "PUT",
		...options?.query ?? options?.mergeQuery ?? {}
	} }),
	method: "post"
});
update.form = updateForm;
/**
* @see \App\Http\Controllers\UserPasswordController::create
* @see app/Http/Controllers/UserPasswordController.php:22
* @route '/reset-password/{token}'
*/
var create = (args, options) => ({
	url: create.url(args, options),
	method: "get"
});
create.definition = {
	methods: ["get", "head"],
	url: "/reset-password/{token}"
};
/**
* @see \App\Http\Controllers\UserPasswordController::create
* @see app/Http/Controllers/UserPasswordController.php:22
* @route '/reset-password/{token}'
*/
create.url = (args, options) => {
	if (typeof args === "string" || typeof args === "number") args = { token: args };
	if (Array.isArray(args)) args = { token: args[0] };
	args = applyUrlDefaults(args);
	const parsedArgs = { token: args.token };
	return create.definition.url.replace("{token}", parsedArgs.token.toString()).replace(/\/+$/, "") + queryParams(options);
};
/**
* @see \App\Http\Controllers\UserPasswordController::create
* @see app/Http/Controllers/UserPasswordController.php:22
* @route '/reset-password/{token}'
*/
create.get = (args, options) => ({
	url: create.url(args, options),
	method: "get"
});
/**
* @see \App\Http\Controllers\UserPasswordController::create
* @see app/Http/Controllers/UserPasswordController.php:22
* @route '/reset-password/{token}'
*/
create.head = (args, options) => ({
	url: create.url(args, options),
	method: "head"
});
/**
* @see \App\Http\Controllers\UserPasswordController::create
* @see app/Http/Controllers/UserPasswordController.php:22
* @route '/reset-password/{token}'
*/
var createForm = (args, options) => ({
	action: create.url(args, options),
	method: "get"
});
/**
* @see \App\Http\Controllers\UserPasswordController::create
* @see app/Http/Controllers/UserPasswordController.php:22
* @route '/reset-password/{token}'
*/
createForm.get = (args, options) => ({
	action: create.url(args, options),
	method: "get"
});
/**
* @see \App\Http\Controllers\UserPasswordController::create
* @see app/Http/Controllers/UserPasswordController.php:22
* @route '/reset-password/{token}'
*/
createForm.head = (args, options) => ({
	action: create.url(args, { [options?.mergeQuery ? "mergeQuery" : "query"]: {
		_method: "HEAD",
		...options?.query ?? options?.mergeQuery ?? {}
	} }),
	method: "get"
});
create.form = createForm;
/**
* @see \App\Http\Controllers\UserPasswordController::store
* @see app/Http/Controllers/UserPasswordController.php:30
* @route '/reset-password'
*/
var store = (options) => ({
	url: store.url(options),
	method: "post"
});
store.definition = {
	methods: ["post"],
	url: "/reset-password"
};
/**
* @see \App\Http\Controllers\UserPasswordController::store
* @see app/Http/Controllers/UserPasswordController.php:30
* @route '/reset-password'
*/
store.url = (options) => {
	return store.definition.url + queryParams(options);
};
/**
* @see \App\Http\Controllers\UserPasswordController::store
* @see app/Http/Controllers/UserPasswordController.php:30
* @route '/reset-password'
*/
store.post = (options) => ({
	url: store.url(options),
	method: "post"
});
/**
* @see \App\Http\Controllers\UserPasswordController::store
* @see app/Http/Controllers/UserPasswordController.php:30
* @route '/reset-password'
*/
var storeForm = (options) => ({
	action: store.url(options),
	method: "post"
});
/**
* @see \App\Http\Controllers\UserPasswordController::store
* @see app/Http/Controllers/UserPasswordController.php:30
* @route '/reset-password'
*/
storeForm.post = (options) => ({
	action: store.url(options),
	method: "post"
});
store.form = storeForm;
var UserPasswordController = {
	edit,
	update,
	create,
	store
};
//#endregion
//#region resources/js/pages/user-password/edit.tsx
var breadcrumbs = [{
	title: "Password settings",
	href: edit$1().url
}];
function Password() {
	const passwordInput = useRef(null);
	const currentPasswordInput = useRef(null);
	return /* @__PURE__ */ jsxs(app_layout_default, {
		breadcrumbs,
		children: [/* @__PURE__ */ jsx(Head, { title: "Password settings" }), /* @__PURE__ */ jsx(SettingsLayout, { children: /* @__PURE__ */ jsxs("div", {
			className: "space-y-6",
			children: [/* @__PURE__ */ jsx(Heading, {
				variant: "small",
				title: "Update password",
				description: "Ensure your account is using a long, random password to stay secure"
			}), /* @__PURE__ */ jsx(Form, {
				...UserPasswordController.update.form(),
				options: { preserveScroll: true },
				resetOnError: [
					"password",
					"password_confirmation",
					"current_password"
				],
				resetOnSuccess: true,
				onError: (errors) => {
					if (errors.password) passwordInput.current?.focus();
					if (errors.current_password) currentPasswordInput.current?.focus();
				},
				className: "space-y-6",
				children: ({ errors, processing, recentlySuccessful }) => /* @__PURE__ */ jsxs(Fragment$1, { children: [
					/* @__PURE__ */ jsxs("div", {
						className: "grid gap-2",
						children: [
							/* @__PURE__ */ jsx(Label, {
								htmlFor: "current_password",
								children: "Current password"
							}),
							/* @__PURE__ */ jsx(PasswordInput, {
								id: "current_password",
								ref: currentPasswordInput,
								name: "current_password",
								className: "mt-1 block w-full",
								autoComplete: "current-password",
								placeholder: "Current password"
							}),
							/* @__PURE__ */ jsx(InputError, { message: errors.current_password })
						]
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "grid gap-2",
						children: [
							/* @__PURE__ */ jsx(Label, {
								htmlFor: "password",
								children: "New password"
							}),
							/* @__PURE__ */ jsx(PasswordInput, {
								id: "password",
								ref: passwordInput,
								name: "password",
								className: "mt-1 block w-full",
								autoComplete: "new-password",
								placeholder: "New password"
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
								className: "mt-1 block w-full",
								autoComplete: "new-password",
								placeholder: "Confirm password"
							}),
							/* @__PURE__ */ jsx(InputError, { message: errors.password_confirmation })
						]
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "flex items-center gap-4",
						children: [/* @__PURE__ */ jsx(Button, {
							disabled: processing,
							"data-test": "update-password-button",
							children: "Save password"
						}), /* @__PURE__ */ jsx(Transition, {
							show: recentlySuccessful,
							enter: "transition ease-in-out",
							enterFrom: "opacity-0",
							leave: "transition ease-in-out",
							leaveTo: "opacity-0",
							children: /* @__PURE__ */ jsx("p", {
								className: "text-sm text-neutral-600",
								children: "Saved"
							})
						})]
					})
				] })
			})]
		}) })]
	});
}
//#endregion
export { Password as default };

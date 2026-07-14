import { r as Heading, t as SettingsLayout } from "./layout-DXeUlC8q.js";
import { n as Button } from "./app-logo-icon-BdX04kDK.js";
import { t as Input } from "./input-PqtjiIiR.js";
import { n as edit$1, t as app_layout_default } from "./app-layout-CSnI9nK2.js";
import { n as queryParams } from "./wayfinder-CODn9dES.js";
import { t as Label } from "./label-Du9C55rc.js";
import { t as InputError } from "./input-error-IogAeC-f.js";
import { t as PasswordInput } from "./password-input-DdIihFBH.js";
import { t as send } from "./verification-DMu8rpt-.js";
import { a as DialogFooter, c as DialogTrigger, i as DialogDescription, n as DialogClose, r as DialogContent, s as DialogTitle, t as Dialog } from "./dialog-ChxCstgp.js";
import { Form, Head, Link, usePage } from "@inertiajs/react";
import { useRef } from "react";
import { Fragment as Fragment$1, jsx, jsxs } from "react/jsx-runtime";
import { Transition } from "@headlessui/react";
//#region resources/js/actions/App/Http/Controllers/UserProfileController.ts
/**
* @see \App\Http\Controllers\UserProfileController::edit
* @see app/Http/Controllers/UserProfileController.php:18
* @route '/settings/profile'
*/
var edit = (options) => ({
	url: edit.url(options),
	method: "get"
});
edit.definition = {
	methods: ["get", "head"],
	url: "/settings/profile"
};
/**
* @see \App\Http\Controllers\UserProfileController::edit
* @see app/Http/Controllers/UserProfileController.php:18
* @route '/settings/profile'
*/
edit.url = (options) => {
	return edit.definition.url + queryParams(options);
};
/**
* @see \App\Http\Controllers\UserProfileController::edit
* @see app/Http/Controllers/UserProfileController.php:18
* @route '/settings/profile'
*/
edit.get = (options) => ({
	url: edit.url(options),
	method: "get"
});
/**
* @see \App\Http\Controllers\UserProfileController::edit
* @see app/Http/Controllers/UserProfileController.php:18
* @route '/settings/profile'
*/
edit.head = (options) => ({
	url: edit.url(options),
	method: "head"
});
/**
* @see \App\Http\Controllers\UserProfileController::edit
* @see app/Http/Controllers/UserProfileController.php:18
* @route '/settings/profile'
*/
var editForm = (options) => ({
	action: edit.url(options),
	method: "get"
});
/**
* @see \App\Http\Controllers\UserProfileController::edit
* @see app/Http/Controllers/UserProfileController.php:18
* @route '/settings/profile'
*/
editForm.get = (options) => ({
	action: edit.url(options),
	method: "get"
});
/**
* @see \App\Http\Controllers\UserProfileController::edit
* @see app/Http/Controllers/UserProfileController.php:18
* @route '/settings/profile'
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
* @see \App\Http\Controllers\UserProfileController::update
* @see app/Http/Controllers/UserProfileController.php:25
* @route '/settings/profile'
*/
var update = (options) => ({
	url: update.url(options),
	method: "patch"
});
update.definition = {
	methods: ["patch"],
	url: "/settings/profile"
};
/**
* @see \App\Http\Controllers\UserProfileController::update
* @see app/Http/Controllers/UserProfileController.php:25
* @route '/settings/profile'
*/
update.url = (options) => {
	return update.definition.url + queryParams(options);
};
/**
* @see \App\Http\Controllers\UserProfileController::update
* @see app/Http/Controllers/UserProfileController.php:25
* @route '/settings/profile'
*/
update.patch = (options) => ({
	url: update.url(options),
	method: "patch"
});
/**
* @see \App\Http\Controllers\UserProfileController::update
* @see app/Http/Controllers/UserProfileController.php:25
* @route '/settings/profile'
*/
var updateForm = (options) => ({
	action: update.url({ [options?.mergeQuery ? "mergeQuery" : "query"]: {
		_method: "PATCH",
		...options?.query ?? options?.mergeQuery ?? {}
	} }),
	method: "post"
});
/**
* @see \App\Http\Controllers\UserProfileController::update
* @see app/Http/Controllers/UserProfileController.php:25
* @route '/settings/profile'
*/
updateForm.patch = (options) => ({
	action: update.url({ [options?.mergeQuery ? "mergeQuery" : "query"]: {
		_method: "PATCH",
		...options?.query ?? options?.mergeQuery ?? {}
	} }),
	method: "post"
});
update.form = updateForm;
var UserProfileController = {
	edit,
	update
};
//#endregion
//#region resources/js/actions/App/Http/Controllers/UserController.ts
/**
* @see \App\Http\Controllers\UserController::destroy
* @see app/Http/Controllers/UserController.php:42
* @route '/user'
*/
var destroy = (options) => ({
	url: destroy.url(options),
	method: "delete"
});
destroy.definition = {
	methods: ["delete"],
	url: "/user"
};
/**
* @see \App\Http\Controllers\UserController::destroy
* @see app/Http/Controllers/UserController.php:42
* @route '/user'
*/
destroy.url = (options) => {
	return destroy.definition.url + queryParams(options);
};
/**
* @see \App\Http\Controllers\UserController::destroy
* @see app/Http/Controllers/UserController.php:42
* @route '/user'
*/
destroy.delete = (options) => ({
	url: destroy.url(options),
	method: "delete"
});
/**
* @see \App\Http\Controllers\UserController::destroy
* @see app/Http/Controllers/UserController.php:42
* @route '/user'
*/
var destroyForm = (options) => ({
	action: destroy.url({ [options?.mergeQuery ? "mergeQuery" : "query"]: {
		_method: "DELETE",
		...options?.query ?? options?.mergeQuery ?? {}
	} }),
	method: "post"
});
/**
* @see \App\Http\Controllers\UserController::destroy
* @see app/Http/Controllers/UserController.php:42
* @route '/user'
*/
destroyForm.delete = (options) => ({
	action: destroy.url({ [options?.mergeQuery ? "mergeQuery" : "query"]: {
		_method: "DELETE",
		...options?.query ?? options?.mergeQuery ?? {}
	} }),
	method: "post"
});
destroy.form = destroyForm;
/**
* @see \App\Http\Controllers\UserController::create
* @see app/Http/Controllers/UserController.php:20
* @route '/register'
*/
var create = (options) => ({
	url: create.url(options),
	method: "get"
});
create.definition = {
	methods: ["get", "head"],
	url: "/register"
};
/**
* @see \App\Http\Controllers\UserController::create
* @see app/Http/Controllers/UserController.php:20
* @route '/register'
*/
create.url = (options) => {
	return create.definition.url + queryParams(options);
};
/**
* @see \App\Http\Controllers\UserController::create
* @see app/Http/Controllers/UserController.php:20
* @route '/register'
*/
create.get = (options) => ({
	url: create.url(options),
	method: "get"
});
/**
* @see \App\Http\Controllers\UserController::create
* @see app/Http/Controllers/UserController.php:20
* @route '/register'
*/
create.head = (options) => ({
	url: create.url(options),
	method: "head"
});
/**
* @see \App\Http\Controllers\UserController::create
* @see app/Http/Controllers/UserController.php:20
* @route '/register'
*/
var createForm = (options) => ({
	action: create.url(options),
	method: "get"
});
/**
* @see \App\Http\Controllers\UserController::create
* @see app/Http/Controllers/UserController.php:20
* @route '/register'
*/
createForm.get = (options) => ({
	action: create.url(options),
	method: "get"
});
/**
* @see \App\Http\Controllers\UserController::create
* @see app/Http/Controllers/UserController.php:20
* @route '/register'
*/
createForm.head = (options) => ({
	action: create.url({ [options?.mergeQuery ? "mergeQuery" : "query"]: {
		_method: "HEAD",
		...options?.query ?? options?.mergeQuery ?? {}
	} }),
	method: "get"
});
create.form = createForm;
/**
* @see \App\Http\Controllers\UserController::store
* @see app/Http/Controllers/UserController.php:25
* @route '/register'
*/
var store = (options) => ({
	url: store.url(options),
	method: "post"
});
store.definition = {
	methods: ["post"],
	url: "/register"
};
/**
* @see \App\Http\Controllers\UserController::store
* @see app/Http/Controllers/UserController.php:25
* @route '/register'
*/
store.url = (options) => {
	return store.definition.url + queryParams(options);
};
/**
* @see \App\Http\Controllers\UserController::store
* @see app/Http/Controllers/UserController.php:25
* @route '/register'
*/
store.post = (options) => ({
	url: store.url(options),
	method: "post"
});
/**
* @see \App\Http\Controllers\UserController::store
* @see app/Http/Controllers/UserController.php:25
* @route '/register'
*/
var storeForm = (options) => ({
	action: store.url(options),
	method: "post"
});
/**
* @see \App\Http\Controllers\UserController::store
* @see app/Http/Controllers/UserController.php:25
* @route '/register'
*/
storeForm.post = (options) => ({
	action: store.url(options),
	method: "post"
});
store.form = storeForm;
var UserController = {
	destroy,
	create,
	store
};
//#endregion
//#region resources/js/components/delete-user.tsx
function DeleteUser() {
	const passwordInput = useRef(null);
	return /* @__PURE__ */ jsxs("div", {
		className: "space-y-6",
		children: [/* @__PURE__ */ jsx(Heading, {
			variant: "small",
			title: "Delete account",
			description: "Delete your account and all of its resources"
		}), /* @__PURE__ */ jsxs("div", {
			className: "space-y-4 rounded-lg border border-red-100 bg-red-50 p-4 dark:border-red-200/10 dark:bg-red-700/10",
			children: [/* @__PURE__ */ jsxs("div", {
				className: "relative space-y-0.5 text-red-600 dark:text-red-100",
				children: [/* @__PURE__ */ jsx("p", {
					className: "font-medium",
					children: "Warning"
				}), /* @__PURE__ */ jsx("p", {
					className: "text-sm",
					children: "Please proceed with caution, this cannot be undone."
				})]
			}), /* @__PURE__ */ jsxs(Dialog, { children: [/* @__PURE__ */ jsx(DialogTrigger, {
				asChild: true,
				children: /* @__PURE__ */ jsx(Button, {
					variant: "destructive",
					"data-test": "delete-user-button",
					children: "Delete account"
				})
			}), /* @__PURE__ */ jsxs(DialogContent, { children: [
				/* @__PURE__ */ jsx(DialogTitle, { children: "Are you sure you want to delete your account?" }),
				/* @__PURE__ */ jsx(DialogDescription, { children: "Once your account is deleted, all of its resources and data will also be permanently deleted. Please enter your password to confirm you would like to permanently delete your account." }),
				/* @__PURE__ */ jsx(Form, {
					...UserController.destroy.form(),
					options: { preserveScroll: true },
					onError: () => passwordInput.current?.focus(),
					resetOnSuccess: true,
					className: "space-y-6",
					children: ({ resetAndClearErrors, processing, errors }) => /* @__PURE__ */ jsxs(Fragment$1, { children: [/* @__PURE__ */ jsxs("div", {
						className: "grid gap-2",
						children: [
							/* @__PURE__ */ jsx(Label, {
								htmlFor: "password",
								className: "sr-only",
								children: "Password"
							}),
							/* @__PURE__ */ jsx(PasswordInput, {
								id: "password",
								name: "password",
								ref: passwordInput,
								placeholder: "Password",
								autoComplete: "current-password"
							}),
							/* @__PURE__ */ jsx(InputError, { message: errors.password })
						]
					}), /* @__PURE__ */ jsxs(DialogFooter, {
						className: "gap-2",
						children: [/* @__PURE__ */ jsx(DialogClose, {
							asChild: true,
							children: /* @__PURE__ */ jsx(Button, {
								variant: "secondary",
								onClick: () => resetAndClearErrors(),
								children: "Cancel"
							})
						}), /* @__PURE__ */ jsx(Button, {
							variant: "destructive",
							disabled: processing,
							asChild: true,
							children: /* @__PURE__ */ jsx("button", {
								type: "submit",
								"data-test": "confirm-delete-user-button",
								children: "Delete account"
							})
						})]
					})] })
				})
			] })] })]
		})]
	});
}
//#endregion
//#region resources/js/pages/user-profile/edit.tsx
var breadcrumbs = [{
	title: "Profile settings",
	href: edit$1()
}];
function Edit({ mustVerifyEmail, status }) {
	const { auth } = usePage().props;
	return /* @__PURE__ */ jsxs(app_layout_default, {
		breadcrumbs,
		children: [
			/* @__PURE__ */ jsx(Head, { title: "Profile settings" }),
			/* @__PURE__ */ jsx("h1", {
				className: "sr-only",
				children: "Profile settings"
			}),
			/* @__PURE__ */ jsxs(SettingsLayout, { children: [/* @__PURE__ */ jsxs("div", {
				className: "space-y-6",
				children: [/* @__PURE__ */ jsx(Heading, {
					variant: "small",
					title: "Profile information",
					description: "Update your name and email address"
				}), /* @__PURE__ */ jsx(Form, {
					...UserProfileController.update.form(),
					options: { preserveScroll: true },
					className: "space-y-6",
					children: ({ processing, recentlySuccessful, errors }) => /* @__PURE__ */ jsxs(Fragment$1, { children: [
						/* @__PURE__ */ jsxs("div", {
							className: "grid gap-2",
							children: [
								/* @__PURE__ */ jsx(Label, {
									htmlFor: "name",
									children: "Name"
								}),
								/* @__PURE__ */ jsx(Input, {
									id: "name",
									className: "mt-1 block w-full",
									defaultValue: auth.user.name,
									name: "name",
									required: true,
									autoComplete: "name",
									placeholder: "Full name"
								}),
								/* @__PURE__ */ jsx(InputError, {
									className: "mt-2",
									message: errors.name
								})
							]
						}),
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
									className: "mt-1 block w-full",
									defaultValue: auth.user.email,
									name: "email",
									required: true,
									autoComplete: "username",
									placeholder: "Email address"
								}),
								/* @__PURE__ */ jsx(InputError, {
									className: "mt-2",
									message: errors.email
								})
							]
						}),
						mustVerifyEmail && auth.user.email_verified_at === null && /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsxs("p", {
							className: "-mt-4 text-sm text-muted-foreground",
							children: [
								"Your email address is unverified.",
								" ",
								/* @__PURE__ */ jsx(Link, {
									href: send(),
									as: "button",
									className: "text-foreground underline decoration-neutral-300 underline-offset-4 transition-colors duration-300 ease-out hover:decoration-current! dark:decoration-neutral-500",
									children: "Click here to resend the verification email."
								})
							]
						}), status === "verification-link-sent" && /* @__PURE__ */ jsx("div", {
							className: "mt-2 text-sm font-medium text-green-600",
							children: "A new verification link has been sent to your email address."
						})] }),
						/* @__PURE__ */ jsxs("div", {
							className: "flex items-center gap-4",
							children: [/* @__PURE__ */ jsx(Button, {
								disabled: processing,
								"data-test": "update-profile-button",
								children: "Save"
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
			}), /* @__PURE__ */ jsx(DeleteUser, {})] })
		]
	});
}
//#endregion
export { Edit as default };

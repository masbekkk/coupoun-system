import { n as queryParams, t as applyUrlDefaults } from "./wayfinder-CODn9dES.js";
import { t as confirm$1 } from "./confirm-C_hqR8gn.js";
//#region resources/js/routes/password/index.ts
/**
* @see \Laravel\Fortify\Http\Controllers\ConfirmablePasswordController::confirm
* @see vendor/laravel/fortify/src/Http/Controllers/ConfirmablePasswordController.php:40
* @route '/user/confirm-password'
*/
var confirm = (options) => ({
	url: confirm.url(options),
	method: "get"
});
confirm.definition = {
	methods: ["get", "head"],
	url: "/user/confirm-password"
};
/**
* @see \Laravel\Fortify\Http\Controllers\ConfirmablePasswordController::confirm
* @see vendor/laravel/fortify/src/Http/Controllers/ConfirmablePasswordController.php:40
* @route '/user/confirm-password'
*/
confirm.url = (options) => {
	return confirm.definition.url + queryParams(options);
};
/**
* @see \Laravel\Fortify\Http\Controllers\ConfirmablePasswordController::confirm
* @see vendor/laravel/fortify/src/Http/Controllers/ConfirmablePasswordController.php:40
* @route '/user/confirm-password'
*/
confirm.get = (options) => ({
	url: confirm.url(options),
	method: "get"
});
/**
* @see \Laravel\Fortify\Http\Controllers\ConfirmablePasswordController::confirm
* @see vendor/laravel/fortify/src/Http/Controllers/ConfirmablePasswordController.php:40
* @route '/user/confirm-password'
*/
confirm.head = (options) => ({
	url: confirm.url(options),
	method: "head"
});
/**
* @see \Laravel\Fortify\Http\Controllers\ConfirmablePasswordController::confirm
* @see vendor/laravel/fortify/src/Http/Controllers/ConfirmablePasswordController.php:40
* @route '/user/confirm-password'
*/
var confirmForm = (options) => ({
	action: confirm.url(options),
	method: "get"
});
/**
* @see \Laravel\Fortify\Http\Controllers\ConfirmablePasswordController::confirm
* @see vendor/laravel/fortify/src/Http/Controllers/ConfirmablePasswordController.php:40
* @route '/user/confirm-password'
*/
confirmForm.get = (options) => ({
	action: confirm.url(options),
	method: "get"
});
/**
* @see \Laravel\Fortify\Http\Controllers\ConfirmablePasswordController::confirm
* @see vendor/laravel/fortify/src/Http/Controllers/ConfirmablePasswordController.php:40
* @route '/user/confirm-password'
*/
confirmForm.head = (options) => ({
	action: confirm.url({ [options?.mergeQuery ? "mergeQuery" : "query"]: {
		_method: "HEAD",
		...options?.query ?? options?.mergeQuery ?? {}
	} }),
	method: "get"
});
confirm.form = confirmForm;
/**
* @see \Laravel\Fortify\Http\Controllers\ConfirmedPasswordStatusController::confirmation
* @see vendor/laravel/fortify/src/Http/Controllers/ConfirmedPasswordStatusController.php:17
* @route '/user/confirmed-password-status'
*/
var confirmation = (options) => ({
	url: confirmation.url(options),
	method: "get"
});
confirmation.definition = {
	methods: ["get", "head"],
	url: "/user/confirmed-password-status"
};
/**
* @see \Laravel\Fortify\Http\Controllers\ConfirmedPasswordStatusController::confirmation
* @see vendor/laravel/fortify/src/Http/Controllers/ConfirmedPasswordStatusController.php:17
* @route '/user/confirmed-password-status'
*/
confirmation.url = (options) => {
	return confirmation.definition.url + queryParams(options);
};
/**
* @see \Laravel\Fortify\Http\Controllers\ConfirmedPasswordStatusController::confirmation
* @see vendor/laravel/fortify/src/Http/Controllers/ConfirmedPasswordStatusController.php:17
* @route '/user/confirmed-password-status'
*/
confirmation.get = (options) => ({
	url: confirmation.url(options),
	method: "get"
});
/**
* @see \Laravel\Fortify\Http\Controllers\ConfirmedPasswordStatusController::confirmation
* @see vendor/laravel/fortify/src/Http/Controllers/ConfirmedPasswordStatusController.php:17
* @route '/user/confirmed-password-status'
*/
confirmation.head = (options) => ({
	url: confirmation.url(options),
	method: "head"
});
/**
* @see \Laravel\Fortify\Http\Controllers\ConfirmedPasswordStatusController::confirmation
* @see vendor/laravel/fortify/src/Http/Controllers/ConfirmedPasswordStatusController.php:17
* @route '/user/confirmed-password-status'
*/
var confirmationForm = (options) => ({
	action: confirmation.url(options),
	method: "get"
});
/**
* @see \Laravel\Fortify\Http\Controllers\ConfirmedPasswordStatusController::confirmation
* @see vendor/laravel/fortify/src/Http/Controllers/ConfirmedPasswordStatusController.php:17
* @route '/user/confirmed-password-status'
*/
confirmationForm.get = (options) => ({
	action: confirmation.url(options),
	method: "get"
});
/**
* @see \Laravel\Fortify\Http\Controllers\ConfirmedPasswordStatusController::confirmation
* @see vendor/laravel/fortify/src/Http/Controllers/ConfirmedPasswordStatusController.php:17
* @route '/user/confirmed-password-status'
*/
confirmationForm.head = (options) => ({
	action: confirmation.url({ [options?.mergeQuery ? "mergeQuery" : "query"]: {
		_method: "HEAD",
		...options?.query ?? options?.mergeQuery ?? {}
	} }),
	method: "get"
});
confirmation.form = confirmationForm;
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
* @see \App\Http\Controllers\UserPasswordController::reset
* @see app/Http/Controllers/UserPasswordController.php:22
* @route '/reset-password/{token}'
*/
var reset = (args, options) => ({
	url: reset.url(args, options),
	method: "get"
});
reset.definition = {
	methods: ["get", "head"],
	url: "/reset-password/{token}"
};
/**
* @see \App\Http\Controllers\UserPasswordController::reset
* @see app/Http/Controllers/UserPasswordController.php:22
* @route '/reset-password/{token}'
*/
reset.url = (args, options) => {
	if (typeof args === "string" || typeof args === "number") args = { token: args };
	if (Array.isArray(args)) args = { token: args[0] };
	args = applyUrlDefaults(args);
	const parsedArgs = { token: args.token };
	return reset.definition.url.replace("{token}", parsedArgs.token.toString()).replace(/\/+$/, "") + queryParams(options);
};
/**
* @see \App\Http\Controllers\UserPasswordController::reset
* @see app/Http/Controllers/UserPasswordController.php:22
* @route '/reset-password/{token}'
*/
reset.get = (args, options) => ({
	url: reset.url(args, options),
	method: "get"
});
/**
* @see \App\Http\Controllers\UserPasswordController::reset
* @see app/Http/Controllers/UserPasswordController.php:22
* @route '/reset-password/{token}'
*/
reset.head = (args, options) => ({
	url: reset.url(args, options),
	method: "head"
});
/**
* @see \App\Http\Controllers\UserPasswordController::reset
* @see app/Http/Controllers/UserPasswordController.php:22
* @route '/reset-password/{token}'
*/
var resetForm = (args, options) => ({
	action: reset.url(args, options),
	method: "get"
});
/**
* @see \App\Http\Controllers\UserPasswordController::reset
* @see app/Http/Controllers/UserPasswordController.php:22
* @route '/reset-password/{token}'
*/
resetForm.get = (args, options) => ({
	action: reset.url(args, options),
	method: "get"
});
/**
* @see \App\Http\Controllers\UserPasswordController::reset
* @see app/Http/Controllers/UserPasswordController.php:22
* @route '/reset-password/{token}'
*/
resetForm.head = (args, options) => ({
	action: reset.url(args, { [options?.mergeQuery ? "mergeQuery" : "query"]: {
		_method: "HEAD",
		...options?.query ?? options?.mergeQuery ?? {}
	} }),
	method: "get"
});
reset.form = resetForm;
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
/**
* @see \App\Http\Controllers\UserEmailResetNotificationController::request
* @see app/Http/Controllers/UserEmailResetNotificationController.php:16
* @route '/forgot-password'
*/
var request = (options) => ({
	url: request.url(options),
	method: "get"
});
request.definition = {
	methods: ["get", "head"],
	url: "/forgot-password"
};
/**
* @see \App\Http\Controllers\UserEmailResetNotificationController::request
* @see app/Http/Controllers/UserEmailResetNotificationController.php:16
* @route '/forgot-password'
*/
request.url = (options) => {
	return request.definition.url + queryParams(options);
};
/**
* @see \App\Http\Controllers\UserEmailResetNotificationController::request
* @see app/Http/Controllers/UserEmailResetNotificationController.php:16
* @route '/forgot-password'
*/
request.get = (options) => ({
	url: request.url(options),
	method: "get"
});
/**
* @see \App\Http\Controllers\UserEmailResetNotificationController::request
* @see app/Http/Controllers/UserEmailResetNotificationController.php:16
* @route '/forgot-password'
*/
request.head = (options) => ({
	url: request.url(options),
	method: "head"
});
/**
* @see \App\Http\Controllers\UserEmailResetNotificationController::request
* @see app/Http/Controllers/UserEmailResetNotificationController.php:16
* @route '/forgot-password'
*/
var requestForm = (options) => ({
	action: request.url(options),
	method: "get"
});
/**
* @see \App\Http\Controllers\UserEmailResetNotificationController::request
* @see app/Http/Controllers/UserEmailResetNotificationController.php:16
* @route '/forgot-password'
*/
requestForm.get = (options) => ({
	action: request.url(options),
	method: "get"
});
/**
* @see \App\Http\Controllers\UserEmailResetNotificationController::request
* @see app/Http/Controllers/UserEmailResetNotificationController.php:16
* @route '/forgot-password'
*/
requestForm.head = (options) => ({
	action: request.url({ [options?.mergeQuery ? "mergeQuery" : "query"]: {
		_method: "HEAD",
		...options?.query ?? options?.mergeQuery ?? {}
	} }),
	method: "get"
});
request.form = requestForm;
/**
* @see \App\Http\Controllers\UserEmailResetNotificationController::email
* @see app/Http/Controllers/UserEmailResetNotificationController.php:23
* @route '/forgot-password'
*/
var email = (options) => ({
	url: email.url(options),
	method: "post"
});
email.definition = {
	methods: ["post"],
	url: "/forgot-password"
};
/**
* @see \App\Http\Controllers\UserEmailResetNotificationController::email
* @see app/Http/Controllers/UserEmailResetNotificationController.php:23
* @route '/forgot-password'
*/
email.url = (options) => {
	return email.definition.url + queryParams(options);
};
/**
* @see \App\Http\Controllers\UserEmailResetNotificationController::email
* @see app/Http/Controllers/UserEmailResetNotificationController.php:23
* @route '/forgot-password'
*/
email.post = (options) => ({
	url: email.url(options),
	method: "post"
});
/**
* @see \App\Http\Controllers\UserEmailResetNotificationController::email
* @see app/Http/Controllers/UserEmailResetNotificationController.php:23
* @route '/forgot-password'
*/
var emailForm = (options) => ({
	action: email.url(options),
	method: "post"
});
/**
* @see \App\Http\Controllers\UserEmailResetNotificationController::email
* @see app/Http/Controllers/UserEmailResetNotificationController.php:23
* @route '/forgot-password'
*/
emailForm.post = (options) => ({
	action: email.url(options),
	method: "post"
});
email.form = emailForm;
Object.assign(confirm, confirm$1), Object.assign(confirmation, confirmation), Object.assign(edit, edit), Object.assign(update, update), Object.assign(reset, reset), Object.assign(store, store), Object.assign(request, request), Object.assign(email, email);
//#endregion
export { update as i, email as n, request as r, edit as t };

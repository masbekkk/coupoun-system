import { n as queryParams, t as applyUrlDefaults } from "./wayfinder-CODn9dES.js";
//#region resources/js/routes/verification/index.ts
/**
* @see \App\Http\Controllers\UserEmailVerificationNotificationController::notice
* @see app/Http/Controllers/UserEmailVerificationNotificationController.php:17
* @route '/verify-email'
*/
var notice = (options) => ({
	url: notice.url(options),
	method: "get"
});
notice.definition = {
	methods: ["get", "head"],
	url: "/verify-email"
};
/**
* @see \App\Http\Controllers\UserEmailVerificationNotificationController::notice
* @see app/Http/Controllers/UserEmailVerificationNotificationController.php:17
* @route '/verify-email'
*/
notice.url = (options) => {
	return notice.definition.url + queryParams(options);
};
/**
* @see \App\Http\Controllers\UserEmailVerificationNotificationController::notice
* @see app/Http/Controllers/UserEmailVerificationNotificationController.php:17
* @route '/verify-email'
*/
notice.get = (options) => ({
	url: notice.url(options),
	method: "get"
});
/**
* @see \App\Http\Controllers\UserEmailVerificationNotificationController::notice
* @see app/Http/Controllers/UserEmailVerificationNotificationController.php:17
* @route '/verify-email'
*/
notice.head = (options) => ({
	url: notice.url(options),
	method: "head"
});
/**
* @see \App\Http\Controllers\UserEmailVerificationNotificationController::notice
* @see app/Http/Controllers/UserEmailVerificationNotificationController.php:17
* @route '/verify-email'
*/
var noticeForm = (options) => ({
	action: notice.url(options),
	method: "get"
});
/**
* @see \App\Http\Controllers\UserEmailVerificationNotificationController::notice
* @see app/Http/Controllers/UserEmailVerificationNotificationController.php:17
* @route '/verify-email'
*/
noticeForm.get = (options) => ({
	action: notice.url(options),
	method: "get"
});
/**
* @see \App\Http\Controllers\UserEmailVerificationNotificationController::notice
* @see app/Http/Controllers/UserEmailVerificationNotificationController.php:17
* @route '/verify-email'
*/
noticeForm.head = (options) => ({
	action: notice.url({ [options?.mergeQuery ? "mergeQuery" : "query"]: {
		_method: "HEAD",
		...options?.query ?? options?.mergeQuery ?? {}
	} }),
	method: "get"
});
notice.form = noticeForm;
/**
* @see \App\Http\Controllers\UserEmailVerificationNotificationController::send
* @see app/Http/Controllers/UserEmailVerificationNotificationController.php:24
* @route '/email/verification-notification'
*/
var send = (options) => ({
	url: send.url(options),
	method: "post"
});
send.definition = {
	methods: ["post"],
	url: "/email/verification-notification"
};
/**
* @see \App\Http\Controllers\UserEmailVerificationNotificationController::send
* @see app/Http/Controllers/UserEmailVerificationNotificationController.php:24
* @route '/email/verification-notification'
*/
send.url = (options) => {
	return send.definition.url + queryParams(options);
};
/**
* @see \App\Http\Controllers\UserEmailVerificationNotificationController::send
* @see app/Http/Controllers/UserEmailVerificationNotificationController.php:24
* @route '/email/verification-notification'
*/
send.post = (options) => ({
	url: send.url(options),
	method: "post"
});
/**
* @see \App\Http\Controllers\UserEmailVerificationNotificationController::send
* @see app/Http/Controllers/UserEmailVerificationNotificationController.php:24
* @route '/email/verification-notification'
*/
var sendForm = (options) => ({
	action: send.url(options),
	method: "post"
});
/**
* @see \App\Http\Controllers\UserEmailVerificationNotificationController::send
* @see app/Http/Controllers/UserEmailVerificationNotificationController.php:24
* @route '/email/verification-notification'
*/
sendForm.post = (options) => ({
	action: send.url(options),
	method: "post"
});
send.form = sendForm;
/**
* @see \App\Http\Controllers\UserEmailVerificationController::verify
* @see app/Http/Controllers/UserEmailVerificationController.php:14
* @route '/verify-email/{id}/{hash}'
*/
var verify = (args, options) => ({
	url: verify.url(args, options),
	method: "get"
});
verify.definition = {
	methods: ["get", "head"],
	url: "/verify-email/{id}/{hash}"
};
/**
* @see \App\Http\Controllers\UserEmailVerificationController::verify
* @see app/Http/Controllers/UserEmailVerificationController.php:14
* @route '/verify-email/{id}/{hash}'
*/
verify.url = (args, options) => {
	if (Array.isArray(args)) args = {
		id: args[0],
		hash: args[1]
	};
	args = applyUrlDefaults(args);
	const parsedArgs = {
		id: args.id,
		hash: args.hash
	};
	return verify.definition.url.replace("{id}", parsedArgs.id.toString()).replace("{hash}", parsedArgs.hash.toString()).replace(/\/+$/, "") + queryParams(options);
};
/**
* @see \App\Http\Controllers\UserEmailVerificationController::verify
* @see app/Http/Controllers/UserEmailVerificationController.php:14
* @route '/verify-email/{id}/{hash}'
*/
verify.get = (args, options) => ({
	url: verify.url(args, options),
	method: "get"
});
/**
* @see \App\Http\Controllers\UserEmailVerificationController::verify
* @see app/Http/Controllers/UserEmailVerificationController.php:14
* @route '/verify-email/{id}/{hash}'
*/
verify.head = (args, options) => ({
	url: verify.url(args, options),
	method: "head"
});
/**
* @see \App\Http\Controllers\UserEmailVerificationController::verify
* @see app/Http/Controllers/UserEmailVerificationController.php:14
* @route '/verify-email/{id}/{hash}'
*/
var verifyForm = (args, options) => ({
	action: verify.url(args, options),
	method: "get"
});
/**
* @see \App\Http\Controllers\UserEmailVerificationController::verify
* @see app/Http/Controllers/UserEmailVerificationController.php:14
* @route '/verify-email/{id}/{hash}'
*/
verifyForm.get = (args, options) => ({
	action: verify.url(args, options),
	method: "get"
});
/**
* @see \App\Http\Controllers\UserEmailVerificationController::verify
* @see app/Http/Controllers/UserEmailVerificationController.php:14
* @route '/verify-email/{id}/{hash}'
*/
verifyForm.head = (args, options) => ({
	action: verify.url(args, { [options?.mergeQuery ? "mergeQuery" : "query"]: {
		_method: "HEAD",
		...options?.query ?? options?.mergeQuery ?? {}
	} }),
	method: "get"
});
verify.form = verifyForm;
Object.assign(notice, notice), Object.assign(send, send), Object.assign(verify, verify);
//#endregion
export { send as t };

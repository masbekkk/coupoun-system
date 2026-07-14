import { n as queryParams } from "./wayfinder-CODn9dES.js";
//#region resources/js/routes/index.ts
/**
* @see \App\Http\Controllers\SessionController::login
* @see app/Http/Controllers/SessionController.php:17
* @route '/login'
*/
var login = (options) => ({
	url: login.url(options),
	method: "get"
});
login.definition = {
	methods: ["get", "head"],
	url: "/login"
};
/**
* @see \App\Http\Controllers\SessionController::login
* @see app/Http/Controllers/SessionController.php:17
* @route '/login'
*/
login.url = (options) => {
	return login.definition.url + queryParams(options);
};
/**
* @see \App\Http\Controllers\SessionController::login
* @see app/Http/Controllers/SessionController.php:17
* @route '/login'
*/
login.get = (options) => ({
	url: login.url(options),
	method: "get"
});
/**
* @see \App\Http\Controllers\SessionController::login
* @see app/Http/Controllers/SessionController.php:17
* @route '/login'
*/
login.head = (options) => ({
	url: login.url(options),
	method: "head"
});
/**
* @see \App\Http\Controllers\SessionController::login
* @see app/Http/Controllers/SessionController.php:17
* @route '/login'
*/
var loginForm = (options) => ({
	action: login.url(options),
	method: "get"
});
/**
* @see \App\Http\Controllers\SessionController::login
* @see app/Http/Controllers/SessionController.php:17
* @route '/login'
*/
loginForm.get = (options) => ({
	action: login.url(options),
	method: "get"
});
/**
* @see \App\Http\Controllers\SessionController::login
* @see app/Http/Controllers/SessionController.php:17
* @route '/login'
*/
loginForm.head = (options) => ({
	action: login.url({ [options?.mergeQuery ? "mergeQuery" : "query"]: {
		_method: "HEAD",
		...options?.query ?? options?.mergeQuery ?? {}
	} }),
	method: "get"
});
login.form = loginForm;
/**
* @see \App\Http\Controllers\SessionController::logout
* @see app/Http/Controllers/SessionController.php:36
* @route '/logout'
*/
var logout = (options) => ({
	url: logout.url(options),
	method: "post"
});
logout.definition = {
	methods: ["post"],
	url: "/logout"
};
/**
* @see \App\Http\Controllers\SessionController::logout
* @see app/Http/Controllers/SessionController.php:36
* @route '/logout'
*/
logout.url = (options) => {
	return logout.definition.url + queryParams(options);
};
/**
* @see \App\Http\Controllers\SessionController::logout
* @see app/Http/Controllers/SessionController.php:36
* @route '/logout'
*/
logout.post = (options) => ({
	url: logout.url(options),
	method: "post"
});
/**
* @see \App\Http\Controllers\SessionController::logout
* @see app/Http/Controllers/SessionController.php:36
* @route '/logout'
*/
var logoutForm = (options) => ({
	action: logout.url(options),
	method: "post"
});
/**
* @see \App\Http\Controllers\SessionController::logout
* @see app/Http/Controllers/SessionController.php:36
* @route '/logout'
*/
logoutForm.post = (options) => ({
	action: logout.url(options),
	method: "post"
});
logout.form = logoutForm;
/**
* @see routes/web.php:19
* @route '/dashboard'
*/
var dashboard = (options) => ({
	url: dashboard.url(options),
	method: "get"
});
dashboard.definition = {
	methods: ["get", "head"],
	url: "/dashboard"
};
/**
* @see routes/web.php:19
* @route '/dashboard'
*/
dashboard.url = (options) => {
	return dashboard.definition.url + queryParams(options);
};
/**
* @see routes/web.php:19
* @route '/dashboard'
*/
dashboard.get = (options) => ({
	url: dashboard.url(options),
	method: "get"
});
/**
* @see routes/web.php:19
* @route '/dashboard'
*/
dashboard.head = (options) => ({
	url: dashboard.url(options),
	method: "head"
});
/**
* @see routes/web.php:19
* @route '/dashboard'
*/
var dashboardForm = (options) => ({
	action: dashboard.url(options),
	method: "get"
});
/**
* @see routes/web.php:19
* @route '/dashboard'
*/
dashboardForm.get = (options) => ({
	action: dashboard.url(options),
	method: "get"
});
/**
* @see routes/web.php:19
* @route '/dashboard'
*/
dashboardForm.head = (options) => ({
	action: dashboard.url({ [options?.mergeQuery ? "mergeQuery" : "query"]: {
		_method: "HEAD",
		...options?.query ?? options?.mergeQuery ?? {}
	} }),
	method: "get"
});
dashboard.form = dashboardForm;
/**
* @see \App\Http\Controllers\UserController::register
* @see app/Http/Controllers/UserController.php:20
* @route '/register'
*/
var register = (options) => ({
	url: register.url(options),
	method: "get"
});
register.definition = {
	methods: ["get", "head"],
	url: "/register"
};
/**
* @see \App\Http\Controllers\UserController::register
* @see app/Http/Controllers/UserController.php:20
* @route '/register'
*/
register.url = (options) => {
	return register.definition.url + queryParams(options);
};
/**
* @see \App\Http\Controllers\UserController::register
* @see app/Http/Controllers/UserController.php:20
* @route '/register'
*/
register.get = (options) => ({
	url: register.url(options),
	method: "get"
});
/**
* @see \App\Http\Controllers\UserController::register
* @see app/Http/Controllers/UserController.php:20
* @route '/register'
*/
register.head = (options) => ({
	url: register.url(options),
	method: "head"
});
/**
* @see \App\Http\Controllers\UserController::register
* @see app/Http/Controllers/UserController.php:20
* @route '/register'
*/
var registerForm = (options) => ({
	action: register.url(options),
	method: "get"
});
/**
* @see \App\Http\Controllers\UserController::register
* @see app/Http/Controllers/UserController.php:20
* @route '/register'
*/
registerForm.get = (options) => ({
	action: register.url(options),
	method: "get"
});
/**
* @see \App\Http\Controllers\UserController::register
* @see app/Http/Controllers/UserController.php:20
* @route '/register'
*/
registerForm.head = (options) => ({
	action: register.url({ [options?.mergeQuery ? "mergeQuery" : "query"]: {
		_method: "HEAD",
		...options?.query ?? options?.mergeQuery ?? {}
	} }),
	method: "get"
});
register.form = registerForm;
//#endregion
export { register as i, login as n, logout as r, dashboard as t };

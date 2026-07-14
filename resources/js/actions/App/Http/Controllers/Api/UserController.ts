import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../wayfinder'
/**
* @see \App\Http\Controllers\Api\UserController::updateProfile
* @see app/Http/Controllers/Api/UserController.php:15
* @route '/api/v1/user'
*/
export const updateProfile = (options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: updateProfile.url(options),
    method: 'patch',
})

updateProfile.definition = {
    methods: ["patch"],
    url: '/api/v1/user',
} satisfies RouteDefinition<["patch"]>

/**
* @see \App\Http\Controllers\Api\UserController::updateProfile
* @see app/Http/Controllers/Api/UserController.php:15
* @route '/api/v1/user'
*/
updateProfile.url = (options?: RouteQueryOptions) => {
    return updateProfile.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\UserController::updateProfile
* @see app/Http/Controllers/Api/UserController.php:15
* @route '/api/v1/user'
*/
updateProfile.patch = (options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: updateProfile.url(options),
    method: 'patch',
})

/**
* @see \App\Http\Controllers\Api\UserController::updateProfile
* @see app/Http/Controllers/Api/UserController.php:15
* @route '/api/v1/user'
*/
const updateProfileForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: updateProfile.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PATCH',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Api\UserController::updateProfile
* @see app/Http/Controllers/Api/UserController.php:15
* @route '/api/v1/user'
*/
updateProfileForm.patch = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: updateProfile.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PATCH',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

updateProfile.form = updateProfileForm

/**
* @see \App\Http\Controllers\Api\UserController::changePassword
* @see app/Http/Controllers/Api/UserController.php:25
* @route '/api/v1/user/password'
*/
export const changePassword = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: changePassword.url(options),
    method: 'post',
})

changePassword.definition = {
    methods: ["post"],
    url: '/api/v1/user/password',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Api\UserController::changePassword
* @see app/Http/Controllers/Api/UserController.php:25
* @route '/api/v1/user/password'
*/
changePassword.url = (options?: RouteQueryOptions) => {
    return changePassword.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\UserController::changePassword
* @see app/Http/Controllers/Api/UserController.php:25
* @route '/api/v1/user/password'
*/
changePassword.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: changePassword.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Api\UserController::changePassword
* @see app/Http/Controllers/Api/UserController.php:25
* @route '/api/v1/user/password'
*/
const changePasswordForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: changePassword.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Api\UserController::changePassword
* @see app/Http/Controllers/Api/UserController.php:25
* @route '/api/v1/user/password'
*/
changePasswordForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: changePassword.url(options),
    method: 'post',
})

changePassword.form = changePasswordForm

const UserController = { updateProfile, changePassword }

export default UserController
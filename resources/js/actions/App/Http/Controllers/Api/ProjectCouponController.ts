import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../wayfinder'
/**
* @see \App\Http\Controllers\Api\ProjectCouponController::index
* @see app/Http/Controllers/Api/ProjectCouponController.php:16
* @route '/api/v1/projects/{project}/coupons'
*/
export const index = (args: { project: number | { id: number } } | [project: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(args, options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/api/v1/projects/{project}/coupons',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Api\ProjectCouponController::index
* @see app/Http/Controllers/Api/ProjectCouponController.php:16
* @route '/api/v1/projects/{project}/coupons'
*/
index.url = (args: { project: number | { id: number } } | [project: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { project: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { project: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            project: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        project: typeof args.project === 'object'
        ? args.project.id
        : args.project,
    }

    return index.definition.url
            .replace('{project}', parsedArgs.project.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\ProjectCouponController::index
* @see app/Http/Controllers/Api/ProjectCouponController.php:16
* @route '/api/v1/projects/{project}/coupons'
*/
index.get = (args: { project: number | { id: number } } | [project: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Api\ProjectCouponController::index
* @see app/Http/Controllers/Api/ProjectCouponController.php:16
* @route '/api/v1/projects/{project}/coupons'
*/
index.head = (args: { project: number | { id: number } } | [project: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Api\ProjectCouponController::index
* @see app/Http/Controllers/Api/ProjectCouponController.php:16
* @route '/api/v1/projects/{project}/coupons'
*/
const indexForm = (args: { project: number | { id: number } } | [project: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Api\ProjectCouponController::index
* @see app/Http/Controllers/Api/ProjectCouponController.php:16
* @route '/api/v1/projects/{project}/coupons'
*/
indexForm.get = (args: { project: number | { id: number } } | [project: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Api\ProjectCouponController::index
* @see app/Http/Controllers/Api/ProjectCouponController.php:16
* @route '/api/v1/projects/{project}/coupons'
*/
indexForm.head = (args: { project: number | { id: number } } | [project: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

index.form = indexForm

/**
* @see \App\Http\Controllers\Api\ProjectCouponController::exportMethod
* @see app/Http/Controllers/Api/ProjectCouponController.php:42
* @route '/api/v1/projects/{project}/coupons/export'
*/
export const exportMethod = (args: { project: number | { id: number } } | [project: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: exportMethod.url(args, options),
    method: 'get',
})

exportMethod.definition = {
    methods: ["get","head"],
    url: '/api/v1/projects/{project}/coupons/export',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Api\ProjectCouponController::exportMethod
* @see app/Http/Controllers/Api/ProjectCouponController.php:42
* @route '/api/v1/projects/{project}/coupons/export'
*/
exportMethod.url = (args: { project: number | { id: number } } | [project: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { project: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { project: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            project: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        project: typeof args.project === 'object'
        ? args.project.id
        : args.project,
    }

    return exportMethod.definition.url
            .replace('{project}', parsedArgs.project.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\ProjectCouponController::exportMethod
* @see app/Http/Controllers/Api/ProjectCouponController.php:42
* @route '/api/v1/projects/{project}/coupons/export'
*/
exportMethod.get = (args: { project: number | { id: number } } | [project: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: exportMethod.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Api\ProjectCouponController::exportMethod
* @see app/Http/Controllers/Api/ProjectCouponController.php:42
* @route '/api/v1/projects/{project}/coupons/export'
*/
exportMethod.head = (args: { project: number | { id: number } } | [project: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: exportMethod.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Api\ProjectCouponController::exportMethod
* @see app/Http/Controllers/Api/ProjectCouponController.php:42
* @route '/api/v1/projects/{project}/coupons/export'
*/
const exportMethodForm = (args: { project: number | { id: number } } | [project: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: exportMethod.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Api\ProjectCouponController::exportMethod
* @see app/Http/Controllers/Api/ProjectCouponController.php:42
* @route '/api/v1/projects/{project}/coupons/export'
*/
exportMethodForm.get = (args: { project: number | { id: number } } | [project: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: exportMethod.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Api\ProjectCouponController::exportMethod
* @see app/Http/Controllers/Api/ProjectCouponController.php:42
* @route '/api/v1/projects/{project}/coupons/export'
*/
exportMethodForm.head = (args: { project: number | { id: number } } | [project: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: exportMethod.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

exportMethod.form = exportMethodForm

/**
* @see \App\Http\Controllers\Api\ProjectCouponController::exportLink
* @see app/Http/Controllers/Api/ProjectCouponController.php:51
* @route '/api/v1/projects/{project}/coupons/export-link'
*/
export const exportLink = (args: { project: number | { id: number } } | [project: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: exportLink.url(args, options),
    method: 'get',
})

exportLink.definition = {
    methods: ["get","head"],
    url: '/api/v1/projects/{project}/coupons/export-link',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Api\ProjectCouponController::exportLink
* @see app/Http/Controllers/Api/ProjectCouponController.php:51
* @route '/api/v1/projects/{project}/coupons/export-link'
*/
exportLink.url = (args: { project: number | { id: number } } | [project: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { project: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { project: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            project: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        project: typeof args.project === 'object'
        ? args.project.id
        : args.project,
    }

    return exportLink.definition.url
            .replace('{project}', parsedArgs.project.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\ProjectCouponController::exportLink
* @see app/Http/Controllers/Api/ProjectCouponController.php:51
* @route '/api/v1/projects/{project}/coupons/export-link'
*/
exportLink.get = (args: { project: number | { id: number } } | [project: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: exportLink.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Api\ProjectCouponController::exportLink
* @see app/Http/Controllers/Api/ProjectCouponController.php:51
* @route '/api/v1/projects/{project}/coupons/export-link'
*/
exportLink.head = (args: { project: number | { id: number } } | [project: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: exportLink.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Api\ProjectCouponController::exportLink
* @see app/Http/Controllers/Api/ProjectCouponController.php:51
* @route '/api/v1/projects/{project}/coupons/export-link'
*/
const exportLinkForm = (args: { project: number | { id: number } } | [project: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: exportLink.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Api\ProjectCouponController::exportLink
* @see app/Http/Controllers/Api/ProjectCouponController.php:51
* @route '/api/v1/projects/{project}/coupons/export-link'
*/
exportLinkForm.get = (args: { project: number | { id: number } } | [project: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: exportLink.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Api\ProjectCouponController::exportLink
* @see app/Http/Controllers/Api/ProjectCouponController.php:51
* @route '/api/v1/projects/{project}/coupons/export-link'
*/
exportLinkForm.head = (args: { project: number | { id: number } } | [project: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: exportLink.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

exportLink.form = exportLinkForm

const ProjectCouponController = { index, exportMethod, exportLink, export: exportMethod }

export default ProjectCouponController
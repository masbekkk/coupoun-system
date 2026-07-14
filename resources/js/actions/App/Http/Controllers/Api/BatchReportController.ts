import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../wayfinder'
/**
* @see \App\Http\Controllers\Api\BatchReportController::show
* @see app/Http/Controllers/Api/BatchReportController.php:12
* @route '/api/v1/batches/{batch}/report'
*/
export const show = (args: { batch: number | { id: number } } | [batch: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/api/v1/batches/{batch}/report',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Api\BatchReportController::show
* @see app/Http/Controllers/Api/BatchReportController.php:12
* @route '/api/v1/batches/{batch}/report'
*/
show.url = (args: { batch: number | { id: number } } | [batch: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { batch: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { batch: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            batch: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        batch: typeof args.batch === 'object'
        ? args.batch.id
        : args.batch,
    }

    return show.definition.url
            .replace('{batch}', parsedArgs.batch.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\BatchReportController::show
* @see app/Http/Controllers/Api/BatchReportController.php:12
* @route '/api/v1/batches/{batch}/report'
*/
show.get = (args: { batch: number | { id: number } } | [batch: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Api\BatchReportController::show
* @see app/Http/Controllers/Api/BatchReportController.php:12
* @route '/api/v1/batches/{batch}/report'
*/
show.head = (args: { batch: number | { id: number } } | [batch: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Api\BatchReportController::show
* @see app/Http/Controllers/Api/BatchReportController.php:12
* @route '/api/v1/batches/{batch}/report'
*/
const showForm = (args: { batch: number | { id: number } } | [batch: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Api\BatchReportController::show
* @see app/Http/Controllers/Api/BatchReportController.php:12
* @route '/api/v1/batches/{batch}/report'
*/
showForm.get = (args: { batch: number | { id: number } } | [batch: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Api\BatchReportController::show
* @see app/Http/Controllers/Api/BatchReportController.php:12
* @route '/api/v1/batches/{batch}/report'
*/
showForm.head = (args: { batch: number | { id: number } } | [batch: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

show.form = showForm

const BatchReportController = { show }

export default BatchReportController
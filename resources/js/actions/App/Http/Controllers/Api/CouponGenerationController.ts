import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../wayfinder'
/**
* @see \App\Http\Controllers\Api\CouponGenerationController::store
* @see app/Http/Controllers/Api/CouponGenerationController.php:16
* @route '/api/v1/batches/{batch}/generate'
*/
export const store = (args: { batch: number | { id: number } } | [batch: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(args, options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/api/v1/batches/{batch}/generate',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Api\CouponGenerationController::store
* @see app/Http/Controllers/Api/CouponGenerationController.php:16
* @route '/api/v1/batches/{batch}/generate'
*/
store.url = (args: { batch: number | { id: number } } | [batch: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
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

    return store.definition.url
            .replace('{batch}', parsedArgs.batch.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\CouponGenerationController::store
* @see app/Http/Controllers/Api/CouponGenerationController.php:16
* @route '/api/v1/batches/{batch}/generate'
*/
store.post = (args: { batch: number | { id: number } } | [batch: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(args, options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Api\CouponGenerationController::store
* @see app/Http/Controllers/Api/CouponGenerationController.php:16
* @route '/api/v1/batches/{batch}/generate'
*/
const storeForm = (args: { batch: number | { id: number } } | [batch: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(args, options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Api\CouponGenerationController::store
* @see app/Http/Controllers/Api/CouponGenerationController.php:16
* @route '/api/v1/batches/{batch}/generate'
*/
storeForm.post = (args: { batch: number | { id: number } } | [batch: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(args, options),
    method: 'post',
})

store.form = storeForm

const CouponGenerationController = { store }

export default CouponGenerationController
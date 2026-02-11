import { type QueryKey, queryOptions } from "@tanstack/react-query";
import type { AxiosInstance, AxiosRequestConfig } from "axios";

type Tags = string | readonly string[];

interface QueryFactoryConfig {
	/** Tags used for query key generation */
	tags: Tags;
	/** Axios instance */
	httpClient: AxiosInstance;
	/** Default axios config */
	axiosConfig?: AxiosRequestConfig;
}

interface OptionsConfig {
	/** Override axios config for this request */
	axiosConfig?: AxiosRequestConfig;
	/** Enable/disable the query */
	enabled?: boolean;
}

/**
 * Query Factory
 *
 * A fully typed factory that handles:
 * - Query key generation from tags + endpoint + params
 * - Axios GET requests
 * - TanStack queryOptions creation
 *
 * @typeParam TData - Response data type
 * @typeParam TError - Error type
 * @typeParam TParams - Query parameters type
 */

export class QueryFactory<
	TData = unknown,
	TParams extends Record<string, unknown> = Record<string, unknown>,
	TError = Error,
> {
	private tags: Tags;
	private httpClient: AxiosInstance;
	private defaultAxiosConfig?: AxiosRequestConfig;

	constructor(config: QueryFactoryConfig) {
		this.tags = config.tags;
		this.httpClient = config.httpClient;
		this.defaultAxiosConfig = config.axiosConfig;
	}

	/**
	 * Build the query key from tags + endpoint + params
	 */
	private buildQueryKey(endpoint: string, params?: TParams): QueryKey {
		const tagArray = Array.isArray(this.tags) ? [...this.tags] : [this.tags];
		const key: unknown[] = [...tagArray, endpoint];

		if (params && Object.keys(params).length > 0) {
			// Sort params for consistent keys
			const sortedParams = Object.keys(params)
				.sort()
				.reduce(
					(acc, k) => {
						const value = params[k];
						if (value !== undefined && value !== null && value !== "") {
							acc[k] = value;
						}
						return acc;
					},
					{} as Record<string, unknown>,
				);

			if (Object.keys(sortedParams).length > 0) {
				key.push(sortedParams);
			}
		}

		return key;
	}

	/**
	 * Create queryOptions for use with useQuery
	 *
	 * @param endpoint - API endpoint (e.g., '/profile', '/users/123')
	 * @param params - Query parameters (will be added to URL and query key)
	 * @param config - Additional configuration
	 *
	 * @example
	 * // Without params
	 * factory.options('/profile/123')
	 *
	 * @example
	 * // With params - adds ?userId=123 to URL and includes in query key
	 * factory.options('/profile', { userId: '123' })
	 * // Query key: ['profile', '/profile', { userId: '123' }]
	 * // URL: /profile?userId=123
	 */
	options(endpoint: string, params?: TParams, config?: OptionsConfig) {
		const queryKey = this.buildQueryKey(endpoint, params);

		return queryOptions<TData, TError>({
			queryKey,
			queryFn: async () => {
				const response = await this.httpClient.get<TData>(endpoint, {
					...this.defaultAxiosConfig,
					...config?.axiosConfig,
					params,
				});
				return response.data;
			},
			enabled: config?.enabled,
		});
	}

	/**
	 * Get the query key for a given endpoint and params
	 * Useful for cache invalidation
	 *
	 * @example
	 * queryClient.invalidateQueries({
	 *   queryKey: factory.getQueryKey('/profile', { userId: '123' })
	 * })
	 */
	getQueryKey(endpoint: string, params?: TParams): QueryKey {
		return this.buildQueryKey(endpoint, params);
	}

	/**
	 * Get the base tags
	 * Useful for invalidating all queries with these tags
	 *
	 * @example
	 * queryClient.invalidateQueries({
	 *   queryKey: factory.getTags()
	 * })
	 */
	getTags(): QueryKey {
		return Array.isArray(this.tags) ? [...this.tags] : [this.tags];
	}

	/**
	 * Create a new factory with additional tags
	 *
	 * @example
	 * const detailFactory = factory.withTags('detail');
	 * // Tags: ['profile', 'detail']
	 */
	withTags(additionalTags: Tags): QueryFactory<TData, TParams, TError> {
		const currentTags = Array.isArray(this.tags) ? this.tags : [this.tags];
		const newTags = Array.isArray(additionalTags)
			? additionalTags
			: [additionalTags];

		return new QueryFactory({
			tags: [...currentTags, ...newTags],
			httpClient: this.httpClient,
			axiosConfig: this.defaultAxiosConfig,
		});
	}

	/**
	 * Create a new factory with different types
	 * Useful when you need different response types for the same resource
	 *
	 * @example
	 * const listFactory = factory.withTypes<User[], ApiError, ListParams>();
	 */
	withTypes<
		NewData = TData,
		NewError = TError,
		NewParams extends Record<string, unknown> = TParams,
	>(): QueryFactory<NewData, NewParams, NewError> {
		return new QueryFactory({
			tags: this.tags,
			httpClient: this.httpClient,
			axiosConfig: this.defaultAxiosConfig,
		});
	}
}

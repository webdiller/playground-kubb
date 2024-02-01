import client from '../../../../shared/kubb-clients/axios-client'
import { useQuery, queryOptions, useInfiniteQuery, infiniteQueryOptions } from '@tanstack/react-query'
import type { GetPostsQueryResponse, GetPostsQueryParams } from '../../../types/postsController/GetPosts'
import type { QueryObserverOptions, UseQueryResult, QueryKey, InfiniteQueryObserverOptions, UseInfiniteQueryResult, InfiniteData } from '@tanstack/react-query'

type GetPostsClient = typeof client<GetPostsQueryResponse, never, never>
type GetPosts = {
  data: GetPostsQueryResponse
  error: never
  request: never
  pathParams: never
  queryParams: GetPostsQueryParams
  headerParams: never
  response: Awaited<ReturnType<GetPostsClient>>
  client: {
    parameters: Partial<Parameters<GetPostsClient>[0]>
    return: Awaited<ReturnType<GetPostsClient>>
  }
}
export const getPostsQueryKey = (params?: GetPosts['queryParams']) => [{ url: '/posts' }, ...(params ? [params] : [])] as const
export type GetPostsQueryKey = ReturnType<typeof getPostsQueryKey>
export function getPostsQueryOptions(params?: GetPosts['queryParams'], options: GetPosts['client']['parameters'] = {}) {
  const queryKey = getPostsQueryKey(params)
  return queryOptions({
    queryKey,
    queryFn: async () => {
      const res = await client<GetPosts['data'], GetPosts['error']>({
        method: 'get',
        url: `/posts`,
        params,
        ...options,
      })
      return res
    },
  })
}
/**
 * @summary Get all available posts
 * @link /posts */
export function useGetPosts<TData = GetPosts['response'], TQueryData = GetPosts['response'], TQueryKey extends QueryKey = GetPostsQueryKey>(
  params?: GetPosts['queryParams'],
  options: {
    query?: Partial<QueryObserverOptions<GetPosts['response'], GetPosts['error'], TData, TQueryData, TQueryKey>>
    client?: GetPosts['client']['parameters']
  } = {},
): UseQueryResult<TData, GetPosts['error']> & {
  queryKey: TQueryKey
} {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {}
  const queryKey = queryOptions?.queryKey ?? getPostsQueryKey(params)
  const query = useQuery({
    ...(getPostsQueryOptions(params, clientOptions) as QueryObserverOptions),
    queryKey,
    ...(queryOptions as unknown as QueryObserverOptions),
  }) as UseQueryResult<TData, GetPosts['error']> & {
    queryKey: TQueryKey
  }
  query.queryKey = queryKey as TQueryKey
  return query
}
export const getPostsInfiniteQueryKey = (params?: GetPosts['queryParams']) => [{ url: '/posts' }, ...(params ? [params] : [])] as const
export type GetPostsInfiniteQueryKey = ReturnType<typeof getPostsInfiniteQueryKey>
export function getPostsInfiniteQueryOptions(params?: GetPosts['queryParams'], options: GetPosts['client']['parameters'] = {}) {
  const queryKey = getPostsInfiniteQueryKey(params)
  return infiniteQueryOptions({
    queryKey,
    queryFn: async ({ pageParam }) => {
      const res = await client<GetPosts['data'], GetPosts['error']>({
        method: 'get',
        url: `/posts`,
        ...options,
        params: {
          ...params,
          ['id']: pageParam,
          ...(options.params || {}),
        },
      })
      return res
    },
    initialPageParam: 0,
    getNextPageParam: (lastPage, allPages, lastPageParam) => (Array.isArray(lastPage.data) && lastPage.data.length === 0 ? undefined : lastPageParam + 1),
    getPreviousPageParam: (firstPage, allPages, firstPageParam) => (firstPageParam <= 1 ? undefined : firstPageParam - 1),
  })
}
/**
 * @summary Get all available posts
 * @link /posts */
export function useGetPostsInfinite<
  TData = InfiniteData<GetPosts['response']>,
  TQueryData = GetPosts['response'],
  TQueryKey extends QueryKey = GetPostsInfiniteQueryKey,
>(
  params?: GetPosts['queryParams'],
  options: {
    query?: Partial<InfiniteQueryObserverOptions<GetPosts['response'], GetPosts['error'], TData, TQueryData, TQueryKey>>
    client?: GetPosts['client']['parameters']
  } = {},
): UseInfiniteQueryResult<TData, GetPosts['error']> & {
  queryKey: TQueryKey
} {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {}
  const queryKey = queryOptions?.queryKey ?? getPostsInfiniteQueryKey(params)
  const query = useInfiniteQuery({
    ...(getPostsInfiniteQueryOptions(params, clientOptions) as InfiniteQueryObserverOptions),
    queryKey,
    ...(queryOptions as unknown as InfiniteQueryObserverOptions),
  }) as UseInfiniteQueryResult<TData, GetPosts['error']> & {
    queryKey: TQueryKey
  }
  query.queryKey = queryKey as TQueryKey
  return query
}

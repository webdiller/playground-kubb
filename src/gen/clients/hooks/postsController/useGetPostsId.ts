import client from '../../../../shared/kubb-clients/axios-client'
import { useQuery, queryOptions, useInfiniteQuery, infiniteQueryOptions } from '@tanstack/react-query'
import type { GetPostsIdQueryResponse, GetPostsIdPathParams, GetPostsId404 } from '../../../types/postsController/GetPostsId'
import type { QueryObserverOptions, UseQueryResult, QueryKey, InfiniteQueryObserverOptions, UseInfiniteQueryResult, InfiniteData } from '@tanstack/react-query'

type GetPostsIdClient = typeof client<GetPostsIdQueryResponse, GetPostsId404, never>
type GetPostsId = {
  data: GetPostsIdQueryResponse
  error: GetPostsId404
  request: never
  pathParams: GetPostsIdPathParams
  queryParams: never
  headerParams: never
  response: Awaited<ReturnType<GetPostsIdClient>>
  client: {
    parameters: Partial<Parameters<GetPostsIdClient>[0]>
    return: Awaited<ReturnType<GetPostsIdClient>>
  }
}
export const getPostsIdQueryKey = (id: GetPostsIdPathParams['id']) => [{ url: '/posts/:id', params: { id: id } }] as const
export type GetPostsIdQueryKey = ReturnType<typeof getPostsIdQueryKey>
export function getPostsIdQueryOptions(id: GetPostsIdPathParams['id'], options: GetPostsId['client']['parameters'] = {}) {
  const queryKey = getPostsIdQueryKey(id)
  return queryOptions({
    queryKey,
    queryFn: async () => {
      const res = await client<GetPostsId['data'], GetPostsId['error']>({
        method: 'get',
        url: `/posts/${id}`,
        ...options,
      })
      return res
    },
  })
}
/**
 * @summary Get specific post
 * @link /posts/:id */
export function useGetPostsId<TData = GetPostsId['response'], TQueryData = GetPostsId['response'], TQueryKey extends QueryKey = GetPostsIdQueryKey>(
  id: GetPostsIdPathParams['id'],
  options: {
    query?: Partial<QueryObserverOptions<GetPostsId['response'], GetPostsId['error'], TData, TQueryData, TQueryKey>>
    client?: GetPostsId['client']['parameters']
  } = {},
): UseQueryResult<TData, GetPostsId['error']> & {
  queryKey: TQueryKey
} {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {}
  const queryKey = queryOptions?.queryKey ?? getPostsIdQueryKey(id)
  const query = useQuery({
    ...(getPostsIdQueryOptions(id, clientOptions) as QueryObserverOptions),
    queryKey,
    ...(queryOptions as unknown as QueryObserverOptions),
  }) as UseQueryResult<TData, GetPostsId['error']> & {
    queryKey: TQueryKey
  }
  query.queryKey = queryKey as TQueryKey
  return query
}
export const getPostsIdInfiniteQueryKey = (id: GetPostsIdPathParams['id']) => [{ url: '/posts/:id', params: { id: id } }] as const
export type GetPostsIdInfiniteQueryKey = ReturnType<typeof getPostsIdInfiniteQueryKey>
export function getPostsIdInfiniteQueryOptions(id: GetPostsIdPathParams['id'], options: GetPostsId['client']['parameters'] = {}) {
  const queryKey = getPostsIdInfiniteQueryKey(id)
  return infiniteQueryOptions({
    queryKey,
    queryFn: async ({ pageParam }) => {
      const res = await client<GetPostsId['data'], GetPostsId['error']>({
        method: 'get',
        url: `/posts/${id}`,
        ...options,
      })
      return res
    },
    initialPageParam: 0,
    getNextPageParam: (lastPage, allPages, lastPageParam) => (Array.isArray(lastPage.data) && lastPage.data.length === 0 ? undefined : lastPageParam + 1),
    getPreviousPageParam: (firstPage, allPages, firstPageParam) => (firstPageParam <= 1 ? undefined : firstPageParam - 1),
  })
}
/**
 * @summary Get specific post
 * @link /posts/:id */
export function useGetPostsIdInfinite<
  TData = InfiniteData<GetPostsId['response']>,
  TQueryData = GetPostsId['response'],
  TQueryKey extends QueryKey = GetPostsIdInfiniteQueryKey,
>(
  id: GetPostsIdPathParams['id'],
  options: {
    query?: Partial<InfiniteQueryObserverOptions<GetPostsId['response'], GetPostsId['error'], TData, TQueryData, TQueryKey>>
    client?: GetPostsId['client']['parameters']
  } = {},
): UseInfiniteQueryResult<TData, GetPostsId['error']> & {
  queryKey: TQueryKey
} {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {}
  const queryKey = queryOptions?.queryKey ?? getPostsIdInfiniteQueryKey(id)
  const query = useInfiniteQuery({
    ...(getPostsIdInfiniteQueryOptions(id, clientOptions) as InfiniteQueryObserverOptions),
    queryKey,
    ...(queryOptions as unknown as InfiniteQueryObserverOptions),
  }) as UseInfiniteQueryResult<TData, GetPostsId['error']> & {
    queryKey: TQueryKey
  }
  query.queryKey = queryKey as TQueryKey
  return query
}

import client from '../../../../shared/kubb-clients/axios-client'
import { useQuery, queryOptions, useInfiniteQuery, infiniteQueryOptions } from '@tanstack/react-query'
import type { GetCommentQueryResponse, GetCommentPathParams, GetComment404 } from '../../../types/commentsController/GetComment'
import type { QueryObserverOptions, UseQueryResult, QueryKey, InfiniteQueryObserverOptions, UseInfiniteQueryResult, InfiniteData } from '@tanstack/react-query'

type GetCommentClient = typeof client<GetCommentQueryResponse, GetComment404, never>
type GetComment = {
  data: GetCommentQueryResponse
  error: GetComment404
  request: never
  pathParams: GetCommentPathParams
  queryParams: never
  headerParams: never
  response: Awaited<ReturnType<GetCommentClient>>
  client: {
    parameters: Partial<Parameters<GetCommentClient>[0]>
    return: Awaited<ReturnType<GetCommentClient>>
  }
}
export const getCommentQueryKey = (id: GetCommentPathParams['id']) => [{ url: '/comments/:id', params: { id: id } }] as const
export type GetCommentQueryKey = ReturnType<typeof getCommentQueryKey>
export function getCommentQueryOptions(id: GetCommentPathParams['id'], options: GetComment['client']['parameters'] = {}) {
  const queryKey = getCommentQueryKey(id)
  return queryOptions({
    queryKey,
    queryFn: async () => {
      const res = await client<GetComment['data'], GetComment['error']>({
        method: 'get',
        url: `/comments/${id}`,
        ...options,
      })
      return res
    },
  })
}
/**
 * @summary Get specific comment
 * @link /comments/:id */
export function useGetComment<TData = GetComment['response'], TQueryData = GetComment['response'], TQueryKey extends QueryKey = GetCommentQueryKey>(
  id: GetCommentPathParams['id'],
  options: {
    query?: Partial<QueryObserverOptions<GetComment['response'], GetComment['error'], TData, TQueryData, TQueryKey>>
    client?: GetComment['client']['parameters']
  } = {},
): UseQueryResult<TData, GetComment['error']> & {
  queryKey: TQueryKey
} {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {}
  const queryKey = queryOptions?.queryKey ?? getCommentQueryKey(id)
  const query = useQuery({
    ...(getCommentQueryOptions(id, clientOptions) as QueryObserverOptions),
    queryKey,
    ...(queryOptions as unknown as QueryObserverOptions),
  }) as UseQueryResult<TData, GetComment['error']> & {
    queryKey: TQueryKey
  }
  query.queryKey = queryKey as TQueryKey
  return query
}
export const getCommentInfiniteQueryKey = (id: GetCommentPathParams['id']) => [{ url: '/comments/:id', params: { id: id } }] as const
export type GetCommentInfiniteQueryKey = ReturnType<typeof getCommentInfiniteQueryKey>
export function getCommentInfiniteQueryOptions(id: GetCommentPathParams['id'], options: GetComment['client']['parameters'] = {}) {
  const queryKey = getCommentInfiniteQueryKey(id)
  return infiniteQueryOptions({
    queryKey,
    queryFn: async ({ pageParam }) => {
      const res = await client<GetComment['data'], GetComment['error']>({
        method: 'get',
        url: `/comments/${id}`,
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
 * @summary Get specific comment
 * @link /comments/:id */
export function useGetCommentInfinite<
  TData = InfiniteData<GetComment['response']>,
  TQueryData = GetComment['response'],
  TQueryKey extends QueryKey = GetCommentInfiniteQueryKey,
>(
  id: GetCommentPathParams['id'],
  options: {
    query?: Partial<InfiniteQueryObserverOptions<GetComment['response'], GetComment['error'], TData, TQueryData, TQueryKey>>
    client?: GetComment['client']['parameters']
  } = {},
): UseInfiniteQueryResult<TData, GetComment['error']> & {
  queryKey: TQueryKey
} {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {}
  const queryKey = queryOptions?.queryKey ?? getCommentInfiniteQueryKey(id)
  const query = useInfiniteQuery({
    ...(getCommentInfiniteQueryOptions(id, clientOptions) as InfiniteQueryObserverOptions),
    queryKey,
    ...(queryOptions as unknown as InfiniteQueryObserverOptions),
  }) as UseInfiniteQueryResult<TData, GetComment['error']> & {
    queryKey: TQueryKey
  }
  query.queryKey = queryKey as TQueryKey
  return query
}

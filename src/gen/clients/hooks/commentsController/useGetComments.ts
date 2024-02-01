import client from '../../../../shared/kubb-clients/axios-client'
import { useQuery, queryOptions, useInfiniteQuery, infiniteQueryOptions } from '@tanstack/react-query'
import type { GetCommentsQueryResponse, GetCommentsQueryParams } from '../../../types/commentsController/GetComments'
import type { QueryObserverOptions, UseQueryResult, QueryKey, InfiniteQueryObserverOptions, UseInfiniteQueryResult, InfiniteData } from '@tanstack/react-query'

type GetCommentsClient = typeof client<GetCommentsQueryResponse, never, never>
type GetComments = {
  data: GetCommentsQueryResponse
  error: never
  request: never
  pathParams: never
  queryParams: GetCommentsQueryParams
  headerParams: never
  response: Awaited<ReturnType<GetCommentsClient>>
  client: {
    parameters: Partial<Parameters<GetCommentsClient>[0]>
    return: Awaited<ReturnType<GetCommentsClient>>
  }
}
export const getCommentsQueryKey = (params?: GetComments['queryParams']) => [{ url: '/comments' }, ...(params ? [params] : [])] as const
export type GetCommentsQueryKey = ReturnType<typeof getCommentsQueryKey>
export function getCommentsQueryOptions(params?: GetComments['queryParams'], options: GetComments['client']['parameters'] = {}) {
  const queryKey = getCommentsQueryKey(params)
  return queryOptions({
    queryKey,
    queryFn: async () => {
      const res = await client<GetComments['data'], GetComments['error']>({
        method: 'get',
        url: `/comments`,
        params,
        ...options,
      })
      return res
    },
  })
}
/**
 * @summary Get all available comments
 * @link /comments */
export function useGetComments<TData = GetComments['response'], TQueryData = GetComments['response'], TQueryKey extends QueryKey = GetCommentsQueryKey>(
  params?: GetComments['queryParams'],
  options: {
    query?: Partial<QueryObserverOptions<GetComments['response'], GetComments['error'], TData, TQueryData, TQueryKey>>
    client?: GetComments['client']['parameters']
  } = {},
): UseQueryResult<TData, GetComments['error']> & {
  queryKey: TQueryKey
} {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {}
  const queryKey = queryOptions?.queryKey ?? getCommentsQueryKey(params)
  const query = useQuery({
    ...(getCommentsQueryOptions(params, clientOptions) as QueryObserverOptions),
    queryKey,
    ...(queryOptions as unknown as QueryObserverOptions),
  }) as UseQueryResult<TData, GetComments['error']> & {
    queryKey: TQueryKey
  }
  query.queryKey = queryKey as TQueryKey
  return query
}
export const getCommentsInfiniteQueryKey = (params?: GetComments['queryParams']) => [{ url: '/comments' }, ...(params ? [params] : [])] as const
export type GetCommentsInfiniteQueryKey = ReturnType<typeof getCommentsInfiniteQueryKey>
export function getCommentsInfiniteQueryOptions(params?: GetComments['queryParams'], options: GetComments['client']['parameters'] = {}) {
  const queryKey = getCommentsInfiniteQueryKey(params)
  return infiniteQueryOptions({
    queryKey,
    queryFn: async ({ pageParam }) => {
      const res = await client<GetComments['data'], GetComments['error']>({
        method: 'get',
        url: `/comments`,
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
 * @summary Get all available comments
 * @link /comments */
export function useGetCommentsInfinite<
  TData = InfiniteData<GetComments['response']>,
  TQueryData = GetComments['response'],
  TQueryKey extends QueryKey = GetCommentsInfiniteQueryKey,
>(
  params?: GetComments['queryParams'],
  options: {
    query?: Partial<InfiniteQueryObserverOptions<GetComments['response'], GetComments['error'], TData, TQueryData, TQueryKey>>
    client?: GetComments['client']['parameters']
  } = {},
): UseInfiniteQueryResult<TData, GetComments['error']> & {
  queryKey: TQueryKey
} {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {}
  const queryKey = queryOptions?.queryKey ?? getCommentsInfiniteQueryKey(params)
  const query = useInfiniteQuery({
    ...(getCommentsInfiniteQueryOptions(params, clientOptions) as InfiniteQueryObserverOptions),
    queryKey,
    ...(queryOptions as unknown as InfiniteQueryObserverOptions),
  }) as UseInfiniteQueryResult<TData, GetComments['error']> & {
    queryKey: TQueryKey
  }
  query.queryKey = queryKey as TQueryKey
  return query
}

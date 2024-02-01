import client from '../../../../shared/kubb-clients/axios-client'
import { useQuery, queryOptions, useInfiniteQuery, infiniteQueryOptions } from '@tanstack/react-query'
import type { GetAlbumsIdQueryResponse, GetAlbumsIdPathParams, GetAlbumsId404 } from '../../../types/albumsController/GetAlbumsId'
import type { QueryObserverOptions, UseQueryResult, QueryKey, InfiniteQueryObserverOptions, UseInfiniteQueryResult, InfiniteData } from '@tanstack/react-query'

type GetAlbumsIdClient = typeof client<GetAlbumsIdQueryResponse, GetAlbumsId404, never>
type GetAlbumsId = {
  data: GetAlbumsIdQueryResponse
  error: GetAlbumsId404
  request: never
  pathParams: GetAlbumsIdPathParams
  queryParams: never
  headerParams: never
  response: Awaited<ReturnType<GetAlbumsIdClient>>
  client: {
    parameters: Partial<Parameters<GetAlbumsIdClient>[0]>
    return: Awaited<ReturnType<GetAlbumsIdClient>>
  }
}
export const getAlbumsIdQueryKey = (id: GetAlbumsIdPathParams['id']) => [{ url: '/albums/:id', params: { id: id } }] as const
export type GetAlbumsIdQueryKey = ReturnType<typeof getAlbumsIdQueryKey>
export function getAlbumsIdQueryOptions(id: GetAlbumsIdPathParams['id'], options: GetAlbumsId['client']['parameters'] = {}) {
  const queryKey = getAlbumsIdQueryKey(id)
  return queryOptions({
    queryKey,
    queryFn: async () => {
      const res = await client<GetAlbumsId['data'], GetAlbumsId['error']>({
        method: 'get',
        url: `/albums/${id}`,
        ...options,
      })
      return res
    },
  })
}
/**
 * @summary Get specific album
 * @link /albums/:id */
export function useGetAlbumsId<TData = GetAlbumsId['response'], TQueryData = GetAlbumsId['response'], TQueryKey extends QueryKey = GetAlbumsIdQueryKey>(
  id: GetAlbumsIdPathParams['id'],
  options: {
    query?: Partial<QueryObserverOptions<GetAlbumsId['response'], GetAlbumsId['error'], TData, TQueryData, TQueryKey>>
    client?: GetAlbumsId['client']['parameters']
  } = {},
): UseQueryResult<TData, GetAlbumsId['error']> & {
  queryKey: TQueryKey
} {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {}
  const queryKey = queryOptions?.queryKey ?? getAlbumsIdQueryKey(id)
  const query = useQuery({
    ...(getAlbumsIdQueryOptions(id, clientOptions) as QueryObserverOptions),
    queryKey,
    ...(queryOptions as unknown as QueryObserverOptions),
  }) as UseQueryResult<TData, GetAlbumsId['error']> & {
    queryKey: TQueryKey
  }
  query.queryKey = queryKey as TQueryKey
  return query
}
export const getAlbumsIdInfiniteQueryKey = (id: GetAlbumsIdPathParams['id']) => [{ url: '/albums/:id', params: { id: id } }] as const
export type GetAlbumsIdInfiniteQueryKey = ReturnType<typeof getAlbumsIdInfiniteQueryKey>
export function getAlbumsIdInfiniteQueryOptions(id: GetAlbumsIdPathParams['id'], options: GetAlbumsId['client']['parameters'] = {}) {
  const queryKey = getAlbumsIdInfiniteQueryKey(id)
  return infiniteQueryOptions({
    queryKey,
    queryFn: async ({ pageParam }) => {
      const res = await client<GetAlbumsId['data'], GetAlbumsId['error']>({
        method: 'get',
        url: `/albums/${id}`,
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
 * @summary Get specific album
 * @link /albums/:id */
export function useGetAlbumsIdInfinite<
  TData = InfiniteData<GetAlbumsId['response']>,
  TQueryData = GetAlbumsId['response'],
  TQueryKey extends QueryKey = GetAlbumsIdInfiniteQueryKey,
>(
  id: GetAlbumsIdPathParams['id'],
  options: {
    query?: Partial<InfiniteQueryObserverOptions<GetAlbumsId['response'], GetAlbumsId['error'], TData, TQueryData, TQueryKey>>
    client?: GetAlbumsId['client']['parameters']
  } = {},
): UseInfiniteQueryResult<TData, GetAlbumsId['error']> & {
  queryKey: TQueryKey
} {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {}
  const queryKey = queryOptions?.queryKey ?? getAlbumsIdInfiniteQueryKey(id)
  const query = useInfiniteQuery({
    ...(getAlbumsIdInfiniteQueryOptions(id, clientOptions) as InfiniteQueryObserverOptions),
    queryKey,
    ...(queryOptions as unknown as InfiniteQueryObserverOptions),
  }) as UseInfiniteQueryResult<TData, GetAlbumsId['error']> & {
    queryKey: TQueryKey
  }
  query.queryKey = queryKey as TQueryKey
  return query
}

import client from '../../../../shared/kubb-clients/axios-client'
import { useQuery, queryOptions, useInfiniteQuery, infiniteQueryOptions } from '@tanstack/react-query'
import type { GetAlbumsQueryResponse, GetAlbumsQueryParams } from '../../../types/albumsController/GetAlbums'
import type { QueryObserverOptions, UseQueryResult, QueryKey, InfiniteQueryObserverOptions, UseInfiniteQueryResult, InfiniteData } from '@tanstack/react-query'

type GetAlbumsClient = typeof client<GetAlbumsQueryResponse, never, never>
type GetAlbums = {
  data: GetAlbumsQueryResponse
  error: never
  request: never
  pathParams: never
  queryParams: GetAlbumsQueryParams
  headerParams: never
  response: Awaited<ReturnType<GetAlbumsClient>>
  client: {
    parameters: Partial<Parameters<GetAlbumsClient>[0]>
    return: Awaited<ReturnType<GetAlbumsClient>>
  }
}
export const getAlbumsQueryKey = (params?: GetAlbums['queryParams']) => [{ url: '/albums' }, ...(params ? [params] : [])] as const
export type GetAlbumsQueryKey = ReturnType<typeof getAlbumsQueryKey>
export function getAlbumsQueryOptions(params?: GetAlbums['queryParams'], options: GetAlbums['client']['parameters'] = {}) {
  const queryKey = getAlbumsQueryKey(params)
  return queryOptions({
    queryKey,
    queryFn: async () => {
      const res = await client<GetAlbums['data'], GetAlbums['error']>({
        method: 'get',
        url: `/albums`,
        params,
        ...options,
      })
      return res
    },
  })
}
/**
 * @summary Get all available albums
 * @link /albums */
export function useGetAlbums<TData = GetAlbums['response'], TQueryData = GetAlbums['response'], TQueryKey extends QueryKey = GetAlbumsQueryKey>(
  params?: GetAlbums['queryParams'],
  options: {
    query?: Partial<QueryObserverOptions<GetAlbums['response'], GetAlbums['error'], TData, TQueryData, TQueryKey>>
    client?: GetAlbums['client']['parameters']
  } = {},
): UseQueryResult<TData, GetAlbums['error']> & {
  queryKey: TQueryKey
} {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {}
  const queryKey = queryOptions?.queryKey ?? getAlbumsQueryKey(params)
  const query = useQuery({
    ...(getAlbumsQueryOptions(params, clientOptions) as QueryObserverOptions),
    queryKey,
    ...(queryOptions as unknown as QueryObserverOptions),
  }) as UseQueryResult<TData, GetAlbums['error']> & {
    queryKey: TQueryKey
  }
  query.queryKey = queryKey as TQueryKey
  return query
}
export const getAlbumsInfiniteQueryKey = (params?: GetAlbums['queryParams']) => [{ url: '/albums' }, ...(params ? [params] : [])] as const
export type GetAlbumsInfiniteQueryKey = ReturnType<typeof getAlbumsInfiniteQueryKey>
export function getAlbumsInfiniteQueryOptions(params?: GetAlbums['queryParams'], options: GetAlbums['client']['parameters'] = {}) {
  const queryKey = getAlbumsInfiniteQueryKey(params)
  return infiniteQueryOptions({
    queryKey,
    queryFn: async ({ pageParam }) => {
      const res = await client<GetAlbums['data'], GetAlbums['error']>({
        method: 'get',
        url: `/albums`,
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
 * @summary Get all available albums
 * @link /albums */
export function useGetAlbumsInfinite<
  TData = InfiniteData<GetAlbums['response']>,
  TQueryData = GetAlbums['response'],
  TQueryKey extends QueryKey = GetAlbumsInfiniteQueryKey,
>(
  params?: GetAlbums['queryParams'],
  options: {
    query?: Partial<InfiniteQueryObserverOptions<GetAlbums['response'], GetAlbums['error'], TData, TQueryData, TQueryKey>>
    client?: GetAlbums['client']['parameters']
  } = {},
): UseInfiniteQueryResult<TData, GetAlbums['error']> & {
  queryKey: TQueryKey
} {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {}
  const queryKey = queryOptions?.queryKey ?? getAlbumsInfiniteQueryKey(params)
  const query = useInfiniteQuery({
    ...(getAlbumsInfiniteQueryOptions(params, clientOptions) as InfiniteQueryObserverOptions),
    queryKey,
    ...(queryOptions as unknown as InfiniteQueryObserverOptions),
  }) as UseInfiniteQueryResult<TData, GetAlbums['error']> & {
    queryKey: TQueryKey
  }
  query.queryKey = queryKey as TQueryKey
  return query
}

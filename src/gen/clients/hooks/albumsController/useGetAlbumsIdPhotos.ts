import client from '../../../../shared/kubb-clients/axios-client'
import { useQuery, queryOptions, useInfiniteQuery, infiniteQueryOptions } from '@tanstack/react-query'
import type { GetAlbumsIdPhotosQueryResponse, GetAlbumsIdPhotosPathParams, GetAlbumsIdPhotos404 } from '../../../types/albumsController/GetAlbumsIdPhotos'
import type { QueryObserverOptions, UseQueryResult, QueryKey, InfiniteQueryObserverOptions, UseInfiniteQueryResult, InfiniteData } from '@tanstack/react-query'

type GetAlbumsIdPhotosClient = typeof client<GetAlbumsIdPhotosQueryResponse, GetAlbumsIdPhotos404, never>
type GetAlbumsIdPhotos = {
  data: GetAlbumsIdPhotosQueryResponse
  error: GetAlbumsIdPhotos404
  request: never
  pathParams: GetAlbumsIdPhotosPathParams
  queryParams: never
  headerParams: never
  response: Awaited<ReturnType<GetAlbumsIdPhotosClient>>
  client: {
    parameters: Partial<Parameters<GetAlbumsIdPhotosClient>[0]>
    return: Awaited<ReturnType<GetAlbumsIdPhotosClient>>
  }
}
export const getAlbumsIdPhotosQueryKey = (id: GetAlbumsIdPhotosPathParams['id']) => [{ url: '/albums/:id/photos', params: { id: id } }] as const
export type GetAlbumsIdPhotosQueryKey = ReturnType<typeof getAlbumsIdPhotosQueryKey>
export function getAlbumsIdPhotosQueryOptions(id: GetAlbumsIdPhotosPathParams['id'], options: GetAlbumsIdPhotos['client']['parameters'] = {}) {
  const queryKey = getAlbumsIdPhotosQueryKey(id)
  return queryOptions({
    queryKey,
    queryFn: async () => {
      const res = await client<GetAlbumsIdPhotos['data'], GetAlbumsIdPhotos['error']>({
        method: 'get',
        url: `/albums/${id}/photos`,
        ...options,
      })
      return res
    },
  })
}
/**
 * @summary Get photos for a specific album
 * @link /albums/:id/photos */
export function useGetAlbumsIdPhotos<
  TData = GetAlbumsIdPhotos['response'],
  TQueryData = GetAlbumsIdPhotos['response'],
  TQueryKey extends QueryKey = GetAlbumsIdPhotosQueryKey,
>(
  id: GetAlbumsIdPhotosPathParams['id'],
  options: {
    query?: Partial<QueryObserverOptions<GetAlbumsIdPhotos['response'], GetAlbumsIdPhotos['error'], TData, TQueryData, TQueryKey>>
    client?: GetAlbumsIdPhotos['client']['parameters']
  } = {},
): UseQueryResult<TData, GetAlbumsIdPhotos['error']> & {
  queryKey: TQueryKey
} {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {}
  const queryKey = queryOptions?.queryKey ?? getAlbumsIdPhotosQueryKey(id)
  const query = useQuery({
    ...(getAlbumsIdPhotosQueryOptions(id, clientOptions) as QueryObserverOptions),
    queryKey,
    ...(queryOptions as unknown as QueryObserverOptions),
  }) as UseQueryResult<TData, GetAlbumsIdPhotos['error']> & {
    queryKey: TQueryKey
  }
  query.queryKey = queryKey as TQueryKey
  return query
}
export const getAlbumsIdPhotosInfiniteQueryKey = (id: GetAlbumsIdPhotosPathParams['id']) => [{ url: '/albums/:id/photos', params: { id: id } }] as const
export type GetAlbumsIdPhotosInfiniteQueryKey = ReturnType<typeof getAlbumsIdPhotosInfiniteQueryKey>
export function getAlbumsIdPhotosInfiniteQueryOptions(id: GetAlbumsIdPhotosPathParams['id'], options: GetAlbumsIdPhotos['client']['parameters'] = {}) {
  const queryKey = getAlbumsIdPhotosInfiniteQueryKey(id)
  return infiniteQueryOptions({
    queryKey,
    queryFn: async ({ pageParam }) => {
      const res = await client<GetAlbumsIdPhotos['data'], GetAlbumsIdPhotos['error']>({
        method: 'get',
        url: `/albums/${id}/photos`,
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
 * @summary Get photos for a specific album
 * @link /albums/:id/photos */
export function useGetAlbumsIdPhotosInfinite<
  TData = InfiniteData<GetAlbumsIdPhotos['response']>,
  TQueryData = GetAlbumsIdPhotos['response'],
  TQueryKey extends QueryKey = GetAlbumsIdPhotosInfiniteQueryKey,
>(
  id: GetAlbumsIdPhotosPathParams['id'],
  options: {
    query?: Partial<InfiniteQueryObserverOptions<GetAlbumsIdPhotos['response'], GetAlbumsIdPhotos['error'], TData, TQueryData, TQueryKey>>
    client?: GetAlbumsIdPhotos['client']['parameters']
  } = {},
): UseInfiniteQueryResult<TData, GetAlbumsIdPhotos['error']> & {
  queryKey: TQueryKey
} {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {}
  const queryKey = queryOptions?.queryKey ?? getAlbumsIdPhotosInfiniteQueryKey(id)
  const query = useInfiniteQuery({
    ...(getAlbumsIdPhotosInfiniteQueryOptions(id, clientOptions) as InfiniteQueryObserverOptions),
    queryKey,
    ...(queryOptions as unknown as InfiniteQueryObserverOptions),
  }) as UseInfiniteQueryResult<TData, GetAlbumsIdPhotos['error']> & {
    queryKey: TQueryKey
  }
  query.queryKey = queryKey as TQueryKey
  return query
}

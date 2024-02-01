import client from '../../../../shared/kubb-clients/axios-client'
import { useQuery, queryOptions, useInfiniteQuery, infiniteQueryOptions } from '@tanstack/react-query'
import type { GetPhotosQueryResponse, GetPhotosQueryParams } from '../../../types/photosController/GetPhotos'
import type { QueryObserverOptions, UseQueryResult, QueryKey, InfiniteQueryObserverOptions, UseInfiniteQueryResult, InfiniteData } from '@tanstack/react-query'

type GetPhotosClient = typeof client<GetPhotosQueryResponse, never, never>
type GetPhotos = {
  data: GetPhotosQueryResponse
  error: never
  request: never
  pathParams: never
  queryParams: GetPhotosQueryParams
  headerParams: never
  response: Awaited<ReturnType<GetPhotosClient>>
  client: {
    parameters: Partial<Parameters<GetPhotosClient>[0]>
    return: Awaited<ReturnType<GetPhotosClient>>
  }
}
export const getPhotosQueryKey = (params?: GetPhotos['queryParams']) => [{ url: '/photos' }, ...(params ? [params] : [])] as const
export type GetPhotosQueryKey = ReturnType<typeof getPhotosQueryKey>
export function getPhotosQueryOptions(params?: GetPhotos['queryParams'], options: GetPhotos['client']['parameters'] = {}) {
  const queryKey = getPhotosQueryKey(params)
  return queryOptions({
    queryKey,
    queryFn: async () => {
      const res = await client<GetPhotos['data'], GetPhotos['error']>({
        method: 'get',
        url: `/photos`,
        params,
        ...options,
      })
      return res
    },
  })
}
/**
 * @summary Get all available photos
 * @link /photos */
export function useGetPhotos<TData = GetPhotos['response'], TQueryData = GetPhotos['response'], TQueryKey extends QueryKey = GetPhotosQueryKey>(
  params?: GetPhotos['queryParams'],
  options: {
    query?: Partial<QueryObserverOptions<GetPhotos['response'], GetPhotos['error'], TData, TQueryData, TQueryKey>>
    client?: GetPhotos['client']['parameters']
  } = {},
): UseQueryResult<TData, GetPhotos['error']> & {
  queryKey: TQueryKey
} {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {}
  const queryKey = queryOptions?.queryKey ?? getPhotosQueryKey(params)
  const query = useQuery({
    ...(getPhotosQueryOptions(params, clientOptions) as QueryObserverOptions),
    queryKey,
    ...(queryOptions as unknown as QueryObserverOptions),
  }) as UseQueryResult<TData, GetPhotos['error']> & {
    queryKey: TQueryKey
  }
  query.queryKey = queryKey as TQueryKey
  return query
}
export const getPhotosInfiniteQueryKey = (params?: GetPhotos['queryParams']) => [{ url: '/photos' }, ...(params ? [params] : [])] as const
export type GetPhotosInfiniteQueryKey = ReturnType<typeof getPhotosInfiniteQueryKey>
export function getPhotosInfiniteQueryOptions(params?: GetPhotos['queryParams'], options: GetPhotos['client']['parameters'] = {}) {
  const queryKey = getPhotosInfiniteQueryKey(params)
  return infiniteQueryOptions({
    queryKey,
    queryFn: async ({ pageParam }) => {
      const res = await client<GetPhotos['data'], GetPhotos['error']>({
        method: 'get',
        url: `/photos`,
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
 * @summary Get all available photos
 * @link /photos */
export function useGetPhotosInfinite<
  TData = InfiniteData<GetPhotos['response']>,
  TQueryData = GetPhotos['response'],
  TQueryKey extends QueryKey = GetPhotosInfiniteQueryKey,
>(
  params?: GetPhotos['queryParams'],
  options: {
    query?: Partial<InfiniteQueryObserverOptions<GetPhotos['response'], GetPhotos['error'], TData, TQueryData, TQueryKey>>
    client?: GetPhotos['client']['parameters']
  } = {},
): UseInfiniteQueryResult<TData, GetPhotos['error']> & {
  queryKey: TQueryKey
} {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {}
  const queryKey = queryOptions?.queryKey ?? getPhotosInfiniteQueryKey(params)
  const query = useInfiniteQuery({
    ...(getPhotosInfiniteQueryOptions(params, clientOptions) as InfiniteQueryObserverOptions),
    queryKey,
    ...(queryOptions as unknown as InfiniteQueryObserverOptions),
  }) as UseInfiniteQueryResult<TData, GetPhotos['error']> & {
    queryKey: TQueryKey
  }
  query.queryKey = queryKey as TQueryKey
  return query
}

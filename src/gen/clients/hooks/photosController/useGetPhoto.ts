import client from '../../../../shared/kubb-clients/axios-client'
import { useQuery, queryOptions, useInfiniteQuery, infiniteQueryOptions } from '@tanstack/react-query'
import type { GetPhotoQueryResponse, GetPhotoPathParams, GetPhoto404 } from '../../../types/photosController/GetPhoto'
import type { QueryObserverOptions, UseQueryResult, QueryKey, InfiniteQueryObserverOptions, UseInfiniteQueryResult, InfiniteData } from '@tanstack/react-query'

type GetPhotoClient = typeof client<GetPhotoQueryResponse, GetPhoto404, never>
type GetPhoto = {
  data: GetPhotoQueryResponse
  error: GetPhoto404
  request: never
  pathParams: GetPhotoPathParams
  queryParams: never
  headerParams: never
  response: Awaited<ReturnType<GetPhotoClient>>
  client: {
    parameters: Partial<Parameters<GetPhotoClient>[0]>
    return: Awaited<ReturnType<GetPhotoClient>>
  }
}
export const getPhotoQueryKey = (id: GetPhotoPathParams['id']) => [{ url: '/photos/:id', params: { id: id } }] as const
export type GetPhotoQueryKey = ReturnType<typeof getPhotoQueryKey>
export function getPhotoQueryOptions(id: GetPhotoPathParams['id'], options: GetPhoto['client']['parameters'] = {}) {
  const queryKey = getPhotoQueryKey(id)
  return queryOptions({
    queryKey,
    queryFn: async () => {
      const res = await client<GetPhoto['data'], GetPhoto['error']>({
        method: 'get',
        url: `/photos/${id}`,
        ...options,
      })
      return res
    },
  })
}
/**
 * @summary Get specific photo
 * @link /photos/:id */
export function useGetPhoto<TData = GetPhoto['response'], TQueryData = GetPhoto['response'], TQueryKey extends QueryKey = GetPhotoQueryKey>(
  id: GetPhotoPathParams['id'],
  options: {
    query?: Partial<QueryObserverOptions<GetPhoto['response'], GetPhoto['error'], TData, TQueryData, TQueryKey>>
    client?: GetPhoto['client']['parameters']
  } = {},
): UseQueryResult<TData, GetPhoto['error']> & {
  queryKey: TQueryKey
} {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {}
  const queryKey = queryOptions?.queryKey ?? getPhotoQueryKey(id)
  const query = useQuery({
    ...(getPhotoQueryOptions(id, clientOptions) as QueryObserverOptions),
    queryKey,
    ...(queryOptions as unknown as QueryObserverOptions),
  }) as UseQueryResult<TData, GetPhoto['error']> & {
    queryKey: TQueryKey
  }
  query.queryKey = queryKey as TQueryKey
  return query
}
export const getPhotoInfiniteQueryKey = (id: GetPhotoPathParams['id']) => [{ url: '/photos/:id', params: { id: id } }] as const
export type GetPhotoInfiniteQueryKey = ReturnType<typeof getPhotoInfiniteQueryKey>
export function getPhotoInfiniteQueryOptions(id: GetPhotoPathParams['id'], options: GetPhoto['client']['parameters'] = {}) {
  const queryKey = getPhotoInfiniteQueryKey(id)
  return infiniteQueryOptions({
    queryKey,
    queryFn: async ({ pageParam }) => {
      const res = await client<GetPhoto['data'], GetPhoto['error']>({
        method: 'get',
        url: `/photos/${id}`,
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
 * @summary Get specific photo
 * @link /photos/:id */
export function useGetPhotoInfinite<
  TData = InfiniteData<GetPhoto['response']>,
  TQueryData = GetPhoto['response'],
  TQueryKey extends QueryKey = GetPhotoInfiniteQueryKey,
>(
  id: GetPhotoPathParams['id'],
  options: {
    query?: Partial<InfiniteQueryObserverOptions<GetPhoto['response'], GetPhoto['error'], TData, TQueryData, TQueryKey>>
    client?: GetPhoto['client']['parameters']
  } = {},
): UseInfiniteQueryResult<TData, GetPhoto['error']> & {
  queryKey: TQueryKey
} {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {}
  const queryKey = queryOptions?.queryKey ?? getPhotoInfiniteQueryKey(id)
  const query = useInfiniteQuery({
    ...(getPhotoInfiniteQueryOptions(id, clientOptions) as InfiniteQueryObserverOptions),
    queryKey,
    ...(queryOptions as unknown as InfiniteQueryObserverOptions),
  }) as UseInfiniteQueryResult<TData, GetPhoto['error']> & {
    queryKey: TQueryKey
  }
  query.queryKey = queryKey as TQueryKey
  return query
}

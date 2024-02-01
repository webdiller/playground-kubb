import client from '../../../../shared/kubb-clients/axios-client'
import { useQuery, queryOptions, useInfiniteQuery, infiniteQueryOptions } from '@tanstack/react-query'
import type { GetUserQueryResponse, GetUserPathParams, GetUser404 } from '../../../types/usersController/GetUser'
import type { QueryObserverOptions, UseQueryResult, QueryKey, InfiniteQueryObserverOptions, UseInfiniteQueryResult, InfiniteData } from '@tanstack/react-query'

type GetUserClient = typeof client<GetUserQueryResponse, GetUser404, never>
type GetUser = {
  data: GetUserQueryResponse
  error: GetUser404
  request: never
  pathParams: GetUserPathParams
  queryParams: never
  headerParams: never
  response: Awaited<ReturnType<GetUserClient>>
  client: {
    parameters: Partial<Parameters<GetUserClient>[0]>
    return: Awaited<ReturnType<GetUserClient>>
  }
}
export const getUserQueryKey = (id: GetUserPathParams['id']) => [{ url: '/users/:id', params: { id: id } }] as const
export type GetUserQueryKey = ReturnType<typeof getUserQueryKey>
export function getUserQueryOptions(id: GetUserPathParams['id'], options: GetUser['client']['parameters'] = {}) {
  const queryKey = getUserQueryKey(id)
  return queryOptions({
    queryKey,
    queryFn: async () => {
      const res = await client<GetUser['data'], GetUser['error']>({
        method: 'get',
        url: `/users/${id}`,
        ...options,
      })
      return res
    },
  })
}
/**
 * @summary Get specific user
 * @link /users/:id */
export function useGetUser<TData = GetUser['response'], TQueryData = GetUser['response'], TQueryKey extends QueryKey = GetUserQueryKey>(
  id: GetUserPathParams['id'],
  options: {
    query?: Partial<QueryObserverOptions<GetUser['response'], GetUser['error'], TData, TQueryData, TQueryKey>>
    client?: GetUser['client']['parameters']
  } = {},
): UseQueryResult<TData, GetUser['error']> & {
  queryKey: TQueryKey
} {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {}
  const queryKey = queryOptions?.queryKey ?? getUserQueryKey(id)
  const query = useQuery({
    ...(getUserQueryOptions(id, clientOptions) as QueryObserverOptions),
    queryKey,
    ...(queryOptions as unknown as QueryObserverOptions),
  }) as UseQueryResult<TData, GetUser['error']> & {
    queryKey: TQueryKey
  }
  query.queryKey = queryKey as TQueryKey
  return query
}
export const getUserInfiniteQueryKey = (id: GetUserPathParams['id']) => [{ url: '/users/:id', params: { id: id } }] as const
export type GetUserInfiniteQueryKey = ReturnType<typeof getUserInfiniteQueryKey>
export function getUserInfiniteQueryOptions(id: GetUserPathParams['id'], options: GetUser['client']['parameters'] = {}) {
  const queryKey = getUserInfiniteQueryKey(id)
  return infiniteQueryOptions({
    queryKey,
    queryFn: async ({ pageParam }) => {
      const res = await client<GetUser['data'], GetUser['error']>({
        method: 'get',
        url: `/users/${id}`,
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
 * @summary Get specific user
 * @link /users/:id */
export function useGetUserInfinite<
  TData = InfiniteData<GetUser['response']>,
  TQueryData = GetUser['response'],
  TQueryKey extends QueryKey = GetUserInfiniteQueryKey,
>(
  id: GetUserPathParams['id'],
  options: {
    query?: Partial<InfiniteQueryObserverOptions<GetUser['response'], GetUser['error'], TData, TQueryData, TQueryKey>>
    client?: GetUser['client']['parameters']
  } = {},
): UseInfiniteQueryResult<TData, GetUser['error']> & {
  queryKey: TQueryKey
} {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {}
  const queryKey = queryOptions?.queryKey ?? getUserInfiniteQueryKey(id)
  const query = useInfiniteQuery({
    ...(getUserInfiniteQueryOptions(id, clientOptions) as InfiniteQueryObserverOptions),
    queryKey,
    ...(queryOptions as unknown as InfiniteQueryObserverOptions),
  }) as UseInfiniteQueryResult<TData, GetUser['error']> & {
    queryKey: TQueryKey
  }
  query.queryKey = queryKey as TQueryKey
  return query
}

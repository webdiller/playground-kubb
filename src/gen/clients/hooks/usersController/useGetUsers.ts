import client from '../../../../shared/kubb-clients/axios-client'
import { useQuery, queryOptions, useInfiniteQuery, infiniteQueryOptions } from '@tanstack/react-query'
import type { GetUsersQueryResponse, GetUsersQueryParams } from '../../../types/usersController/GetUsers'
import type { QueryObserverOptions, UseQueryResult, QueryKey, InfiniteQueryObserverOptions, UseInfiniteQueryResult, InfiniteData } from '@tanstack/react-query'

type GetUsersClient = typeof client<GetUsersQueryResponse, never, never>
type GetUsers = {
  data: GetUsersQueryResponse
  error: never
  request: never
  pathParams: never
  queryParams: GetUsersQueryParams
  headerParams: never
  response: Awaited<ReturnType<GetUsersClient>>
  client: {
    parameters: Partial<Parameters<GetUsersClient>[0]>
    return: Awaited<ReturnType<GetUsersClient>>
  }
}
export const getUsersQueryKey = (params?: GetUsers['queryParams']) => [{ url: '/users' }, ...(params ? [params] : [])] as const
export type GetUsersQueryKey = ReturnType<typeof getUsersQueryKey>
export function getUsersQueryOptions(params?: GetUsers['queryParams'], options: GetUsers['client']['parameters'] = {}) {
  const queryKey = getUsersQueryKey(params)
  return queryOptions({
    queryKey,
    queryFn: async () => {
      const res = await client<GetUsers['data'], GetUsers['error']>({
        method: 'get',
        url: `/users`,
        params,
        ...options,
      })
      return res
    },
  })
}
/**
 * @summary Get all available users
 * @link /users */
export function useGetUsers<TData = GetUsers['response'], TQueryData = GetUsers['response'], TQueryKey extends QueryKey = GetUsersQueryKey>(
  params?: GetUsers['queryParams'],
  options: {
    query?: Partial<QueryObserverOptions<GetUsers['response'], GetUsers['error'], TData, TQueryData, TQueryKey>>
    client?: GetUsers['client']['parameters']
  } = {},
): UseQueryResult<TData, GetUsers['error']> & {
  queryKey: TQueryKey
} {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {}
  const queryKey = queryOptions?.queryKey ?? getUsersQueryKey(params)
  const query = useQuery({
    ...(getUsersQueryOptions(params, clientOptions) as QueryObserverOptions),
    queryKey,
    ...(queryOptions as unknown as QueryObserverOptions),
  }) as UseQueryResult<TData, GetUsers['error']> & {
    queryKey: TQueryKey
  }
  query.queryKey = queryKey as TQueryKey
  return query
}
export const getUsersInfiniteQueryKey = (params?: GetUsers['queryParams']) => [{ url: '/users' }, ...(params ? [params] : [])] as const
export type GetUsersInfiniteQueryKey = ReturnType<typeof getUsersInfiniteQueryKey>
export function getUsersInfiniteQueryOptions(params?: GetUsers['queryParams'], options: GetUsers['client']['parameters'] = {}) {
  const queryKey = getUsersInfiniteQueryKey(params)
  return infiniteQueryOptions({
    queryKey,
    queryFn: async ({ pageParam }) => {
      const res = await client<GetUsers['data'], GetUsers['error']>({
        method: 'get',
        url: `/users`,
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
 * @summary Get all available users
 * @link /users */
export function useGetUsersInfinite<
  TData = InfiniteData<GetUsers['response']>,
  TQueryData = GetUsers['response'],
  TQueryKey extends QueryKey = GetUsersInfiniteQueryKey,
>(
  params?: GetUsers['queryParams'],
  options: {
    query?: Partial<InfiniteQueryObserverOptions<GetUsers['response'], GetUsers['error'], TData, TQueryData, TQueryKey>>
    client?: GetUsers['client']['parameters']
  } = {},
): UseInfiniteQueryResult<TData, GetUsers['error']> & {
  queryKey: TQueryKey
} {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {}
  const queryKey = queryOptions?.queryKey ?? getUsersInfiniteQueryKey(params)
  const query = useInfiniteQuery({
    ...(getUsersInfiniteQueryOptions(params, clientOptions) as InfiniteQueryObserverOptions),
    queryKey,
    ...(queryOptions as unknown as InfiniteQueryObserverOptions),
  }) as UseInfiniteQueryResult<TData, GetUsers['error']> & {
    queryKey: TQueryKey
  }
  query.queryKey = queryKey as TQueryKey
  return query
}

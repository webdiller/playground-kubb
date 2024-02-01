import client from '../../../../shared/kubb-clients/axios-client'
import { useQuery, queryOptions, useInfiniteQuery, infiniteQueryOptions } from '@tanstack/react-query'
import type { GetTodosQueryResponse, GetTodosQueryParams } from '../../../types/todosController/GetTodos'
import type { QueryObserverOptions, UseQueryResult, QueryKey, InfiniteQueryObserverOptions, UseInfiniteQueryResult, InfiniteData } from '@tanstack/react-query'

type GetTodosClient = typeof client<GetTodosQueryResponse, never, never>
type GetTodos = {
  data: GetTodosQueryResponse
  error: never
  request: never
  pathParams: never
  queryParams: GetTodosQueryParams
  headerParams: never
  response: Awaited<ReturnType<GetTodosClient>>
  client: {
    parameters: Partial<Parameters<GetTodosClient>[0]>
    return: Awaited<ReturnType<GetTodosClient>>
  }
}
export const getTodosQueryKey = (params?: GetTodos['queryParams']) => [{ url: '/todos' }, ...(params ? [params] : [])] as const
export type GetTodosQueryKey = ReturnType<typeof getTodosQueryKey>
export function getTodosQueryOptions(params?: GetTodos['queryParams'], options: GetTodos['client']['parameters'] = {}) {
  const queryKey = getTodosQueryKey(params)
  return queryOptions({
    queryKey,
    queryFn: async () => {
      const res = await client<GetTodos['data'], GetTodos['error']>({
        method: 'get',
        url: `/todos`,
        params,
        ...options,
      })
      return res
    },
  })
}
/**
 * @summary Get all available todos
 * @link /todos */
export function useGetTodos<TData = GetTodos['response'], TQueryData = GetTodos['response'], TQueryKey extends QueryKey = GetTodosQueryKey>(
  params?: GetTodos['queryParams'],
  options: {
    query?: Partial<QueryObserverOptions<GetTodos['response'], GetTodos['error'], TData, TQueryData, TQueryKey>>
    client?: GetTodos['client']['parameters']
  } = {},
): UseQueryResult<TData, GetTodos['error']> & {
  queryKey: TQueryKey
} {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {}
  const queryKey = queryOptions?.queryKey ?? getTodosQueryKey(params)
  const query = useQuery({
    ...(getTodosQueryOptions(params, clientOptions) as QueryObserverOptions),
    queryKey,
    ...(queryOptions as unknown as QueryObserverOptions),
  }) as UseQueryResult<TData, GetTodos['error']> & {
    queryKey: TQueryKey
  }
  query.queryKey = queryKey as TQueryKey
  return query
}
export const getTodosInfiniteQueryKey = (params?: GetTodos['queryParams']) => [{ url: '/todos' }, ...(params ? [params] : [])] as const
export type GetTodosInfiniteQueryKey = ReturnType<typeof getTodosInfiniteQueryKey>
export function getTodosInfiniteQueryOptions(params?: GetTodos['queryParams'], options: GetTodos['client']['parameters'] = {}) {
  const queryKey = getTodosInfiniteQueryKey(params)
  return infiniteQueryOptions({
    queryKey,
    queryFn: async ({ pageParam }) => {
      const res = await client<GetTodos['data'], GetTodos['error']>({
        method: 'get',
        url: `/todos`,
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
 * @summary Get all available todos
 * @link /todos */
export function useGetTodosInfinite<
  TData = InfiniteData<GetTodos['response']>,
  TQueryData = GetTodos['response'],
  TQueryKey extends QueryKey = GetTodosInfiniteQueryKey,
>(
  params?: GetTodos['queryParams'],
  options: {
    query?: Partial<InfiniteQueryObserverOptions<GetTodos['response'], GetTodos['error'], TData, TQueryData, TQueryKey>>
    client?: GetTodos['client']['parameters']
  } = {},
): UseInfiniteQueryResult<TData, GetTodos['error']> & {
  queryKey: TQueryKey
} {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {}
  const queryKey = queryOptions?.queryKey ?? getTodosInfiniteQueryKey(params)
  const query = useInfiniteQuery({
    ...(getTodosInfiniteQueryOptions(params, clientOptions) as InfiniteQueryObserverOptions),
    queryKey,
    ...(queryOptions as unknown as InfiniteQueryObserverOptions),
  }) as UseInfiniteQueryResult<TData, GetTodos['error']> & {
    queryKey: TQueryKey
  }
  query.queryKey = queryKey as TQueryKey
  return query
}

import client from '../../../../shared/kubb-clients/axios-client'
import { useQuery, queryOptions, useInfiniteQuery, infiniteQueryOptions } from '@tanstack/react-query'
import type { GetTodoQueryResponse, GetTodoPathParams, GetTodo404 } from '../../../types/todosController/GetTodo'
import type { QueryObserverOptions, UseQueryResult, QueryKey, InfiniteQueryObserverOptions, UseInfiniteQueryResult, InfiniteData } from '@tanstack/react-query'

type GetTodoClient = typeof client<GetTodoQueryResponse, GetTodo404, never>
type GetTodo = {
  data: GetTodoQueryResponse
  error: GetTodo404
  request: never
  pathParams: GetTodoPathParams
  queryParams: never
  headerParams: never
  response: Awaited<ReturnType<GetTodoClient>>
  client: {
    parameters: Partial<Parameters<GetTodoClient>[0]>
    return: Awaited<ReturnType<GetTodoClient>>
  }
}
export const getTodoQueryKey = (id: GetTodoPathParams['id']) => [{ url: '/todos/:id', params: { id: id } }] as const
export type GetTodoQueryKey = ReturnType<typeof getTodoQueryKey>
export function getTodoQueryOptions(id: GetTodoPathParams['id'], options: GetTodo['client']['parameters'] = {}) {
  const queryKey = getTodoQueryKey(id)
  return queryOptions({
    queryKey,
    queryFn: async () => {
      const res = await client<GetTodo['data'], GetTodo['error']>({
        method: 'get',
        url: `/todos/${id}`,
        ...options,
      })
      return res
    },
  })
}
/**
 * @summary Get specific todo
 * @link /todos/:id */
export function useGetTodo<TData = GetTodo['response'], TQueryData = GetTodo['response'], TQueryKey extends QueryKey = GetTodoQueryKey>(
  id: GetTodoPathParams['id'],
  options: {
    query?: Partial<QueryObserverOptions<GetTodo['response'], GetTodo['error'], TData, TQueryData, TQueryKey>>
    client?: GetTodo['client']['parameters']
  } = {},
): UseQueryResult<TData, GetTodo['error']> & {
  queryKey: TQueryKey
} {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {}
  const queryKey = queryOptions?.queryKey ?? getTodoQueryKey(id)
  const query = useQuery({
    ...(getTodoQueryOptions(id, clientOptions) as QueryObserverOptions),
    queryKey,
    ...(queryOptions as unknown as QueryObserverOptions),
  }) as UseQueryResult<TData, GetTodo['error']> & {
    queryKey: TQueryKey
  }
  query.queryKey = queryKey as TQueryKey
  return query
}
export const getTodoInfiniteQueryKey = (id: GetTodoPathParams['id']) => [{ url: '/todos/:id', params: { id: id } }] as const
export type GetTodoInfiniteQueryKey = ReturnType<typeof getTodoInfiniteQueryKey>
export function getTodoInfiniteQueryOptions(id: GetTodoPathParams['id'], options: GetTodo['client']['parameters'] = {}) {
  const queryKey = getTodoInfiniteQueryKey(id)
  return infiniteQueryOptions({
    queryKey,
    queryFn: async ({ pageParam }) => {
      const res = await client<GetTodo['data'], GetTodo['error']>({
        method: 'get',
        url: `/todos/${id}`,
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
 * @summary Get specific todo
 * @link /todos/:id */
export function useGetTodoInfinite<
  TData = InfiniteData<GetTodo['response']>,
  TQueryData = GetTodo['response'],
  TQueryKey extends QueryKey = GetTodoInfiniteQueryKey,
>(
  id: GetTodoPathParams['id'],
  options: {
    query?: Partial<InfiniteQueryObserverOptions<GetTodo['response'], GetTodo['error'], TData, TQueryData, TQueryKey>>
    client?: GetTodo['client']['parameters']
  } = {},
): UseInfiniteQueryResult<TData, GetTodo['error']> & {
  queryKey: TQueryKey
} {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {}
  const queryKey = queryOptions?.queryKey ?? getTodoInfiniteQueryKey(id)
  const query = useInfiniteQuery({
    ...(getTodoInfiniteQueryOptions(id, clientOptions) as InfiniteQueryObserverOptions),
    queryKey,
    ...(queryOptions as unknown as InfiniteQueryObserverOptions),
  }) as UseInfiniteQueryResult<TData, GetTodo['error']> & {
    queryKey: TQueryKey
  }
  query.queryKey = queryKey as TQueryKey
  return query
}

import client from '../../../../shared/kubb-clients/axios-client'
import { useQuery, queryOptions, useInfiniteQuery, infiniteQueryOptions } from '@tanstack/react-query'
import type { GetPostsIdCommentsQueryResponse, GetPostsIdCommentsPathParams, GetPostsIdComments404 } from '../../../types/postsController/GetPostsIdComments'
import type { QueryObserverOptions, UseQueryResult, QueryKey, InfiniteQueryObserverOptions, UseInfiniteQueryResult, InfiniteData } from '@tanstack/react-query'

type GetPostsIdCommentsClient = typeof client<GetPostsIdCommentsQueryResponse, GetPostsIdComments404, never>
type GetPostsIdComments = {
  data: GetPostsIdCommentsQueryResponse
  error: GetPostsIdComments404
  request: never
  pathParams: GetPostsIdCommentsPathParams
  queryParams: never
  headerParams: never
  response: Awaited<ReturnType<GetPostsIdCommentsClient>>
  client: {
    parameters: Partial<Parameters<GetPostsIdCommentsClient>[0]>
    return: Awaited<ReturnType<GetPostsIdCommentsClient>>
  }
}
export const getPostsIdCommentsQueryKey = (id: GetPostsIdCommentsPathParams['id']) => [{ url: '/posts/:id/comments', params: { id: id } }] as const
export type GetPostsIdCommentsQueryKey = ReturnType<typeof getPostsIdCommentsQueryKey>
export function getPostsIdCommentsQueryOptions(id: GetPostsIdCommentsPathParams['id'], options: GetPostsIdComments['client']['parameters'] = {}) {
  const queryKey = getPostsIdCommentsQueryKey(id)
  return queryOptions({
    queryKey,
    queryFn: async () => {
      const res = await client<GetPostsIdComments['data'], GetPostsIdComments['error']>({
        method: 'get',
        url: `/posts/${id}/comments`,
        ...options,
      })
      return res
    },
  })
}
/**
 * @summary Get comments for a specific post
 * @link /posts/:id/comments */
export function useGetPostsIdComments<
  TData = GetPostsIdComments['response'],
  TQueryData = GetPostsIdComments['response'],
  TQueryKey extends QueryKey = GetPostsIdCommentsQueryKey,
>(
  id: GetPostsIdCommentsPathParams['id'],
  options: {
    query?: Partial<QueryObserverOptions<GetPostsIdComments['response'], GetPostsIdComments['error'], TData, TQueryData, TQueryKey>>
    client?: GetPostsIdComments['client']['parameters']
  } = {},
): UseQueryResult<TData, GetPostsIdComments['error']> & {
  queryKey: TQueryKey
} {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {}
  const queryKey = queryOptions?.queryKey ?? getPostsIdCommentsQueryKey(id)
  const query = useQuery({
    ...(getPostsIdCommentsQueryOptions(id, clientOptions) as QueryObserverOptions),
    queryKey,
    ...(queryOptions as unknown as QueryObserverOptions),
  }) as UseQueryResult<TData, GetPostsIdComments['error']> & {
    queryKey: TQueryKey
  }
  query.queryKey = queryKey as TQueryKey
  return query
}
export const getPostsIdCommentsInfiniteQueryKey = (id: GetPostsIdCommentsPathParams['id']) => [{ url: '/posts/:id/comments', params: { id: id } }] as const
export type GetPostsIdCommentsInfiniteQueryKey = ReturnType<typeof getPostsIdCommentsInfiniteQueryKey>
export function getPostsIdCommentsInfiniteQueryOptions(id: GetPostsIdCommentsPathParams['id'], options: GetPostsIdComments['client']['parameters'] = {}) {
  const queryKey = getPostsIdCommentsInfiniteQueryKey(id)
  return infiniteQueryOptions({
    queryKey,
    queryFn: async ({ pageParam }) => {
      const res = await client<GetPostsIdComments['data'], GetPostsIdComments['error']>({
        method: 'get',
        url: `/posts/${id}/comments`,
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
 * @summary Get comments for a specific post
 * @link /posts/:id/comments */
export function useGetPostsIdCommentsInfinite<
  TData = InfiniteData<GetPostsIdComments['response']>,
  TQueryData = GetPostsIdComments['response'],
  TQueryKey extends QueryKey = GetPostsIdCommentsInfiniteQueryKey,
>(
  id: GetPostsIdCommentsPathParams['id'],
  options: {
    query?: Partial<InfiniteQueryObserverOptions<GetPostsIdComments['response'], GetPostsIdComments['error'], TData, TQueryData, TQueryKey>>
    client?: GetPostsIdComments['client']['parameters']
  } = {},
): UseInfiniteQueryResult<TData, GetPostsIdComments['error']> & {
  queryKey: TQueryKey
} {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {}
  const queryKey = queryOptions?.queryKey ?? getPostsIdCommentsInfiniteQueryKey(id)
  const query = useInfiniteQuery({
    ...(getPostsIdCommentsInfiniteQueryOptions(id, clientOptions) as InfiniteQueryObserverOptions),
    queryKey,
    ...(queryOptions as unknown as InfiniteQueryObserverOptions),
  }) as UseInfiniteQueryResult<TData, GetPostsIdComments['error']> & {
    queryKey: TQueryKey
  }
  query.queryKey = queryKey as TQueryKey
  return query
}

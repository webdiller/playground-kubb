import client from '../../../../shared/kubb-clients/axios-client'
import type { ResponseConfig } from '../../../../shared/kubb-clients/axios-client'
import type { GetPostsQueryResponse, GetPostsQueryParams } from '../../../types/postsController/GetPosts'

/**
 * @summary Get all available posts
 * @link /posts */
export async function getPosts(
  params?: GetPostsQueryParams,
  options: Partial<Parameters<typeof client>[0]> = {},
): Promise<ResponseConfig<GetPostsQueryResponse>> {
  const res = await client<GetPostsQueryResponse>({
    method: 'get',
    url: `/posts`,
    params,
    ...options,
  })
  return res
}

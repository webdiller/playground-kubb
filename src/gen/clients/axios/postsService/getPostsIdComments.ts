import client from '../../../../shared/kubb-clients/axios-client'
import type { ResponseConfig } from '../../../../shared/kubb-clients/axios-client'
import type { GetPostsIdCommentsQueryResponse, GetPostsIdCommentsPathParams } from '../../../types/postsController/GetPostsIdComments'

/**
 * @summary Get comments for a specific post
 * @link /posts/:id/comments */
export async function getPostsIdComments(
  { id }: GetPostsIdCommentsPathParams,
  options: Partial<Parameters<typeof client>[0]> = {},
): Promise<ResponseConfig<GetPostsIdCommentsQueryResponse>> {
  const res = await client<GetPostsIdCommentsQueryResponse>({
    method: 'get',
    url: `/posts/${id}/comments`,
    ...options,
  })
  return res
}

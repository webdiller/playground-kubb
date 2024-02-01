import client from '../../../../shared/kubb-clients/axios-client'
import type { ResponseConfig } from '../../../../shared/kubb-clients/axios-client'
import type { GetPostsIdQueryResponse, GetPostsIdPathParams } from '../../../types/postsController/GetPostsId'

/**
 * @summary Get specific post
 * @link /posts/:id */
export async function getPostsId(
  { id }: GetPostsIdPathParams,
  options: Partial<Parameters<typeof client>[0]> = {},
): Promise<ResponseConfig<GetPostsIdQueryResponse>> {
  const res = await client<GetPostsIdQueryResponse>({
    method: 'get',
    url: `/posts/${id}`,
    ...options,
  })
  return res
}

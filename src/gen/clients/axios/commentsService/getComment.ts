import client from '../../../../shared/kubb-clients/axios-client'
import type { ResponseConfig } from '../../../../shared/kubb-clients/axios-client'
import type { GetCommentQueryResponse, GetCommentPathParams } from '../../../types/commentsController/GetComment'

/**
 * @summary Get specific comment
 * @link /comments/:id */
export async function getComment(
  { id }: GetCommentPathParams,
  options: Partial<Parameters<typeof client>[0]> = {},
): Promise<ResponseConfig<GetCommentQueryResponse>> {
  const res = await client<GetCommentQueryResponse>({
    method: 'get',
    url: `/comments/${id}`,
    ...options,
  })
  return res
}

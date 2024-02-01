import client from '../../../../shared/kubb-clients/axios-client'
import type { ResponseConfig } from '../../../../shared/kubb-clients/axios-client'
import type { GetCommentsQueryResponse, GetCommentsQueryParams } from '../../../types/commentsController/GetComments'

/**
 * @summary Get all available comments
 * @link /comments */
export async function getComments(
  params?: GetCommentsQueryParams,
  options: Partial<Parameters<typeof client>[0]> = {},
): Promise<ResponseConfig<GetCommentsQueryResponse>> {
  const res = await client<GetCommentsQueryResponse>({
    method: 'get',
    url: `/comments`,
    params,
    ...options,
  })
  return res
}

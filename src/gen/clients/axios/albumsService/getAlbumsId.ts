import client from '../../../../shared/kubb-clients/axios-client'
import type { ResponseConfig } from '../../../../shared/kubb-clients/axios-client'
import type { GetAlbumsIdQueryResponse, GetAlbumsIdPathParams } from '../../../types/albumsController/GetAlbumsId'

/**
 * @summary Get specific album
 * @link /albums/:id */
export async function getAlbumsId(
  { id }: GetAlbumsIdPathParams,
  options: Partial<Parameters<typeof client>[0]> = {},
): Promise<ResponseConfig<GetAlbumsIdQueryResponse>> {
  const res = await client<GetAlbumsIdQueryResponse>({
    method: 'get',
    url: `/albums/${id}`,
    ...options,
  })
  return res
}

import client from '../../../../shared/kubb-clients/axios-client'
import type { ResponseConfig } from '../../../../shared/kubb-clients/axios-client'
import type { GetAlbumsQueryResponse, GetAlbumsQueryParams } from '../../../types/albumsController/GetAlbums'

/**
 * @summary Get all available albums
 * @link /albums */
export async function getAlbums(
  params?: GetAlbumsQueryParams,
  options: Partial<Parameters<typeof client>[0]> = {},
): Promise<ResponseConfig<GetAlbumsQueryResponse>> {
  const res = await client<GetAlbumsQueryResponse>({
    method: 'get',
    url: `/albums`,
    params,
    ...options,
  })
  return res
}

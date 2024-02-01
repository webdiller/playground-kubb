import client from '../../../../shared/kubb-clients/axios-client'
import type { ResponseConfig } from '../../../../shared/kubb-clients/axios-client'
import type { GetAlbumsIdPhotosQueryResponse, GetAlbumsIdPhotosPathParams } from '../../../types/albumsController/GetAlbumsIdPhotos'

/**
 * @summary Get photos for a specific album
 * @link /albums/:id/photos */
export async function getAlbumsIdPhotos(
  { id }: GetAlbumsIdPhotosPathParams,
  options: Partial<Parameters<typeof client>[0]> = {},
): Promise<ResponseConfig<GetAlbumsIdPhotosQueryResponse>> {
  const res = await client<GetAlbumsIdPhotosQueryResponse>({
    method: 'get',
    url: `/albums/${id}/photos`,
    ...options,
  })
  return res
}

import client from '../../../../shared/kubb-clients/axios-client'
import type { ResponseConfig } from '../../../../shared/kubb-clients/axios-client'
import type { GetPhotosQueryResponse, GetPhotosQueryParams } from '../../../types/photosController/GetPhotos'

/**
 * @summary Get all available photos
 * @link /photos */
export async function getPhotos(
  params?: GetPhotosQueryParams,
  options: Partial<Parameters<typeof client>[0]> = {},
): Promise<ResponseConfig<GetPhotosQueryResponse>> {
  const res = await client<GetPhotosQueryResponse>({
    method: 'get',
    url: `/photos`,
    params,
    ...options,
  })
  return res
}

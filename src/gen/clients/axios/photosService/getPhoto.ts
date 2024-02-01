import client from '../../../../shared/kubb-clients/axios-client'
import type { ResponseConfig } from '../../../../shared/kubb-clients/axios-client'
import type { GetPhotoQueryResponse, GetPhotoPathParams } from '../../../types/photosController/GetPhoto'

/**
 * @summary Get specific photo
 * @link /photos/:id */
export async function getPhoto(
  { id }: GetPhotoPathParams,
  options: Partial<Parameters<typeof client>[0]> = {},
): Promise<ResponseConfig<GetPhotoQueryResponse>> {
  const res = await client<GetPhotoQueryResponse>({
    method: 'get',
    url: `/photos/${id}`,
    ...options,
  })
  return res
}

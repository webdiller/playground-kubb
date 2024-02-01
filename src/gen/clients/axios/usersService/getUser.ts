import client from '../../../../shared/kubb-clients/axios-client'
import type { ResponseConfig } from '../../../../shared/kubb-clients/axios-client'
import type { GetUserQueryResponse, GetUserPathParams } from '../../../types/usersController/GetUser'

/**
 * @summary Get specific user
 * @link /users/:id */
export async function getUser({ id }: GetUserPathParams, options: Partial<Parameters<typeof client>[0]> = {}): Promise<ResponseConfig<GetUserQueryResponse>> {
  const res = await client<GetUserQueryResponse>({
    method: 'get',
    url: `/users/${id}`,
    ...options,
  })
  return res
}

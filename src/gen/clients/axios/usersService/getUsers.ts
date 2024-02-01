import client from '../../../../shared/kubb-clients/axios-client'
import type { ResponseConfig } from '../../../../shared/kubb-clients/axios-client'
import type { GetUsersQueryResponse, GetUsersQueryParams } from '../../../types/usersController/GetUsers'

/**
 * @summary Get all available users
 * @link /users */
export async function getUsers(
  params?: GetUsersQueryParams,
  options: Partial<Parameters<typeof client>[0]> = {},
): Promise<ResponseConfig<GetUsersQueryResponse>> {
  const res = await client<GetUsersQueryResponse>({
    method: 'get',
    url: `/users`,
    params,
    ...options,
  })
  return res
}

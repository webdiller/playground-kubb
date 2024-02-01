import client from '../../../../shared/kubb-clients/axios-client'
import type { ResponseConfig } from '../../../../shared/kubb-clients/axios-client'
import type { GetTodosQueryResponse, GetTodosQueryParams } from '../../../types/todosController/GetTodos'

/**
 * @summary Get all available todos
 * @link /todos */
export async function getTodos(
  params?: GetTodosQueryParams,
  options: Partial<Parameters<typeof client>[0]> = {},
): Promise<ResponseConfig<GetTodosQueryResponse>> {
  const res = await client<GetTodosQueryResponse>({
    method: 'get',
    url: `/todos`,
    params,
    ...options,
  })
  return res
}

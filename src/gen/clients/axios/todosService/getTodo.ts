import client from '../../../../shared/kubb-clients/axios-client'
import type { ResponseConfig } from '../../../../shared/kubb-clients/axios-client'
import type { GetTodoQueryResponse, GetTodoPathParams } from '../../../types/todosController/GetTodo'

/**
 * @summary Get specific todo
 * @link /todos/:id */
export async function getTodo({ id }: GetTodoPathParams, options: Partial<Parameters<typeof client>[0]> = {}): Promise<ResponseConfig<GetTodoQueryResponse>> {
  const res = await client<GetTodoQueryResponse>({
    method: 'get',
    url: `/todos/${id}`,
    ...options,
  })
  return res
}

import { z } from 'zod'
import { zodNotFoundErrorSchema } from '../zodNotFoundErrorSchema'
import { zodTodoSchema } from '../zodTodoSchema'

export const zodGetTodoPathParamsSchema = z.object({ id: z.number().describe(`The ID of the todo to retrieve`) })

/**
 * @description not found
 */
export const zodGetTodo404Schema = z.lazy(() => zodNotFoundErrorSchema)

/**
 * @description successful operation
 */
export const zodGetTodoQueryResponseSchema = z.lazy(() => zodTodoSchema)

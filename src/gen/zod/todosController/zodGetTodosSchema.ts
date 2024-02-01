import { z } from 'zod'
import { zodTodoSchema } from '../zodTodoSchema'

export const zodGetTodosQueryParamsSchema = z
  .object({ id: z.number().describe(`Filter by todo ID`).optional(), userId: z.number().describe(`Filter by user ID`).optional() })
  .optional()

/**
 * @description successful operation
 */
export const zodGetTodosQueryResponseSchema = z.array(z.lazy(() => zodTodoSchema))

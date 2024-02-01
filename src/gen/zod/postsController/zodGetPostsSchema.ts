import { z } from 'zod'
import { zodPostSchema } from '../zodPostSchema'

export const zodGetPostsQueryParamsSchema = z
  .object({ id: z.number().describe(`Filter by post ID`).optional(), userId: z.number().describe(`Filter by user ID`).optional() })
  .optional()

/**
 * @description successful operation
 */
export const zodGetPostsQueryResponseSchema = z.array(z.lazy(() => zodPostSchema))

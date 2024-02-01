import { z } from 'zod'
import { zodCommentSchema } from '../zodCommentSchema'

export const zodGetCommentsQueryParamsSchema = z
  .object({ id: z.number().describe(`Filter by comment ID`).optional(), postId: z.number().describe(`Filter by post ID`).optional() })
  .optional()

/**
 * @description successful operation
 */
export const zodGetCommentsQueryResponseSchema = z.array(z.lazy(() => zodCommentSchema))

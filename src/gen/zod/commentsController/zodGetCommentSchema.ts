import { z } from 'zod'
import { zodNotFoundErrorSchema } from '../zodNotFoundErrorSchema'
import { zodCommentSchema } from '../zodCommentSchema'

export const zodGetCommentPathParamsSchema = z.object({ id: z.number().describe(`The ID of the comment to retrieve`) })

/**
 * @description not found
 */
export const zodGetComment404Schema = z.lazy(() => zodNotFoundErrorSchema)

/**
 * @description successful operation
 */
export const zodGetCommentQueryResponseSchema = z.lazy(() => zodCommentSchema)

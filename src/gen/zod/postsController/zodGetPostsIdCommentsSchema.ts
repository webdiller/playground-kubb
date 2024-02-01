import { z } from 'zod'
import { zodNotFoundErrorSchema } from '../zodNotFoundErrorSchema'
import { zodCommentSchema } from '../zodCommentSchema'

export const zodGetPostsIdCommentsPathParamsSchema = z.object({ id: z.number().describe(`post id`) })

/**
 * @description not found
 */
export const zodGetPostsIdComments404Schema = z.lazy(() => zodNotFoundErrorSchema)

/**
 * @description successful operation
 */
export const zodGetPostsIdCommentsQueryResponseSchema = z.array(z.lazy(() => zodCommentSchema))

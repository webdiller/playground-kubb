import { z } from 'zod'
import { zodNotFoundErrorSchema } from '../zodNotFoundErrorSchema'
import { zodPostSchema } from '../zodPostSchema'

export const zodGetPostsIdPathParamsSchema = z.object({ id: z.number().describe(`The ID of the post to retrieve`) })

/**
 * @description not found
 */
export const zodGetPostsId404Schema = z.lazy(() => zodNotFoundErrorSchema)

/**
 * @description successful operation
 */
export const zodGetPostsIdQueryResponseSchema = z.lazy(() => zodPostSchema)

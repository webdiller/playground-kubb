import { z } from 'zod'
import { zodNotFoundErrorSchema } from '../zodNotFoundErrorSchema'
import { zodPhotoSchema } from '../zodPhotoSchema'

export const zodGetAlbumsIdPhotosPathParamsSchema = z.object({ id: z.number().describe(`post id`) })

/**
 * @description not found
 */
export const zodGetAlbumsIdPhotos404Schema = z.lazy(() => zodNotFoundErrorSchema)

/**
 * @description successful operation
 */
export const zodGetAlbumsIdPhotosQueryResponseSchema = z.array(z.lazy(() => zodPhotoSchema))

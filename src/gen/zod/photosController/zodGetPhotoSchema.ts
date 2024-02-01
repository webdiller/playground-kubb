import { z } from 'zod'
import { zodNotFoundErrorSchema } from '../zodNotFoundErrorSchema'
import { zodPhotoSchema } from '../zodPhotoSchema'

export const zodGetPhotoPathParamsSchema = z.object({ id: z.number().describe(`The ID of the photo to retrieve`) })

/**
 * @description not found
 */
export const zodGetPhoto404Schema = z.lazy(() => zodNotFoundErrorSchema)

/**
 * @description successful operation
 */
export const zodGetPhotoQueryResponseSchema = z.lazy(() => zodPhotoSchema)

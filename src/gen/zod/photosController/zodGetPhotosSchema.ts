import { z } from 'zod'
import { zodPhotoSchema } from '../zodPhotoSchema'

export const zodGetPhotosQueryParamsSchema = z
  .object({ id: z.number().describe(`Filter by photo ID`).optional(), albumId: z.number().describe(`Filter by album ID`).optional() })
  .optional()

/**
 * @description successful operation
 */
export const zodGetPhotosQueryResponseSchema = z.array(z.lazy(() => zodPhotoSchema))

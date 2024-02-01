import { z } from 'zod'
import { zodAlbumSchema } from '../zodAlbumSchema'

export const zodGetAlbumsQueryParamsSchema = z
  .object({ id: z.number().describe(`Filter by album ID`).optional(), userId: z.number().describe(`Filter by user ID`).optional() })
  .optional()

/**
 * @description successful operation
 */
export const zodGetAlbumsQueryResponseSchema = z.array(z.lazy(() => zodAlbumSchema))

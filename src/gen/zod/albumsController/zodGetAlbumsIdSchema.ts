import { z } from 'zod'
import { zodNotFoundErrorSchema } from '../zodNotFoundErrorSchema'
import { zodAlbumSchema } from '../zodAlbumSchema'

export const zodGetAlbumsIdPathParamsSchema = z.object({ id: z.number().describe(`The ID of the album to retrieve`) })

/**
 * @description not found
 */
export const zodGetAlbumsId404Schema = z.lazy(() => zodNotFoundErrorSchema)

/**
 * @description successful operation
 */
export const zodGetAlbumsIdQueryResponseSchema = z.lazy(() => zodAlbumSchema)

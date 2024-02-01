import { z } from 'zod'

export const zodPhotoSchema = z.object({
  id: z.number().optional(),
  albumId: z.number().optional(),
  title: z.string().optional(),
  url: z.string().optional(),
  thumbnailUrl: z.string().optional(),
})

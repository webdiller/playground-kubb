import { z } from 'zod'

export const zodAlbumSchema = z.object({ id: z.number().optional(), userId: z.number().optional(), title: z.string().optional() })

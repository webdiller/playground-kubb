import { z } from 'zod'

export const zodPostSchema = z.object({ id: z.number().optional(), userId: z.number().optional(), title: z.string().optional(), body: z.string().optional() })

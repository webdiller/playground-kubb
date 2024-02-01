import { z } from 'zod'

export const zodCommentSchema = z.object({
  id: z.number().optional(),
  postId: z.number().optional(),
  name: z.string().optional(),
  email: z.string().email().optional(),
  body: z.string().optional(),
})

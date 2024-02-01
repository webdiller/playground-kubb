import { z } from 'zod'

export const zodTodoSchema = z.object({
  id: z.number().optional(),
  userId: z.number().optional(),
  title: z.string().optional(),
  completed: z.boolean().optional(),
})

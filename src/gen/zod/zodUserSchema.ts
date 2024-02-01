import { z } from 'zod'

export const zodUserSchema = z.object({
  id: z.number().optional(),
  name: z.string().optional(),
  username: z.string().optional(),
  email: z.string().email().optional(),
  phone: z.string().optional(),
  website: z.string().optional(),
  company: z.object({ name: z.string().optional(), catchPhrase: z.string().optional(), bs: z.string().optional() }).optional(),
  address: z
    .object({
      street: z.string().optional(),
      suite: z.string().optional(),
      city: z.string().optional(),
      zipcode: z.string().optional(),
      geo: z.object({ lat: z.string().optional(), lng: z.string().optional() }).optional(),
    })
    .optional(),
})

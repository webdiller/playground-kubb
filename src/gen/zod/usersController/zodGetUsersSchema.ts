import { z } from 'zod'
import { zodUserSchema } from '../zodUserSchema'

export const zodGetUsersQueryParamsSchema = z
  .object({ id: z.number().describe(`Filter by user ID`).optional(), email: z.number().email().describe(`Filter by user email address`).optional() })
  .optional()

/**
 * @description successful operation
 */
export const zodGetUsersQueryResponseSchema = z.array(z.lazy(() => zodUserSchema))

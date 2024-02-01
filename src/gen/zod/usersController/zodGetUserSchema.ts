import { z } from 'zod'
import { zodNotFoundErrorSchema } from '../zodNotFoundErrorSchema'
import { zodUserSchema } from '../zodUserSchema'

export const zodGetUserPathParamsSchema = z.object({ id: z.number().describe(`The ID of the user to retrieve`) })

/**
 * @description not found
 */
export const zodGetUser404Schema = z.lazy(() => zodNotFoundErrorSchema)

/**
 * @description successful operation
 */
export const zodGetUserQueryResponseSchema = z.lazy(() => zodUserSchema)

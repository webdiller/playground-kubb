import type { NotFoundError } from '../NotFoundError'
import type { User } from '../User'

export type GetUserPathParams = {
  /**
   * @description The ID of the user to retrieve
   * @type integer
   */
  id: number
}

/**
 * @description not found
 */
export type GetUser404 = NotFoundError

/**
 * @description successful operation
 */
export type GetUserQueryResponse = User
export namespace GetUserQuery {
  export type Response = GetUserQueryResponse
  export type PathParams = GetUserPathParams
  export type Errors = GetUser404
}

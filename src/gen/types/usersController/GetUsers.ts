import type { User } from '../User'

export type GetUsersQueryParams = {
  /**
   * @description Filter by user ID
   * @type integer | undefined
   */
  id?: number
  /**
   * @description Filter by user email address
   * @type integer | undefined
   */
  email?: number
}

/**
 * @description successful operation
 */
export type GetUsersQueryResponse = User[]
export namespace GetUsersQuery {
  export type Response = GetUsersQueryResponse
  export type QueryParams = GetUsersQueryParams
}

import type { Todo } from '../Todo'

export type GetTodosQueryParams = {
  /**
   * @description Filter by todo ID
   * @type integer | undefined
   */
  id?: number
  /**
   * @description Filter by user ID
   * @type integer | undefined
   */
  userId?: number
}

/**
 * @description successful operation
 */
export type GetTodosQueryResponse = Todo[]
export namespace GetTodosQuery {
  export type Response = GetTodosQueryResponse
  export type QueryParams = GetTodosQueryParams
}

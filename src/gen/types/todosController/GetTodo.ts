import type { NotFoundError } from '../NotFoundError'
import type { Todo } from '../Todo'

export type GetTodoPathParams = {
  /**
   * @description The ID of the todo to retrieve
   * @type integer
   */
  id: number
}

/**
 * @description not found
 */
export type GetTodo404 = NotFoundError

/**
 * @description successful operation
 */
export type GetTodoQueryResponse = Todo
export namespace GetTodoQuery {
  export type Response = GetTodoQueryResponse
  export type PathParams = GetTodoPathParams
  export type Errors = GetTodo404
}

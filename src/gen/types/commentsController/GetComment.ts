import type { NotFoundError } from '../NotFoundError'
import type { Comment } from '../Comment'

export type GetCommentPathParams = {
  /**
   * @description The ID of the comment to retrieve
   * @type integer
   */
  id: number
}

/**
 * @description not found
 */
export type GetComment404 = NotFoundError

/**
 * @description successful operation
 */
export type GetCommentQueryResponse = Comment
export namespace GetCommentQuery {
  export type Response = GetCommentQueryResponse
  export type PathParams = GetCommentPathParams
  export type Errors = GetComment404
}

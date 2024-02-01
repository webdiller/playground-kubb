import type { NotFoundError } from '../NotFoundError'
import type { Comment } from '../Comment'

export type GetPostsIdCommentsPathParams = {
  /**
   * @description post id
   * @type integer
   */
  id: number
}

/**
 * @description not found
 */
export type GetPostsIdComments404 = NotFoundError

/**
 * @description successful operation
 */
export type GetPostsIdCommentsQueryResponse = Comment[]
export namespace GetPostsIdCommentsQuery {
  export type Response = GetPostsIdCommentsQueryResponse
  export type PathParams = GetPostsIdCommentsPathParams
  export type Errors = GetPostsIdComments404
}

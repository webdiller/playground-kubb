import type { NotFoundError } from '../NotFoundError'
import type { Post } from '../Post'

export type GetPostsIdPathParams = {
  /**
   * @description The ID of the post to retrieve
   * @type integer
   */
  id: number
}

/**
 * @description not found
 */
export type GetPostsId404 = NotFoundError

/**
 * @description successful operation
 */
export type GetPostsIdQueryResponse = Post
export namespace GetPostsIdQuery {
  export type Response = GetPostsIdQueryResponse
  export type PathParams = GetPostsIdPathParams
  export type Errors = GetPostsId404
}

import type { Post } from '../Post'

export type GetPostsQueryParams = {
  /**
   * @description Filter by post ID
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
export type GetPostsQueryResponse = Post[]
export namespace GetPostsQuery {
  export type Response = GetPostsQueryResponse
  export type QueryParams = GetPostsQueryParams
}

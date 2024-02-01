import type { Comment } from '../Comment'

export type GetCommentsQueryParams = {
  /**
   * @description Filter by comment ID
   * @type integer | undefined
   */
  id?: number
  /**
   * @description Filter by post ID
   * @type integer | undefined
   */
  postId?: number
}

/**
 * @description successful operation
 */
export type GetCommentsQueryResponse = Comment[]
export namespace GetCommentsQuery {
  export type Response = GetCommentsQueryResponse
  export type QueryParams = GetCommentsQueryParams
}

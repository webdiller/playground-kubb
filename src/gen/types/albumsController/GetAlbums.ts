import type { Album } from '../Album'

export type GetAlbumsQueryParams = {
  /**
   * @description Filter by album ID
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
export type GetAlbumsQueryResponse = Album[]
export namespace GetAlbumsQuery {
  export type Response = GetAlbumsQueryResponse
  export type QueryParams = GetAlbumsQueryParams
}

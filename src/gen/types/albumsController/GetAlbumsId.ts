import type { NotFoundError } from '../NotFoundError'
import type { Album } from '../Album'

export type GetAlbumsIdPathParams = {
  /**
   * @description The ID of the album to retrieve
   * @type integer
   */
  id: number
}

/**
 * @description not found
 */
export type GetAlbumsId404 = NotFoundError

/**
 * @description successful operation
 */
export type GetAlbumsIdQueryResponse = Album
export namespace GetAlbumsIdQuery {
  export type Response = GetAlbumsIdQueryResponse
  export type PathParams = GetAlbumsIdPathParams
  export type Errors = GetAlbumsId404
}

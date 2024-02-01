import type { NotFoundError } from '../NotFoundError'
import type { Photo } from '../Photo'

export type GetAlbumsIdPhotosPathParams = {
  /**
   * @description post id
   * @type integer
   */
  id: number
}

/**
 * @description not found
 */
export type GetAlbumsIdPhotos404 = NotFoundError

/**
 * @description successful operation
 */
export type GetAlbumsIdPhotosQueryResponse = Photo[]
export namespace GetAlbumsIdPhotosQuery {
  export type Response = GetAlbumsIdPhotosQueryResponse
  export type PathParams = GetAlbumsIdPhotosPathParams
  export type Errors = GetAlbumsIdPhotos404
}

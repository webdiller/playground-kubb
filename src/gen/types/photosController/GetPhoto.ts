import type { NotFoundError } from '../NotFoundError'
import type { Photo } from '../Photo'

export type GetPhotoPathParams = {
  /**
   * @description The ID of the photo to retrieve
   * @type integer
   */
  id: number
}

/**
 * @description not found
 */
export type GetPhoto404 = NotFoundError

/**
 * @description successful operation
 */
export type GetPhotoQueryResponse = Photo
export namespace GetPhotoQuery {
  export type Response = GetPhotoQueryResponse
  export type PathParams = GetPhotoPathParams
  export type Errors = GetPhoto404
}

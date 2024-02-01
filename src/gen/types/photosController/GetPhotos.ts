import type { Photo } from '../Photo'

export type GetPhotosQueryParams = {
  /**
   * @description Filter by photo ID
   * @type integer | undefined
   */
  id?: number
  /**
   * @description Filter by album ID
   * @type integer | undefined
   */
  albumId?: number
}

/**
 * @description successful operation
 */
export type GetPhotosQueryResponse = Photo[]
export namespace GetPhotosQuery {
  export type Response = GetPhotosQueryResponse
  export type QueryParams = GetPhotosQueryParams
}

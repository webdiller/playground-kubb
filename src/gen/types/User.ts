export type User = {
  /**
   * @type integer | undefined int64
   */
  id?: number
  /**
   * @type string | undefined
   */
  name?: string
  /**
   * @type string | undefined
   */
  username?: string
  /**
   * @type string | undefined email
   */
  email?: string
  /**
   * @type string | undefined
   */
  phone?: string
  /**
   * @type string | undefined
   */
  website?: string
  /**
   * @type object | undefined
   */
  company?: {
    /**
     * @type string | undefined
     */
    name?: string
    /**
     * @type string | undefined
     */
    catchPhrase?: string
    /**
     * @type string | undefined
     */
    bs?: string
  }
  /**
   * @type object | undefined
   */
  address?: {
    /**
     * @type string | undefined
     */
    street?: string
    /**
     * @type string | undefined
     */
    suite?: string
    /**
     * @type string | undefined
     */
    city?: string
    /**
     * @type string | undefined
     */
    zipcode?: string
    /**
     * @type object | undefined
     */
    geo?: {
      /**
       * @type string | undefined
       */
      lat?: string
      /**
       * @type string | undefined
       */
      lng?: string
    }
  }
}

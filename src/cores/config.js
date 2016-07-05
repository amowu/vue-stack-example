const IS_LOCAL = process.env.NODE_ENV !== 'production'

const API_INVOKE_URL = IS_LOCAL
  ? 'https://hahow-recruit.herokuapp.com'
  : 'https://hahow-recruit.herokuapp.com'

export {
  API_INVOKE_URL
}

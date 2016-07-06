const IS_LOCAL = process.env.NODE_ENV !== 'production'

const API_ENDPOINT_URL = IS_LOCAL
  ? 'https://hahow-recruit.herokuapp.com' // development
  : 'https://hahow-recruit.herokuapp.com' // production

export {
  API_ENDPOINT_URL
}

const IS_LOCAL = process.env.NODE_ENV !== 'production'

const API_ENDPOINT_URL = IS_LOCAL
  ? 'http://localhost:3000' // development
  : 'https://hahow-recruit.herokuapp.com' // production

export {
  API_ENDPOINT_URL
}

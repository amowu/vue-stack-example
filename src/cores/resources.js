import VueResource from 'vue-resource'

import { Vue } from '../cores'
import { API_ENDPOINT_URL } from '../cores/config'

Vue.use(VueResource)

// 設定 REST API 的 base URL
Vue.http.options.root = API_ENDPOINT_URL

/**
 * GET /heroes
 * @return {Promise}
 */
export const getHeroes = function () {
  return Vue.http.get('heroes')
}

/**
 * GET /heroes/:heroId/profile
 * @return {Promise}
 */
export const getHeroProfile = function (heroId) {
  return Vue.http.get(`heroes/${heroId}/profile`)
}

/**
 * PATCH /heroes/:heroId/profile
 * @return {Promise}
 */
export const updateHeroProfile = function (heroId, profile) {
  return Vue.http.patch(`heroes/${heroId}/profile`, profile)
}

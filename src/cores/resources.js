import VueResource from 'vue-resource'

import { Vue } from '../cores'
import { API_ENDPOINT_URL } from '../cores/config'

Vue.use(VueResource)

Vue.http.options.root = API_ENDPOINT_URL

export const getHeroes = function () {
  return Vue.http.get('heroes')
}

export const getHeroProfile = function (heroId) {
  return Vue.http.get(`heroes/${heroId}/profile`)
}

export const updateHeroProfile = function (heroId, profile) {
  return Vue.http.patch(`heroes/${heroId}/profile`, profile)
}

import { Vue } from '../cores'
import { API_INVOKE_URL } from '../cores/config'

Vue.http.options.root = API_INVOKE_URL

export const getHeroes = function () {
  return Vue.http.get('heroes')
}

export const getHeroProfile = function (heroId) {
  return Vue.http.get(`heroes/${heroId}/profile`)
}


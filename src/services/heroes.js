import resource from '../cores/resource'

/**
 * GET /heroes
 * @return {Promise}
 */
export const getHeroes = function () {
  return resource.get('heroes')
}

/**
 * GET /heroes/:heroId/profile
 * @return {Promise}
 */
export const getHeroProfile = function (heroId) {
  return resource.get(`heroes/${heroId}/profile`)
}

/**
 * PATCH /heroes/:heroId/profile
 * @return {Promise}
 */
export const updateHeroProfile = function (heroId, profile) {
  return resource.patch(`heroes/${heroId}/profile`, profile)
}

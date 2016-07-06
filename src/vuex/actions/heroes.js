import {
  getHeroes,
  getHeroProfile,
  updateHeroProfile
} from '../../cores/resources'
import {
  EDIT_CURRENT_HERO_ATTRIBUTE,
  FETCH_CURRENT_HERO_LIST_ERROR,
  FETCH_CURRENT_HERO_LIST_START,
  FETCH_CURRENT_HERO_LIST_SUCCESS,
  FETCH_CURRENT_HERO_PROFILE_ERROR,
  FETCH_CURRENT_HERO_PROFILE_START,
  FETCH_CURRENT_HERO_PROFILE_SUCCESS,
  PATCH_CURRENT_HERO_PROFILE_ERROR,
  PATCH_CURRENT_HERO_PROFILE_START,
  PATCH_CURRENT_HERO_PROFILE_SUCCESS
} from '../types'

function makeAction (type) {
  return ({ dispatch }, ...args) => dispatch(type, ...args)
}

function makeRequest (resource, startType, successType, errorType) {
  return ({ dispatch }, ...args) => {
    dispatch(startType)
    resource(...args).then(
      response => dispatch(successType, response.data, ...args),
      response => dispatch(errorType, response, ...args)
    )
  }
}

/** GET /heroes */
export const fetchHeroes = makeRequest(
  getHeroes,
  FETCH_CURRENT_HERO_LIST_START,
  FETCH_CURRENT_HERO_LIST_SUCCESS,
  FETCH_CURRENT_HERO_LIST_ERROR)
/**
 * GET /heroes/:heroId/profile
 * @param {String} heroId
 */
export const fetchCurrHeroProfile = makeRequest(
  getHeroProfile,
  FETCH_CURRENT_HERO_PROFILE_START,
  FETCH_CURRENT_HERO_PROFILE_SUCCESS,
  FETCH_CURRENT_HERO_PROFILE_ERROR)
/**
 * PATCH /heroes/:heroId/profile
 * @param {String} heroId
 * @param {Object} profile - 例如：{ str: 1, int: 2, ... }
 */
export const patchCurrHeroProfile = makeRequest(
  updateHeroProfile,
  PATCH_CURRENT_HERO_PROFILE_START,
  PATCH_CURRENT_HERO_PROFILE_SUCCESS,
  PATCH_CURRENT_HERO_PROFILE_ERROR)
/**
 * 修改當前 hero profiles
 * @param {String} heroId
 * @param {String} attr - 例如：str
 * @param {Number} newVal - 更新後的數值
 */
export const editCurrHeroAttr = makeAction(EDIT_CURRENT_HERO_ATTRIBUTE)

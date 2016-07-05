import {
  getHeroes,
  getHeroProfile,
} from '../../cores/resources'
import {
  FETCH_CURRENT_HERO_LIST_ERROR,
  FETCH_CURRENT_HERO_LIST_START,
  FETCH_CURRENT_HERO_LIST_SUCCESS,
  FETCH_CURRENT_HERO_PROFILE_ERROR,
  FETCH_CURRENT_HERO_PROFILE_START,
  FETCH_CURRENT_HERO_PROFILE_SUCCESS,
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

export const fetchHeroes = makeRequest(
  getHeroes,
  FETCH_CURRENT_HERO_LIST_START,
  FETCH_CURRENT_HERO_LIST_SUCCESS,
  FETCH_CURRENT_HERO_LIST_ERROR)
export const fetchCurrHeroProfile = makeRequest(
  getHeroProfile,
  FETCH_CURRENT_HERO_PROFILE_START,
  FETCH_CURRENT_HERO_PROFILE_SUCCESS,
  FETCH_CURRENT_HERO_PROFILE_ERROR)

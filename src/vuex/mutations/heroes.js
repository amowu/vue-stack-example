import {
  EDIT_CURRENT_HERO_ATTRIBUTE,
  FETCH_CURRENT_HERO_LIST_ERROR,
  FETCH_CURRENT_HERO_LIST_START,
  FETCH_CURRENT_HERO_LIST_SUCCESS,
  FETCH_CURRENT_HERO_PROFILE_ERROR,
  FETCH_CURRENT_HERO_PROFILE_START,
  FETCH_CURRENT_HERO_PROFILE_SUCCESS,
} from '../types'

// 創建一個 state 物件，用來保存 heroes 的初始資料與狀態
const state = {
  current: {
    heroId: null,
    profile: {},
    totalPoints: 0
  },
  entities: {}
}

// 創建一個 mutations 物件，用來保存一系列 heroes 相關的 mutation 函式
const mutations = {
  [SET_CURRENT_HERO] (state, heroId, attrs) {
    const totalPoints = Object.keys(attrs).reduce((sum, key) => sum + attrs[key], 0)
    state.current = {
      heroId,
      totalPoints
  [EDIT_CURRENT_HERO_ATTRIBUTE] (state, heroId, attr, newVal) {
    state.current.profile[attr] = newVal
  },
  [FETCH_CURRENT_HERO_LIST_SUCCESS] (state, heroes) {
    state.isHeroListPageLoading = false
    if (Array.isArray(heroes)) {
      state.entities = heroes.reduce((obj, hero) => {
        obj[hero.id] = hero
        return obj
      }, {})
    }
  },
  [FETCH_CURRENT_HERO_PROFILE_SUCCESS] (state, profile, heroId) {
    state.isHeroProfilePageLoading = false
    state.current.heroId = heroId
    state.current.profile = { ...profile }
    state.current.totalPoints = Object.keys(profile).reduce((sum, key) => sum + profile[key], 0)
  },
  }
}

export default {
  state,
  mutations
}

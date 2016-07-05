import {
  FETCH_CURRENT_HERO_LIST_ERROR,
  FETCH_CURRENT_HERO_LIST_START,
  FETCH_CURRENT_HERO_LIST_SUCCESS,
} from '../types'

// 創建一個 state 物件，用來保存 heroes 的初始資料與狀態
const state = {
  current: {
    heroId: null,
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
  [FETCH_CURRENT_HERO_LIST_SUCCESS] (state, heroes) {
    state.isHeroListPageLoading = false
    if (Array.isArray(heroes)) {
      state.entities = heroes.reduce((obj, hero) => {
        obj[hero.id] = hero
        return obj
      }, {})
    }
  },
  [UPDATE_HERO_ATTRIBUTE] (state, heroId, attr, newVal) {
    state.entities[heroId].attrs[attr] = newVal
  }
}

export default {
  state,
  mutations
}

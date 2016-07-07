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

// 創建一個 state 物件，用來保存 heroes 的初始資料與狀態
const state = {
  /** Hero List Page 是否顯示 loading 動畫 */
  isHeroListPageLoading: false,
  /** Hero Profile Page 是否顯示 loading 動畫 */
  isHeroProfilePageLoading: false,
  current: {
    /** 當前 hero ID */
    heroId: null,
    /** 當前 hero 數值，例如：{ str: 1, int: 2, ... } */
    profile: {},
    /** 當前 hero 數值總和 */
    totalPoints: 0
  },
  /** heros 集合，以 heroId 作為 key，例如：{ '1': { name: 'hero 1', ... } } */
  entities: {}
}

// 創建一個 mutations 物件，用來保存一系列 heroes 相關的 mutate functions
const mutations = {
  /** 修改當前 hero 的數值 */
  [EDIT_CURRENT_HERO_ATTRIBUTE] (state, heroId, attr, newVal) {
    state.current.profile[attr] = newVal
  },
  /**
   * GET /heroes
   *
   * ERROR: 關閉 Hero List Page loading 動畫
   * START: 開啟 Hero List Page loading 動畫
   * SUCCESS: 關閉 Hero List Page loading 動畫
   *          更新 hero list 資料
   */
  [FETCH_CURRENT_HERO_LIST_ERROR] (state, response) {
    state.isHeroListPageLoading = false
  },
  [FETCH_CURRENT_HERO_LIST_START] (state) {
    state.isHeroListPageLoading = true
  },
  [FETCH_CURRENT_HERO_LIST_SUCCESS] (state, {data: heroes}) {
    state.isHeroListPageLoading = false
    if (Array.isArray(heroes)) {
      // convert heroes Array to KeyValue Map
      // ex:
      // origin: [{id: 1, name: 'hero 1'}, {id: 2, name: 'hero 2'}]
      // result: { '1': {id: 1, name: 'hero 1'}, '2': {id: 2, name: 'hero 2'} }
      state.entities = heroes.reduce((obj, hero) => {
        obj[hero.id] = hero
        return obj
      }, {})
    }
  },
  /**
   * GET /heroes/:heroId/profile
   *
   * ERROR: 關閉 Hero Profile Page loading 動畫
   * START: 開啟 Hero Profile Page loading 動畫
   * SUCCESS: 關閉 Hero Profile Page loading 動畫
   *          設定當前 hero ID
   *          設定當前 hero 數值
   *          設定當前 hero 數值總和
   */
  [FETCH_CURRENT_HERO_PROFILE_ERROR] (state, response) {
    state.isHeroProfilePageLoading = false
  },
  [FETCH_CURRENT_HERO_PROFILE_START] (state) {
    state.isHeroProfilePageLoading = true
  },
  [FETCH_CURRENT_HERO_PROFILE_SUCCESS] (state, {data: profile}, heroId) {
    state.isHeroProfilePageLoading = false
    state.current.heroId = heroId
    state.current.profile = { ...profile }
    state.current.totalPoints = Object.keys(profile).reduce((sum, key) => sum + profile[key], 0)
  },
  /**
   * PATCH /heroes/:heroId/profile
   *
   * ERROR: 關閉 Hero Profile Page loading 動畫
   * START: 開啟 Hero Profile Page loading 動畫
   * SUCCESS: 關閉 Hero Profile Page loading 動畫
   */
  [PATCH_CURRENT_HERO_PROFILE_ERROR] (state, error) {
    state.isHeroProfilePageLoading = false
  },
  [PATCH_CURRENT_HERO_PROFILE_START] (state) {
    state.isHeroProfilePageLoading = true
  },
  [PATCH_CURRENT_HERO_PROFILE_SUCCESS] (state) {
    state.isHeroProfilePageLoading = false
  }
}

export default {
  state,
  mutations
}

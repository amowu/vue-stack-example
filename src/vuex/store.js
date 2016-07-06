import Vuex from 'vuex'

import { Vue } from '../cores'
import heroes from './mutations/heroes'

Vue.use(Vuex)

/** 所有 modules 的 state 統一保存在這個 vuex store */
const store = new Vuex.Store({
  modules: {
    heroes
  }
})

export default store

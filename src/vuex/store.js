import Vue from 'vue'
import Vuex from 'vuex'

import heroes from './mutations/heroes'

Vue.use(Vuex)

/** 所有 modules 的 state 統一保存在這個 vuex store */
const store = new Vuex.Store({
  modules: {
    heroes
  }
})

// Hot Reloading for Vuex
// see more: http://vuex.vuejs.org/en/hot-reload.html
if (module.hot) {
  module.hot.accept(['./mutations/heroes'], () => {
    const heroes = require('./mutations/heroes').default
    store.hotUpdate({
      modules: {
        heroes
      }
    })
  })
}

export default store

import Vuex from 'vuex'

import { Vue } from '../cores'
import heroes from './mutations/heroes'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    heroes
  }
})

export default store

import { Vuex } from '../cores'

import heroes from './mutations/heroes'

const store = new Vuex.Store({
  modules: {
    heroes
  }
})

export default store

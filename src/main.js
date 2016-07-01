import Vue from 'vue'
import VueRouter from 'vue-router'

import App from './App'
import HeroListPage from './components/HeroListPage'

Vue.use(VueRouter)

let router = new VueRouter({
  history: true
})

router.map({
  '/heroes': {
    component: HeroListPage,
  }
})

router.start(App, 'app')

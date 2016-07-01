import Vue from 'vue'
import VueRouter from 'vue-router'

import App from './App'
import HeroListPage from './components/HeroListPage'
import HeroProfilePage from './components/HeroProfilePage'

Vue.use(VueRouter)

let router = new VueRouter({
  history: true
})

router.map({
  '/heroes': {
    component: HeroListPage,
    subRoutes: {
      '/:heroId': {
        name: 'hero',
        component: HeroProfilePage
      }
    }
  }
})

router.redirect({
  '/': '/heroes',
  '*': '/'
})

router.start(App, 'app')

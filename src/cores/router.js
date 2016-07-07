import Vue from 'vue'
import VueRouter from 'vue-router'

import HeroListPage from '../pages/HeroListPage'
import HeroProfilePage from '../pages/HeroProfilePage'

Vue.use(VueRouter)

const router = new VueRouter({
  history: true // 如果你的 server 不支援 HTML5 Histroy API，請設為 false
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
  '*': '/', // redirect all not found paths to root
  '/': '/heroes' // redirect root to /heroes
})

export default router

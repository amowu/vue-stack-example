import { sync } from 'vuex-router-sync'

import router from './cores/router'
import store from './vuex/store'
import App from './App'

// 使用 vuex-router-sync 同步 vue-router 的狀態到 vuex store state
sync(store, router)

router.start(App, 'app')

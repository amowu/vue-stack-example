import { sync } from 'vuex-router-sync'

import router from './cores/router'
import store from './vuex/store'
import App from './App'

sync(store, router)

router.start(App, 'app')

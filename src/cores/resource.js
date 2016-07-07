import Vue from 'vue'
import VueResource from 'vue-resource'

import { API_ENDPOINT_URL } from './config'

Vue.use(VueResource)

// 設定 REST API 的 base URL
Vue.http.options.root = API_ENDPOINT_URL

export default Vue.http

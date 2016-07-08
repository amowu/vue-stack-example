import Vue from 'vue'
import VueResource from 'vue-resource'

Vue.use(VueResource)

// 設定 REST API 的 base URL
Vue.http.options.root = process.env.API_URL

export default Vue.http

// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import ElementUI from 'element-ui'
import Http from '@/plugins/http'
import router from './router'
import moment from 'moment'
import 'element-ui/lib/theme-chalk/index.css'
import '@/assets/index.css'

Vue.config.productionTip = false
Vue.use(Http)
Vue.use(ElementUI)
//全局过滤器
Vue.filter('fmtDate', (v) => {
  return moment(v).format('YYYY-MM-DD')
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

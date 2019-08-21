import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'lib-flexible/flexible'
import store from './store'
import './mockData/mockServer'
Vue.config.productionTip = false


new Vue({
  render: h => h(App),
  router ,//配置路由器
  store
}).$mount('#app')

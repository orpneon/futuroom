import Vue from 'vue'
import App from './App.vue'
import router from './router/'
import store from './store/'
import vueBemCn from 'vue-bem-cn/dist/vue-bem-cn.umd.min'
import VueNoty from 'vuejs-noty'
import 'vuejs-noty/dist/vuejs-noty.css'

Vue.config.productionTip = false
Vue.use(vueBemCn)
Vue.use(VueNoty)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

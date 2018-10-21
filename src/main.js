import Vue from 'vue'
import App from './App.vue'
import router from './router/'
import store from './store/'
import vueBemCn from 'vue-bem-cn/dist/vue-bem-cn.umd.min'
import VueNoty from 'vuejs-noty'
import Vuetify from 'vuetify'

import 'vuejs-noty/dist/vuejs-noty.css'
import 'vuetify/dist/vuetify.min.css'

Vue.config.productionTip = false
Vue.use(vueBemCn)
Vue.use(VueNoty)
Vue.use(Vuetify)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

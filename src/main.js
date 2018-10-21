import Vue from 'vue'
import App from './App.vue'
import router from './router/'
import store from './store/'
import vueBemCn from 'vue-bem-cn/dist/vue-bem-cn.umd.min'
import VueNoty from 'vuejs-noty'
import Vuetify from 'vuetify'

// style
import 'vuejs-noty/dist/vuejs-noty.css'
import 'vuetify/dist/vuetify.min.css'
import 'material-design-icons-iconfont/dist/fonts/material-icons.css'

// polyfills

Vue.config.productionTip = false
Vue.use(vueBemCn)
Vue.use(VueNoty)
Vue.use(Vuetify)


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

import Vue from 'vue'
import Vuex from 'vuex'
import Votes from '@/store/modules/Votes'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {},
  getters: {},
  actions: {},
  mutations: {},
  modules: {
    'votes': Votes
  }
})

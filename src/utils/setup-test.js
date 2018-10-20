import { createLocalVue, mount, shallowMount } from '@vue/test-utils'
import vueBemCn from 'vue-bem-cn/dist/vue-bem-cn.umd.min'
import Vuex from 'vuex'
import Router from 'vue-router'

export function setupTest () {
  const localVue = createLocalVue()

  localVue.use(vueBemCn)
  localVue.use(Router)
  localVue.use(Vuex)

  return {
    shallow (cmp, options = {}) {
      return shallowMount(cmp, {
        ...options,
        localVue
      })
    },

    mount (cmp, options = {}) {
      return mount(cmp, {
        ...options,
        localVue
      })
    }
  }
}

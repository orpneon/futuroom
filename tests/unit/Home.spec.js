import { setupTest } from '@/utils/setup-test'
import Home from '@/views/Home.vue'

const { shallow } = setupTest()

describe('Home.vue', () => {
  it('Component has been rendered', () => {
    const wrapper = shallow(Home, {
      methods: {
        loadVotes: () => {}
      }
    })
    const className = `.${wrapper.vm.$options.name}`

    expect(wrapper.findAll(className).length).toBe(1)
  })
})

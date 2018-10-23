import { setupTest } from '@/utils/setup-test'
import PageHeader from '@/components/PageHeader.vue'

const { shallow } = setupTest()

describe('PageHeader.vue', () => {
  it('Component has been render', () => {
    const wrapper = shallow(PageHeader)
    const className = `.${wrapper.vm.$options.name}`

    expect(wrapper.findAll(className).length).toBe(1)
  })
})

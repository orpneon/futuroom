import { setupTest } from '@/utils/setup-test'
import SingleCard from '@/components/SingleCard.vue'
import voteMock from './../mocks/vote.json'

const { shallow } = setupTest()

describe('SingleCard.vue', () => {
  it('Component has been rendered', () => {
    const wrapper = shallow(SingleCard, {
      propsData: {
        vote: voteMock
      }
    })
    const className = `.${wrapper.vm.$options.name}`

    expect(wrapper.findAll(className).length).toBe(1)
  })
})

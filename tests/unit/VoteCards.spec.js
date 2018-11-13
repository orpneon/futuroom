import { setupTest, generateStore } from '@/utils/setup-test'
import VoteCards from '@/components/VoteCards.vue'
import vote from './../mocks/vote.json'
import VotesModule from '@/store/modules/Votes'

const { shallow } = setupTest()

describe('VoteCards.vue', () => {
  it('Component has been rendered', () => {
    const wrapper = shallow(VoteCards, {
      store: generateStore({
        votes: {
          ...VotesModule,
          state: {
            votes: [vote],
            pagination: { hasMorePages: false }
          }
        }
      })
    })
    const className = `.${wrapper.vm.$options.name}`

    expect(wrapper.findAll(className).length).toBe(1)
  })
})

import { request } from '@/utils/api'

const PER_PAGE = 3

const state = {
  pagination: {},
  votes: []
}

const getters = {
  pagination: state => state.pagination,
  votes: state => state.votes
}

const actions = {
  loadVotes ({ commit }, page) {
    page = page ? { page } : {}
    const params = Object.assign(page, {
      perPage: PER_PAGE,
      expired: true
    })

    request('votes', 'get', params, 'data')
      .then(data => commit('addVotes', data))
  }
}

const mutations = {
  addVotes (state, data) {
    state.pagination = data.pagination
    state.votes.push(data.votes)
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}

import { request } from '@/utils/api'

const PER_PAGE = 3

const state = {
  pagination: {},
  votes: [],
  loading: false
}

const getters = {
  pagination: state => state.pagination,
  votes: state => state.votes,
  hasMorePages: state => state.pagination.hasMorePages
}

const actions = {
  loadVotes ({ commit }, page) {
    page = page ? { page } : {}
    const params = Object.assign(page, {
      perPage: PER_PAGE,
      expired: true
    })

    commit('loading', true)
    request('votes', 'get', params, 'data')
      .then(data => commit('addVotes', data))
      .finally(() => commit('loading', false))
  },

  loadNextPage ({ dispatch, getters }) {
    const nextPage = getters.pagination.currentPage + 1
    return dispatch('loadVotes', nextPage)
  }
}

const mutations = {
  addVotes (state, data) {
    state.pagination = data.pagination
    state.votes.push(...data.votes)
  },

  loading (state, toggle) {
    state.loading = !!toggle
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}

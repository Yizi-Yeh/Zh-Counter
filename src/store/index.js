import { createStore } from 'vuex'
import { apiGetCounterRequest } from '../api'

export default createStore({
  state: {
    counterArr: []
  },
  mutations: {
    init (state, payload) {
      state.counterArr = payload
    }
  },
  actions: {
    // action打完 API 後 commit 到 mutation
    handInit ({ commit }) {
      const res = apiGetCounterRequest()
      return res.then(res => {
        commit('init', res.data.result.counters)
      })
    }
  },
  modules: {

  },
  getters: {
    counterArr (state) {
      return state.counterArr
    }
  }
})

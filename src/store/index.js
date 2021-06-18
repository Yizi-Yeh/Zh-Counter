import { createStore } from 'vuex'
import { apiGetAllCounterRequest } from '../api'

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
    async handInit ({ commit }) {
      try {
        const res = await apiGetAllCounterRequest()
        commit('init', res.data.result.counters)
        return res
      } catch (err) {
        console.log(err.response.data.message)
      }
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

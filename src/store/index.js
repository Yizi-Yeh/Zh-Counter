import { createStore } from 'vuex'

export default createStore({
  state: {
    isLoad: false
  },
  mutations: {
    handisLoad (state, payload) {
      state.isLoad = payload
    }
  },
  actions: {
  },
  modules: {
  },
  getters: {
    isLoad (state) {
      return state.isLoad
    }
  }
})

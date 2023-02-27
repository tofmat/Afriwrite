export const state = () => ({
  counter: 0,
  formerRoute: ''
})

export const mutations = {
  increment(state) {
    state.counter++
  },
  setFormerRoute(state, route){
    state.formerRoute = route
  },
  clearFormerRoute(state){
    state.formerRoute = ''
  }
}

export const actions = {
  setFormerRoute({ commit }, route){
    commit('setFormerRoute', route)
  },
  clearFormerRoute({commit}){
    commit('clearFormerRoute')
  }
}
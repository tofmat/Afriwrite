export const state = () => ({
  allJobs: []
})

export const getters = {
  allJobs(state) {
    return state.allJobs
  },
}

export const mutations = {
  SET_ALLJOBS(state, data){
    state.allJobs = data
  },
}

export const actions = {
  async getAllJobs({commit}){
    try {
        const res = this.$axios.get('/v1/writer/jobs')
        if (res) {
          return Promise.resolve(res)
        }
        commit ('SET_ALLJOBS', response.data)
    } catch (error) {
        commit('SET_ALLJOBS', null)
        return Promise.reject(error.response)
    }
  },
}

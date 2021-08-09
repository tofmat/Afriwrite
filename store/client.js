import axios from 'axios'

export const state = () => ({
  allProposals: []
})

export const getters = {
  allJobs(state) {
    return state.allProposals
  },
}

export const mutations = {
  SET_ALLPROPOSALS(state, data){
    state.allProposals = data
  },
}

export const actions = {
  async getAllProposals({commit}){
    try {
        const res = await this.$axios.get('/v1/client/get-job-proposals')
        if (res) {
          return Promise.resolve(res)
        }
        commit ('SET_ALLPROPOSALS', response.data)
    } catch (error) {
        commit('SET_ALLPROPOSALS', null)
        return Promise.reject(error.response)
    }
  },
}

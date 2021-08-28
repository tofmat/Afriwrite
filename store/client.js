import axios from 'axios'

export const state = () => ({
  allProposals: [],
  allJobs: [],
  allContracts: [],
  allDrafts: []
})

export const getters = {
  allProposals(state) {
    return state.allProposals
  },
  allJobs(state) {
    return state.allJobs
  },
  allDrafts(state) {
    return state.allDrafts
  },
  allContracts(state) {
    return state.allContracts
  }
}

export const mutations = {
  SET_ALLPROPOSALS(state, data){
    state.allProposals = data
  },
  SET_ALLJOBS(state, data){
    state.allJobs = data
  },
  SET_ALLDRAFTS(state, data) {
    state.allDrafts = data
  },
  SET_ALLCONTRACTS(state, data) {
    state.allContracts = data
  }
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
  async getAllJobs({commit}){
    try {
      const res = await this.$axios.get('/v1/client/get-all-jobs')
      if (res) {
        return Promise.resolve(res)
      }
      commit ('SET_ALLJOBS', response.data)
    } catch (error) {
      commit('SET_ALLJOBS', null)
      return Promise.reject(error.response)
    }
  },
  async getAllDrafts({commit}){
    try {
      const res = await this.$axios.get('/v1/client/get-all-drafted-jobs')
      if (res) {
        return Promise.resolve(res)
      }
      commit ('SET_ALLDRAFTS', response.data)
    } catch (error) {
      commit('SET_ALLDRAFTS', null)
      return Promise.reject(error.response)
    }
  },
  async getAllContracts({commit}){
    try {
      const res = await this.$axios.get('/v1/client/get-all-contracts')
      if (res) {
        return Promise.resolve(res)
      }
      commit ('SET_ALLCONTRACTS', response.data)
    } catch (error) {
      commit('SET_ALLCONTRACTS', null)
      return Promise.reject(error.response)
    }
  },
}

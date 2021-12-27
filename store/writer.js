import axios from 'axios'

export const state = () => ({
  allJobs: [],
  singleJob: '',
  savedJobs: [],
  allContracts: [],
  allProposals: [],
  singleProposal: '',
  singleContract: '',
})

export const getters = {
  allJobs(state) {
    return state.allJobs
  },
  singleJob(state) {
    return state.singleJob
  },
  savedJobs(state) {
    return state.savedJobs
  },
  allProposals(state) {
    return state.allProposals
  },
  allContracts(state) {
    return state.allContracts
  },
  singleProposal(state) {
    return state.singleJob
  },
  singleContract(state) {
    return state.singleContract
  },
}

export const mutations = {
  SET_ALLJOBS(state, data){
    state.allJobs = data
  },
  SET_SINGLEJOB (state, data) {
    state.singleJob = data
  },
  SET_SAVEDJOBS (state, data) {
    state.savedJobs = data
  },
  SET_ALLPROPOSALS(state, data){
    state.allProposals = data
  },
  SET_ALLCONTRACTS(state, data) {
    state.allContracts = data
  },
  SET_SINGLEPROPOSAL(state, data) {
    state.singleProposal = data
  },
  SET_SINGLECONTRACT(state, data) {
    state.singleContract = data
  },
}

export const actions = {
  async getAllJobs({commit}){
    try {
        const res = await this.$axios.get('/v1/writer/jobs')
        if (res) {
          return Promise.resolve(res)
        }
        commit ('SET_ALLJOBS', response.data)
    } catch (error) {
        commit('SET_ALLJOBS', null)
        return Promise.reject(error.response)
    }
  },
  async getSingleJob({commit}, data){
    try {
        const res = await this.$axios.get(`/v1/writer/jobs/${data}`)
        if (res) {
          return Promise.resolve(res)
        }
        commit ('SET_SINGLEJOB', response.data)
    } catch (error) {
        commit('SET_SINGLEJOB', null)
        return Promise.reject(error.response)
    }
  },
  async getSavedJobs({commit}){
    try {
        const res = await this.$axios.get(`/v1/writer/jobs/saved/${this.$auth.user.id}`)
        if (res) {
          return Promise.resolve(res)
        }
        commit ('SET_SAVEDJOBS', response.data)
    } catch (error) {
        commit('SET_SAVEDJOBS', null)
        return Promise.reject(error.response)
    }
  },
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
  async getSingleProposal({commit}, data){
    try {
        const res = await this.$axios.get(`/v1/client/get-a-single-job-proposal/${data}`)
        if (res) {
          return Promise.resolve(res)
        }
        commit ('SET_SINGLEPROPOSAL', response.data)
    } catch (error) {
        commit('SET_SINGLEPROPOSAL', null)
        return Promise.reject(error.response)
    }
  },
  async getSingleContract({commit}, data){
    try {
        const res = await this.$axios.get(`/v1/client/approved/job-proposal/${data}`)
        if (res) {
          return Promise.resolve(res)
        }
        commit ('SET_SINGLECONTRACT', response.data)
    } catch (error) {
        commit('SET_SINGLECONTRACT', null)
        return Promise.reject(error.response)
    }
  },
}

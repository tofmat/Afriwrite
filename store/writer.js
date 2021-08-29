import axios from 'axios'

export const state = () => ({
  allJobs: [],
  singleJob: []
})

export const getters = {
  allJobs(state) {
    return state.allJobs
  },
  singleJob(state) {
    return state.singleJob
  }
}

export const mutations = {
  SET_ALLJOBS(state, data){
    state.allJobs = data
  },
  SET_SINGLEJOB (state, data) {
    state.singleJob = data
  }
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
}

import axios from 'axios'

export const state = () => ({
  allProposals: [],
  allJobs: [],
  singleJob: '',
  allContracts: [],
  allDrafts: [],
  singleProposal: '',
  singleContract: '',
  draftedJob: '',
  
})

export const getters = {
  allProposals(state) {
    return state.allProposals
  },
  allJobs(state) {
    return state.allJobs
  },
  singleJob(state) {
    return state.singleJob
  },
  allDrafts(state) {
    return state.allDrafts
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
  draftedJob(state) {
    return state.draftedJob
  },
  getProposalId: (state) => (public_reference_id) => {
    console.log('getProposalId')
    console.log(state.allProposals)
		if(state.allProposals){
			for(let i in state.allProposals){
				if(state.allProposals[i].public_reference_id === public_reference_id){
					return state.allProposals[i].id
				}
			}
		}
	},
}

export const mutations = {
  SET_ALLPROPOSALS(state, data) {
    state.allProposals = data
  },
  SET_ALLJOBS(state, data) {
    state.allJobs = data
  },
  SET_SINGLEJOB(state, data) {
    state.singleJob = data
  },
  SET_ALLDRAFTS(state, data) {
    state.allDrafts = data
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
  SET_DRAFTEDJOB(state, data) {
    state.draftedJob = data
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
  async getSingleJob({commit}, data){
    try {
        const res = await this.$axios.get(`/v1/client/get-a-single-job/${data}`)
        if (res) {
          return Promise.resolve(res)
        }
        commit ('SET_SINGLEJOB', response.data)
    } catch (error) {
        commit('SET_SINGLEJOB', null)
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
  async getDraftedJob({commit}, data){
    try {
        const res = await this.$axios.get(`/v1/client/get-a-single-drafted-job/${data}`)
        if (res) {
          return Promise.resolve(res)
        }
        commit ('SET_DRAFTEDJOB', response.data)
    } catch (error) {
        commit('SET_DRAFTEDJOB', null)
        return Promise.reject(error.response)
    }
  },
  
}

import{
  RECEIVE_HOME
} from '../mutations-types'

import{
  reqHome
}from '../../api'

const state = {
  homedata:{},
}

const mutations = {
  [RECEIVE_HOME](state,{homedata}){
    state.homedata = homedata
  },
}

const actions = {
  async getHome({commit}){
    const result = await reqHome()
    console.log(result)
    const homedata = result.data
    commit(RECEIVE_HOME,{homedata})
  },
}

const getters = {}

export default {
  state,
  mutations,
  actions,
  getters
}
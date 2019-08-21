import{
  RECEIVE_CATEGORYS
} from '../mutations-types'

import{
  reqCategorys
} from '../../api'

const state = {
  categorydata : {}
}

const mutations = {
  [RECEIVE_CATEGORYS](state,{categorydata}){
    state.categorydata = categorydata
  },
}

const actions = {
  async getcategory({commit}){
    const result = await reqCategorys
    const categorydata = result.data
    commit(RECEIVE_CATEGORYS,{categorydata})
  },
}
const getters = {}

export default{
  state,
  mutations,
  actions,
  getters
}


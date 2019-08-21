import{
  RECEIVE_HOME
}from './mutations-types'


import{
  reqHome
} from '../api/index.js'


export default{
  async getHome({commit}){
    const result = await reqHome()
    console.log(result)
    const homedata = result.data
    commit(RECEIVE_HOME,{homedata})
  },
 
}

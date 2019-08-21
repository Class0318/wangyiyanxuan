import Vue from 'vue'
import Vuex from 'vuex'


import mutations from './mutations'
import actions from './actions'
import getters from './getters'
import msite from './modules/msite'
import category from './modules/category'
import search from './modules/search'




Vue.use(Vuex)

export default new Vuex.Store({
  mutations,
  actions,
  getters,
  modules:{//vuex多模块编程
    msite:msite,
    category:category,
    search:search
  }
})


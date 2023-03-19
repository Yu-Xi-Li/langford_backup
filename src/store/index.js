import Vue from 'vue'
import Vuex from 'vuex'
import tab from './tab.js'

Vue.use(Vuex) 

export default new Vuex.Store({
  state: {
    headerName: '首页'
  },
  mutations: {
    isHeaderName(state,value){
      state.headerName = value
    }
  },
  actions: {

  },
  modules: {
    tab
  }
})

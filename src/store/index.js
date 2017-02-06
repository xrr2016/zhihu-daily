import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex)

const store = new Vuex.Store({
  state:{
    msg : "hello from vuex"
  },
  getters:{},
  mutations:{},
  actions:{}
})

export default store

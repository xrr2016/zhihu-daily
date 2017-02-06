import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex)

const store = new Vuex.Store({
  state:{
    stories:{},
    themes:{},
    hotStories:{}
  },
  getters:{},
  mutations:{},
  actions:{
    
  }
})

export default store

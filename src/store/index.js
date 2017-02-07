import Vue from 'vue'
import Vuex from 'vuex'
// import axios from 'axios'
//
const jsonBird = "https://bird.ioliu.cn/v1/?url="
const zhihuAPI = "http://news-at.zhihu.com/api/4/news"
// const doubanAPI = "https://api.douban.com/v2"
// axios.defaults.timeout = 4000
// // axios.default.baseURL = jsonBird + zhihuAPI
// axios.defaults.baseURL = jsonBird + doubanAPI
// console.log(axios.defaults.baseURL)

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    nightMode : false,
    API : jsonBird + zhihuAPI
  },
  getters: {

  },
  mutations: {
    changeMode(state){
      state.nightMode = !state.nightMode
    }
  },
  actions: {
    toggleMode({ commit }){
      commit('changeMode',{})
    }
  }
})

export default store

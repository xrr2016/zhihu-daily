import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

const jsonBird = "https://bird.ioliu.cn/v1/?url="
const zhihuAPI = "http://news-at.zhihu.com/api/4/news"
const doubanAPI = "https://api.douban.com/v2"
axios.defaults.timeout = 4000
// axios.default.baseURL = jsonBird + zhihuAPI
axios.defaults.baseURL = jsonBird + doubanAPI
console.log(axios.defaults.baseURL)

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    latestStories: [],
    themes: [],
    hotStories: [],
    movies:[]
  },
  getters: {
    latestStories(state){
      return state.latestStories
    },
    movies(state){
      return state.movies
    }
  },
  mutations: {
    setLatestStories(state, latestStories) {
      state.latestStories = latestStories
    },
    setMovies(state,payload){
      state.movies = payload.movies
    }
  },
  actions: {
    loadLatestStories({ commit }) {
      axios.get('/latest')
        .then(response => {
          console.log(response);
          commit('setLatestStories', {
            latestStories: response.data.stories
          })
        })
        .catch(e => console.dir(e))
    },
    loadMovies( {commit} ){
      axios.get('/movie/in_theaters')
           .then(res => {
             console.dir(res)
             commit('setMovies',{
               movies : res.data.subjects
             })
           })
           .catch(e => console.log(e))
    }
  }
})

export default store

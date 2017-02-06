import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios'

const zhihuAPI = "http://news-at.zhihu.com/api/4/news";
axios.default.timeout = 4000;
axios.default.baseURL = zhihuAPI

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    latestStories: [],
    themes: [],
    hotStories: []
  },
  getters: {
    latestStories(state){
      return state.latestStories
    }
  },
  mutations: {
    setLatestStories(state, latestStories) {
      state.latestStories = latestStories
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
        .catch(err => console.dir(err));
    }
  }
})

export default store

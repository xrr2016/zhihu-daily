import Vue from 'vue'
import Vuex from 'vuex'
import {addLocalStory, removeLocalStory, clearLocalStories} from './localStore'
// const jsonBird = 'https://bird.ioliu.cn/v1/?url='
// const zhihuAPI = 'http://news-at.zhihu.com/api/4/news'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    favorites: []
  },
  getters: {
    getFavorites (state) {
      return state.favorites
    },
    getFavoritesReverse (state) {
      return state.favorites.reverse()
    }
  },
  mutations: {
    addStory (state, payload) {
      state.favorites.push(payload.story)
      addLocalStory(payload.story)
    },
    removeStory (state, payload) {
      let storyIndex = state.favorites.findIndex(story => {
        return story.id === payload.story.id
      })
      state.favorites.splice(storyIndex, 1)
      removeLocalStory(payload.story)
    },
    clearFavoriteStorie (state) {
      state.favorites.length = 0
      clearLocalStories()
    },
    getFavoritesStoryNum (state) {
      return state.favorites.length
    }
  },
  actions: {
    addFavoriteStory ({commit}, story) {
      commit('addStory', { story })
    },
    removeFavoriteStory ({commit}, story) {
      commit('removeStory', { story })
    },
    clearFavoriteStorie ({commit}) {
      commit('clearStories')
    },
    getFavoritesStoryNum ({commit}) {
      commit('getStoriesNum')
    }
  }
})

export default store

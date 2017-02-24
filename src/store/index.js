import Vue from 'vue'
import Vuex from 'vuex'
import {addLocalStory, removeLocalStory, clearLocalStories} from './localStore'

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
    },
    getFavoritesStoryNum (state) {
      return state.favorites.length
    }
  },
  mutations: {
    addStory (state, story) {
      state.favorites.push(story)
      addLocalStory(story)
    },
    removeStory (state, story) {
      let storyIndex = state.favorites.findIndex(story => {
        return story.id === story.id
      })
      state.favorites.splice(storyIndex, 1)
      removeLocalStory(story)
    },
    clearStories (state) {
      state.favorites.length = 0
      clearLocalStories()
    },
    loadLocalStories (state) {
      for (let key in window.localStorage) {
        state.favorites[key] = JSON.parse(window.localStorage.getItem(key))
      }
    }
  },
  actions: {
    addFavoriteStory ({commit}, story) {
      commit('addStory', story)
    },
    removeFavoriteStory ({commit}, story) {
      commit('removeStory', story)
    },
    clearFavoriteStorie ({commit}) {
      commit('clearStories')
    },
    getLocalFavoriteStories ({commit}) {
      commit('loadLocalStories')
    }
  }
})

export default store

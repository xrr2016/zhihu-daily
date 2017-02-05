import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import index from '../subjects/index'
import psychology from '../subjects/psychology'
import recommend from '../subjects/recommend'
import movie from '../subjects/movie'
import notBoring from '../subjects/notBoring'
import design from '../subjects/design'
import bigCompany from '../subjects/bigCompany'
import finance from '../subjects/finance'
import internet from '../subjects/internet'
import game from '../subjects/game'
import music from '../subjects/music'
import anime from '../subjects/anime'
import sports from '../subjects/sports'

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/psychology',
      name: 'psychology',
      component: psychology
    },
    {
      path: '/recommend',
      name: 'recommend',
      component: recommend
    },
    {
      path: '/movie',
      name: 'movie',
      component: movie
    },
    {
      path: '/notBoring',
      name: 'notBoring',
      component: notBoring
    },
    {
      path: '/design',
      name: 'design',
      component: design
    },
    {
      path: '/bigCompany',
      name: 'bigCompany',
      component: bigCompany
    },
    {
      path: '/finance',
      name: 'finance',
      component: finance
    },
    {
      path: '/internet',
      name: 'internet',
      component: internet
    },
    {
      path: '/game',
      name: 'game',
      component: game
    },
    {
      path: '/music',
      name: 'music',
      component: music
    },
    {
      path: '/anime',
      name: 'anime',
      component: anime
    },
    {
      path: '/sports',
      name: 'sports',
      component: sports
    },
    {
      path:'*',
      component:index
    }
  ]
})

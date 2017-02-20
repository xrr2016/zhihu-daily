import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import index from '../views/index'
import psychology from '../views/psychology'
import recommend from '../views/recommend'
import movie from '../views/movie'
import notBoring from '../views/notBoring'
import design from '../views/design'
import bigCompany from '../views/bigCompany'
import finance from '../views/finance'
import internet from '../views/internet'
import game from '../views/game'
import music from '../views/music'
import anime from '../views/anime'
import sports from '../views/sports'

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

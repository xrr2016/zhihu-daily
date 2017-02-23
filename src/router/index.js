import Vue from 'vue'
import Router from 'vue-router'
import latest from '../components/latest'
import subject from '../components/subject'
import story from '../components/story'
import favorites from '../components/favorites'

Vue.use(Router)
const routes = [
  {path: '/', name: 'index', component: latest},
  {path: '/subject/:id', name: 'subject', component: subject},
  {path: '/story/:id', name: 'story', component: story},
  {path: '/favorites', name: 'favorites', component: favorites},
  {path: '*', redirect: '/'}
]

export default new Router({
  routes
})

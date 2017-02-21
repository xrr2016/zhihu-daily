import Vue from 'vue'
import Router from 'vue-router'
import latest from '../components/latest'
import subject from '../components/subject'
import story from '../components/story'

Vue.use(Router)
const routes = [
  {path: '/', component: latest},
  {path: '/subject/:id', component: subject},
  {path: '/story/:id', component: story},
  {path: '*', redirect: '/'}
]

export default new Router({
  routes
})

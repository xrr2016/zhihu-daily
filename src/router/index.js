import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import Navbar from 'components/Navbar'
import Index from 'components/Index'
import Story from 'components/Story'

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path:'/story',
      name:'story',
      component:Story
    },
    {
      path:'*',
      component:Index
    }
  ]
})

import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import Navbar from 'components/Navbar'

export default new Router({
  routes: [
    {
      path: '/',
      name: 'navbar',
      component: Navbar
    }
  ]
})

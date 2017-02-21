import Vue from 'vue'
import App from './App'
import axios from 'axios'
import toastr from 'toastr'
// import $ from 'jquery'
import router from './router'
import store from './store'
import './assets/material.font.css'
import 'materialize-css/dist/js/materialize.min.js'
import 'materialize-css/dist/css/materialize.min.css'

Vue.prototype.$http = axios
Vue.filter('imageUrlPrefix', (value) => {
  const url = value.substr(7)
  const prefix = 'https://images.weserv.nl/?url='
  return prefix + url
})

new Vue({
  created () {
    toastr.success('I do not think that word means what you think it means.')
  },
  router,
  store,
  render: h => h(App)
}).$mount('#app')

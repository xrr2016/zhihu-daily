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
Vue.filter('routeName', (id) => {
  let themeId = '' + id
  switch (themeId) {
    case '13':
      return '日常心里学'
    case '12':
      return '用户推荐日报'
    case '11':
      return '不许无聊'
    case '10':
      return '互联网安全'
    case '9':
      return '动漫日报'
    case '8':
      return '体育日报'
    case '7':
      return '音乐日报'
    case '6':
      return '财经日报'
    case '5':
      return '大公司日报'
    case '4':
      return '设计日报'
    case '3':
      return '电影日报'
    case '2':
      return '开始游戏'
    default:
      return '首页'
  }
})

new Vue({
  created () {
    toastr.success('I do not think that word means what you think it means.')
  },
  router,
  store,
  render: h => h(App)
}).$mount('#app')

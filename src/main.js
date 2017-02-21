import Vue from 'vue'
import App from './App'
import axios from 'axios'
import toastr from 'toastr'
import $ from 'jquery'
import router from './router'
import store from './store'
import './assets/material.font.css'
import 'materialize-css/dist/css/materialize.css'

Vue.prototype.$http = axios
Vue.filter('routeFormat', (value) => {
  switch (value) {
    case 'index':
      return '首页'
    case 'psychology':
      return '日常心里学'
    case 'recommend':
      return '用户推荐日报'
    case 'movie':
      return '电影日报'
    case 'notBoring':
      return '不许无聊'
    case 'design':
      return '设计日报'
    case 'bigCompany':
      return '大公司日报'
    case 'finance':
      return '财经日报'
    case 'internet':
      return '互联网安全'
    case 'game':
      return '开始游戏'
    case 'music':
      return '音乐日报'
    case 'anime':
      return '动漫日报'
    case 'sports':
      return '体育日报'
    default:
      return '首页'
  }
})
Vue.filter('imageUrlPrefix', (value) => {
  const url = value.substr(7)
  const prefix = 'https://images.weserv.nl/?url='
  return prefix + url
})

new Vue({
  created () {
    console.log($)
    toastr.success('I do not think that word means what you think it means.')
  },
  router,
  store,
  render: h => h(App)
}).$mount('#app')

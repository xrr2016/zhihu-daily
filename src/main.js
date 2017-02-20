import Vue from 'vue'
import App from './App'
import axios from 'axios'
import router from './router'
import store from './store'

Vue.prototype.$http = axios
Vue.filter('routeFormat', (value) => {
  switch (value) {
    case 'index':
      return "首页"
      break;
    case 'psychology':
      return "日常心里学"
      break;
    case 'recommend':
      return "用户推荐日报"
      break;
    case 'movie':
      return "电影日报"
      break;
    case 'notBoring':
      return "不许无聊"
      break;
    case 'design':
      return "设计日报"
      break;
    case 'bigCompany':
      return "大公司日报"
      break;
    case 'finance':
      return "财经日报"
      break;
    case 'internet':
      return "互联网安全"
      break;
    case 'game':
      return "开始游戏"
      break;
    case 'music':
      return "音乐日报"
      break;
    case 'anime':
      return "动漫日报"
      break;
    case 'sports':
      return "体育日报"
      break;
    default:
      return "首页"
  }
})
Vue.filter('imageUrlPrefix',(value) => {
  const url = value.substr(7)
  const prefix = "https://images.weserv.nl/?url="
  return prefix + url
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

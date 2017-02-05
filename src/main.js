import Vue from 'vue'
import App from './App'
import router from './router'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.css'
import './assets/material.font.css'

Vue.use(VueMaterial)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

<template>
  <div id="app">
    <app-navbar></app-navbar>
    <!-- <router-view></router-view> -->
  </div>
</template>

<script>
import Navbar from './components/Navbar'
export default {
  name: 'app',
  components:{
    "app-navbar" : Navbar
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: #f4f4f4;
}
</style>

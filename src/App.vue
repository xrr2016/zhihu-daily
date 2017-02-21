<template>
    <div id="app" class="row">
      <app-navbar></app-navbar>
      <router-view></router-view>
</template>

<script>
import navbar from './components/navbar'
export default {
  name: 'app',
  components:{
    "app-navbar" : navbar
  }
}
</script>

<style lang="scss">
#app {
  font-family: Roboto,'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: #f4f4f4;
}
</style>

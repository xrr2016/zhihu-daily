<template>
    <div id="app" class="row">
      <app-navbar></app-navbar>
      <transition name="fade">
        <router-view></router-view>
      </transtion>
      <app-footer></app-footer>
    </div>
</template>

<script>
import navbar from './components/navbar'
import footer from './components/footer'
export default {
  name: 'app',
  components:{
    "app-navbar" : navbar,
    "app-footer" : footer
  }
}
</script>

<style lang="scss">
  html,body{
    height: 100%;
    background-color: #f4f4f4;
    ::selection{
        color: #ba68c8;
        background-color: #fff;
    }
    #app {
      margin: 0;
      font-family: Roboto,'Avenir', Helvetica, Arial, sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      .fade-enter-active, .fade-leave-active {
        transition: opacity .5s
      }
      .fade-enter, .fade-leave-active {
        opacity: 0
      }
      .app-loading{
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        margin: auto;
      }
    }
  }
</style>

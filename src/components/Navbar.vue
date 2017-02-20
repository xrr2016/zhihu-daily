<template>
  <div class="navbar-fixed">
    <nav class="nav purple lighten-2">
      <div class="nav-wrapper">
        <!-- <a href="/" class="brand-logo">Logo</a> -->
        <router-link to='/' class="left brand-logo">
          <img class="app-logo" :src="logo" alt="知乎日报">
        </router-link>
        <span class="brand-logo center app-route-name">首页</span>
        <a class="right" href="">
          <img class="app-github" :src="github" alt="Github">
        </a>
      </div>
    </nav>
  </div>
</template>

<script>
import logo from  '../assets/imgs/brand.png'
import github from  '../assets/imgs/github.svg'
export default {
  name: 'navbar',
  data () {
    return {
      logo,
      github
    }
  },
  computed:{},
  methods:{}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.nav{
  // background-color: rgb(171, 71, 188);
  .app-logo{
    padding: 12px;
    height: 60px;
  }
  .app-route-name{
    font-size: 20px;
  }
  .app-github{
    padding: 12px;
    height: 60px;
  }
}
</style>

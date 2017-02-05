<template>
  <div class="navbar">
    <!-- 导航栏 -->
     <md-toolbar>
       <md-button class="md-icon-button" @click="toggleSideNav">
         <md-icon>menu</md-icon>
       </md-button>
       <h2 class="md-title" style="flex: 1">知乎日报</h2>
       <p>{{msg}}</p>
    </md-toolbar>
    <!-- 侧边栏 -->
    <md-sidenav class="md-left" ref="leftSidenav">
      <md-list>
       <md-list-item>
         <router-link to="/">首页</router-link>
       </md-list-item>
       <md-list-item>
         <router-link to="/psychology">日常心理学</router-link>
       </md-list-item>
       <md-list-item>
         <router-link to="/recommend">用户推荐日报</router-link>
       </md-list-item>
       <md-list-item>
         <router-link to="/movie">电影日报</router-link>
       </md-list-item>
       <md-list-item>
         <router-link to="/notBoring">不许无聊</router-link>
       </md-list-item>
       <md-list-item>
         <router-link to="/design">设计日报</router-link>
       </md-list-item>
       <md-list-item>
         <router-link to="/bigCompany">大公司日报</router-link>
       </md-list-item>
       <md-list-item>
         <router-link to="/finance">财经日报</router-link>
       </md-list-item>
       <md-list-item>
         <router-link to="/internet">互联网安全</router-link>
       </md-list-item>
       <md-list-item>
         <router-link to="/game">开始游戏</router-link>
       </md-list-item>
       <md-list-item>
         <router-link to="/music">音乐日报</router-link>
       </md-list-item>
       <md-list-item>
         <router-link to="/anime">动漫日报</router-link>
       </md-list-item>
       <md-list-item>
         <router-link to="/sports">体育日报</router-link>
       </md-list-item>
   </md-sidenav>
  </div>
</template>

<script>
export default {
  name: 'navbar',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods:{
    toggleSideNav(){
      this.$refs.leftSidenav.toggle()
    },
    closeSideNav(){
      console.log('closeSideNav');
      this.$refs.leftSidenav.close()
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>

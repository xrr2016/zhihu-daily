<template>
  <div class="navbar">
     <md-toolbar>
       <md-button class="md-icon-button" @click="toggleSideNav">
         <md-icon class="md-primary">menu</md-icon>
       </md-button>
       <h2 class="md-title" style="flex: 1">知乎日报</h2>
       <p>{{msg}}</p>
    </md-toolbar>
    <!-- sidenav -->
    <md-sidenav class="md-left" ref="leftSidenav">
      <md-list>
       <md-list-item>
         <router-link to="/">首页</router-link>
       </md-list-item>
       <md-list-item>
         <router-link to="/story">主题</router-link>
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
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="css" scoped>
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

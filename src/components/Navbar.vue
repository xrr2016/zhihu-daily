<template>
  <div class="navbar">
     <md-toolbar>
       <md-button class="md-icon-button" @click="toggleSideNav">
         <md-icon class="md-primary">menu</md-icon>
       </md-button>
       <h2 class="md-title" style="flex: 1">知乎日报</h2>
       <md-menu md-align-trigger>
        <md-button md-menu-trigger>Align trigger</md-button>
          <md-menu-content>
            <md-menu-item>My Item 1</md-menu-item>
            <md-menu-item>My Item 2</md-menu-item>
            <md-menu-item>My Item 3</md-menu-item>
          </md-menu-content>
        </md-menu>
       <p>{{msg}}</p>
    </md-toolbar>
    <!-- sidenav -->
    <md-sidenav class="md-left" ref="leftSidenav">
      <md-list>
       <md-list-item @click="closeSideNav">
         <router-link to="/">首页</router-link>
       </md-list-item>
       <md-list-item @click="closeSideNav">
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

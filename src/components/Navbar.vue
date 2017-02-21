<template>
  <div class="navbar">
    <div class="navbar-fixed">
        <nav class="nav purple lighten-2">
          <div class="nav-wrapper">
            <router-link to='/' class="left brand-logo">
              <img class="app-logo" :src="logo" alt="知乎日报">
            </router-link>
            <span class="brand-logo center app-route-name">首页</span>
            <a href="#" class="right dropdown-button waves-effect waves-light" data-activates="subjects">
              主题日报<i class="material-icons right">arrow_drop_down</i></a>
          </div>
        </nav>
    </div>
    <ul id="subjects" class="dropdown-content">
      <li class="waves-effect waves-light" v-for="subject of subjects">
        <router-link :to="subject.route">{{ subject.name }}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
  import $ from 'jquery'
  import logo from  '../assets/imgs/brand.png'
  import github from  '../assets/imgs/github.svg'

  export default {
    name: 'navbar',
    data () {
      return {
        subjects :[
          { name: '首页',route: '/'},
          { name: '日常心里学',route: '/subject/psychology'},
          { name: '用户推荐日报',route: '/subject/recommended'},
          { name: '电影日报',route: '/subject/movie'},
          { name: '不许无聊',route: '/subject/notbored'},
          { name: '设计日报',route: '/subject/design'},
          { name: '大公司日报',route: '/subject/company'},
          { name: '财经日报',route: '/subject/financial'},
          { name: '开始游戏',route: '/subject/game'},
          { name: '音乐日报',route: '/subject/music'},
          { name: '动漫日报',route: '/subject/anime'},
          { name: '体育日报',route: '/subject/sports'}
        ],
        logo,
        github
      }
    },
    computed:{},
    methods:{
      getSubjects(){
        // this.$http('/api/')

      }
    },
    mounted(){}
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  .navbar{
    // background-color: rgb(171, 71, 188);
    .app-logo{
      padding: 12px;
      height: 60px;
      padding-left: 60px;
      // &:hover{
      //   opacity: .8;
      //   background-color: #ba68c8;
      // }
    }
    .app-route-name{
      font-size: 22px;
    }
    .dropdown-button{
      display: block;
      font-size: 16px;
      padding-right: 90px;
    }
    // .app-github{
    //   padding: 12px;
    //   height: 60px;
    // }
  }
</style>

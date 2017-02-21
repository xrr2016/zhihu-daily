<template>
  <div class="navbar">
    <div class="navbar-fixed">
        <nav class="nav purple lighten-2">
          <div class="nav-wrapper">
            <router-link to='/' class="left brand-logo">
              <img class="app-logo" :src="logo" alt="知乎日报" title="首页">
            </router-link>
            <span class="brand-logo center app-route-name">
              {{ routeName }}
            </span>
            <a href="#" class="right dropdown-button waves-effect waves-light" data-activates="subjects">
              主题日报<i class="material-icons right">arrow_drop_down</i>
            </a>
          </div>
        </nav>
    </div>
    <ul id="subjects" class="dropdown-content">
      <li class="waves-effect waves-light" v-for="subject of subjects">
        <router-link class="app-route-link" :title="subject.description"
        :to="{name: 'subject', params: {id: subject.id}}">{{ subject.name }}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
  import $ from 'jquery'
  import logo from  '../assets/imgs/brand.png'

  export default {
    name: 'navbar',
    created(){
      this.getSubjects()
    },
    data () {
      return {
        subjects :[],
        logo
      }
    },
    computed: {
      routeName(){
        switch (this.$route.params.id) {
          case '13':
            return '日常心里学'
          case '12':
            return '用户推荐日报'
          case '3':
            return '电影日报'
          case '11':
            return '不许无聊'
          case '4':
            return '设计日报'
          case '5':
            return '大公司日报'
          case '6':
            return '财经日报'
          case '10':
            return '互联网安全'
          case '2':
            return '开始游戏'
          case '7':
            return '音乐日报'
          case '9':
            return '动漫日报'
          case '8':
            return '体育日报'
          default:
            return '首页'
        }
      }
    },
    methods: {
      getSubjects(){
        this.$http('/api/4/themes')
            .then(res => {
              this.subjects = res.data.others
            })
            .catch(e => {
              console.log(e)
            })
      }
    },
    mounted(){}
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  .navbar{
    .app-logo{
      padding: 12px;
      height: 60px;
      padding-left: 60px;
      // &:hover{
      //   opacity: .8;
      //   background-color: #ba68c8;
      // }
    }
    .app-route-link{
      color: #ba68c8;
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

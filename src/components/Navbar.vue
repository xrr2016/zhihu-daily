<template>
  <div class="navbar">
    <div class="navbar-fixed">
        <nav class="nav purple lighten-2">
          <div class="nav-wrapper">
            <router-link to='/' class="left brand-logo">
              <img class="app-logo" :src="logo" alt="知乎日报" title="首页">
            </router-link>
            <!-- route-name -->
            <span class="brand-logo center app-route-name" v-if="this.$route.name === 'favorites'">
            共计: {{ this.$store.getters.getFavoritesStoryNum }}
            </span>
            <span class="brand-logo center app-route-name" v-else-if="this.$route.name === 'hot'">
              热门文章
            </span>
            <span class="brand-logo center app-route-name" v-else>
              {{ this.$route.params.id | routeName }}
            </span>
            <!-- 右导航 -->
            <ul id="nav-mobile" class="right">
              <li><a class="dropdown-button" data-activates="subjects">主题日报</button></li>
              <li><a class="dropdown-button" data-activates="others">
                <i class="material-icons">more_vert</i></a>
              </li>
            </ul>
            <ul id="others" class="dropdown-content">
              <li class="waves-effect waves-light"><router-link class="app-route-link" to="/favorites">我的收藏</router-link></li>
              <li class="waves-effect waves-light"><router-link class="app-route-link" to="/hot">热门文章</router-link></li>
            </ul>
            <ul id="subjects" class="dropdown-content">
              <li class="waves-effect waves-light" v-for="subject of subjects">
                <router-link class="app-route-link" :title="subject.description"
                :to="{name: 'subject', params: {id: subject.id}}">{{subject.name}}</router-link>
              </li>
            </ul>
          </div>
        </nav>
    </div>
  </div>
</template>

<script>
  import logo from  '../assets/imgs/brand.png'
  export default {
    name: 'navbar',
    created (){
      this.getSubjects()
    },
    data () {
      return {
        subjects :[{id : 1,name : '首页',description : '知乎日报'}],
        logo
      }
    },
    methods: {
      getSubjects(){
        this.$http('/api/4/themes')
            .then(res => {
              res.data.others.map(subject => {
                this.subjects.push(subject)
              })
            })
            .catch(e => {
              console.log(e)
            })
      }
    }
  }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  .navbar{
    .app-logo{
      padding: 12px;
      height: 60px;
      padding-left: 60px;
    }
    .app-route-link{
        padding: 14px 14px;
        color: #ba68c8;
        letter-spacing: 1px;
    }
    .app-route-name{
      font-size: 22px;
    }
    .dropdown-button,.app-favorites{
      padding: 0 36px;
      font-size: 16px;
      letter-spacing: 1px;
    }
  }
</style>

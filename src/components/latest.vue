<template lang="html">
  <div class="container latest">
    <div class="preloader-wrapper big active app-loading" v-if="loading">
      <div class="spinner-layer spinner-blue">
        <div class="circle-clipper left">
          <div class="circle"></div>
        </div><div class="gap-patch">
          <div class="circle"></div>
        </div><div class="circle-clipper right">
          <div class="circle"></div>
        </div>
      </div>
    </div>
    <div class="row top-stories-list" v-else>
      <!-- top_stories -->
      <router-link class="col l4 m12 s12 top-story-item"
          :to="{name: 'story', params: {id: topStory.id }}" v-for="topStory of topStories">
          <div class="card hoverable">
            <div class="card-image">
              <img :src="topStory.image | imageUrlPrefix">
              <span class="card-title">{{ topStory.title }}</span>
            </div>
          </div>
      </router-link>
      <div class="divider"></div>
      <div class="col l12 m12 s12">
        <nav class="purple lighten-2">
         <div class="nav-wrapper app-change-date">
           <i class="left large material-icons app-date-prev" @click="prev">keyboard_arrow_left</i>
           <span class="brand-logo center flow-text app-date">{{ this.date }}</span>
           <i class="right large material-icons app-date-next" @click="next">keyboard_arrow_right</i>
         </div>
       </nav>
      </div>
      <!-- stories -->
      <div class="stories-list">
          <router-link class="col l10 m10 s10 story-item"
            :to="{name: 'story', params: {id: story.id }}" v-for="story of stories">
            <div class="card horizontal hoverable">
              <div class="card-image"><img :src="story.images[0] | imageUrlPrefix"></div>
              <div class="card-stacked">
                <div class="card-content"><p class="flow-text">{{ story.title }}</p></div>
              </div>
            </div>
          </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  created(){
    this.getLatest()
  },
  data(){
    return {
      date: null,
      stories: [],
      topStories: [],
      loading: true
    }
  },
  watch: {
    'date': 'getStoriesBydate'
  },
  methods:{
    getLatest(){
      this.$http.get(`${this.$url}/api/4/news/latest`)
                .then(res => {
                    this.date = parseInt(res.data.date, 10) + 1
                    this.stories = res.data.stories
                    this.topStories = res.data.top_stories
                    this.loading = false
                })
                .catch(e => {
                  console.log(e)
                })
    },
    getStoriesBydate(){
      const date = new Date().getDate()
      if (parseInt(('' + this.date).slice(-2)) > date) {
        return
      } else {
        this.$http.get(`${this.$url}/api/4/news/before/${this.date}`)
                      .then(res => {
                          this.stories = res.data.stories
                      })
                      .catch(e => {
                        console.log(e)
                    })
      }
    },
    prev(){
      this.date -= 1
    },
    next(){
      this.date += 1
    }
  }
}
</script>

<style lang="scss" scoped>
  .latest{
    position: relative;
    min-height: 100vh;
    padding-bottom: 50px;
    .top-stories-list,.stories-list{
      position: relative;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
      align-items: center;
      .top-story-item,.story-item{
        color: #ba68c8;
        flex: 1 0 auto;
      }
    }
    .app-change-date{
      display: flex;
      justify-content: space-around;
      .app-date-prev,.app-date-next{
        display: block;
        width: 100px;
        cursor: pointer;
        text-align: center;
      }
      .app-date-prev{
        margin-right: -270px;
      }
      .app-date-next{
        margin-left: -270px;
      }
    }
  }
</style>

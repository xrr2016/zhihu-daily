<template lang="html">
  <div class="container story">
    <!-- preloader -->
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
    <!-- content -->
    <div class="row" v-else>
        <!-- content-image -->
        <div class="col l12 s12 m12" v-if="!!story.image">
          <div class="card">
            <div class="card-image">
              <img  class ="story-image" :src="story.image | imageUrlPrefix">
              <span class="card-title flow-text">{{ story.title }}</span>
            </div>
          </div>
        </div>
        <div class="divider" v-else></div>
        <!-- content-body -->
        <div class="col l12 s12 m12" v-html="storyBody"></div>
        <!-- long-comments -->
        <div class="col l12 s12 m12">
            <div class="card-panel" v-for="comment of longComments">
                <div class="card-header">
                  <img :src="comment.avatar | imageUrlPrefix">
                  <i class="material-icons">account_circle</i>
                  <span>{{ comment.author }}</span>
                  <i class="material-icons">thumb_up</i>
                  <span>{{ comment.likes }}</span>
                </div>
                <p class="flow-text comment-content">{{ comment.content }}</p>
            </div>
        </div>
        <!-- short-comments -->
        <div class="col l12 s12 m12" v-for="comment of shortComments">
            <div class="card-panel">
              <p>
                  <img :src="comment.avatar | imageUrlPrefix">
                  <i class="material-icons">account_circle</i>
                  <span>{{ comment.author }}</span>
                  <i class="material-icons">thumb_up</i>
                  <span>{{ comment.likes }}</span>
              </p>
              <p class="flow-text comment-content">{{ comment.content }}</p>
            </div>
        </div>
        <!-- actions -->
        <div class="story-actions">
           <a class="btn-floating btn-large waves-effect waves-light purple lighten-2" @click="removeFavoriteStory" v-if="favorite"><i class="material-icons">favorite</i></a>

           <a class="btn-floating btn-large waves-effect waves-light purple lighten-2" @click="addFavoriteStory" v-else="favorite"><i class="material-icons">favorite_border</i></a>

           <a class="btn-floating btn-large waves-effect waves-light purple lighten-2"><i class="material-icons">keyboard_return</i></a>
        </div>
     </div>
  </div>
</template>

<script>
export default {
  created() {
    this.getStory(this.$route.params.id)
  },
  data() {
    return {
      story: {},
      longComments: [],
      shortComments: [],
      loading: true,
      favorite: false
    }
  },
  methods: {
    getStory(storyId) {
      this.$http.get(`/api/4/news/${storyId}`)
                .then(res => {
                  this.story = res.data
                  this.getLongComments(this.$route.params.id)
                })
                .catch(e => {
                  console.log(e)
                })
    },
    getLongComments(storyId) {
      this.$http.get(`/api/4/story/${storyId}/long-comments`)
                .then(res => {
                  this.longComments = res.data.comments
                  this.getShortComments(this.$route.params.id)
                })
                .catch(e => {
                  console.log(e)
                })
    },
    getShortComments(storyId) {
      this.$http.get(`/api/4/story/${storyId}/short-comments`)
                .then(res => {
                  this.shortComments = res.data.comments
                  this.loading = false
                })
                .catch(e => {
                  console.log(e)
                })
    },
    addFavoriteStory(){
      let story = {
        id: this.story.id,
        title: this.story.title,
        image: this.story.images[0],
        created_at: Date.now()
      }
      this.$store.dispatch('addFavoriteStory', {story})
      this.favorite = true
    },
    removeFavoriteStory(){
      let story = {id: this.story.id}
      this.$store.dispatch('removeFavoriteStory',{story})
      this.favorite = false
    }
  },
  computed: {
    storyBody() {
      return this.story.body
                       .replace(/headline/,'')
                       .replace(/img\-place\-holder/,'')
                       .replace(/view\-more/,'')
                       .replace(/查看知乎讨论/,'')
                       .replace(/http\:\/\//g,'https://images.weserv.nl/?url=')
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "../assets/zhihu.daily.css";
  .story {
    min-height: 100vh;
    padding-bottom: 50px;
    .comment-content {
      font-size: 16px;
    }
    .story-actions {
      position: fixed;
      top: 40%;
      right: 6%;
      display: flex;
      min-height: 124px;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      .material-icons{
        font-size: 30px;
      }
    }
  }
</style>

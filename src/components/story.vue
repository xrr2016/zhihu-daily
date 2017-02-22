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
        <div class="col l10 s12 m12 offset-l1">
          <div class="card">
            <div class="card-image">
              <img  class ="story-image":src="story.image | imageUrlPrefix">
              <span class="card-title flow-text">{{ story.title }}</span>
            </div>
          </div>
        </div>
        <!-- content-body -->
        <div class="col l10 s12 m12 offset-l1" v-html="storyBody"></div>
        <!-- long-comments -->
        <div class="col l10 s12 m12 offset-l1">
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
        <div class="col l10 s12 m12 offset-l1">
            <div class="card-panel" v-for="comment of shortComments">
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
      loading: true
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
  }
</style>

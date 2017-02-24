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
        <div class="col l12 s12 m12">
            <!-- long-comments -->
            <p style="color:#999;">评论</p>
            <div class="card-panel comments" v-for="comment of longComments">
                <div class="valign-wrapper comment-info">
                  <img :src="comment.avatar | imageUrlPrefix">
                  <i class="material-icons margin-left">account_circle</i>
                  <span>&nbsp;{{ comment.author }}</span>
                  <i class="material-icons margin-left">thumb_up</i>
                  <span>&nbsp;{{ comment.likes }}</span>
                </div>
                <p class="comment-content">{{ comment.content }}</p>
            </div>
            <!-- short-comments -->
            <div class="card-panel comments" v-for="comment of shortComments">
                <div class="valign-wrapper comment-info">
                  <img :src="comment.avatar | imageUrlPrefix">
                  <i class="material-icons margin-left">account_circle</i>
                  <span>&nbsp;{{ comment.author }}</span>
                  <i class="material-icons margin-left">thumb_up</i>
                  <span>&nbsp;{{ comment.likes }}</span>
                </div>
                <p class="comment-content">{{ comment.content }}</p>
            </div>
        </div>
        <!-- actions -->
        <div class="story-actions">
           <a class="btn-floating btn-large waves-effect waves-light purple lighten-2" @click="removeFavoriteStory" v-if="favorite"><i class="material-icons">favorite</i></a>

           <a class="btn-floating btn-large waves-effect waves-light purple lighten-2" @click="addFavoriteStory" v-else="favorite"><i class="material-icons">favorite_border</i></a>
           <!-- 返回上级按钮 -->
           <a class="btn-floating btn-large waves-effect waves-light purple lighten-2"><i class="material-icons" @click="goBack">keyboard_return</i></a>
        </div>
     </div>
  </div>
</template>

<script>
import toastr from 'toastr'
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
    // 获取文章
    getStory(storyId) {
      this.$http.get(`${this.$url}/api/4/news/${storyId}`)
                .then(res => {
                  this.story = res.data
                  this.getLongComments(this.$route.params.id)
                })
                .catch(e => {
                  console.log(e)
                })
    },
    // 获取文章长评
    getLongComments(storyId) {
      this.$http.get(`${this.$url}/api/4/story/${storyId}/long-comments`)
                .then(res => {
                  this.longComments = res.data.comments
                  this.getShortComments(this.$route.params.id)
                })
                .catch(e => {
                  console.log(e)
                })
    },
    // 获取文章短评
    getShortComments(storyId) {
      this.$http.get(`${this.$url}/api/4/story/${storyId}/short-comments`)
                .then(res => {
                  this.shortComments = res.data.comments
                  this.loading = false
                })
                .catch(e => {
                  console.log(e)
                })
    },
    // 添加收藏
    addFavoriteStory(){
      let story = {
        index: window.localStorage.length,
        id: this.story.id,
        title: this.story.title,
        image: this.story.images[0],
        created_at: Date.now()
      }
      this.$store.dispatch('addFavoriteStory', story)
      this.favorite = true
      toastr.success('收藏成功')
    },
    // 取消收藏
    removeFavoriteStory(){
      let story = {id: this.story.id}
      this.$store.dispatch('removeFavoriteStory',{story})
      this.favorite = false
      toastr.success('取消收藏成功')
    },
    // 返回上级
    goBack(){
      this.$router.go(-1)
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
    .margin-left{
      margin-left: 12px;
    }
    .comments {
      padding: 12px 12px;
      .comment-info{
        font-size: 18px;
      }
      .comment-content {
        letter-spacing: 1px;
        font-size: 16px;
        text-indent: 2em;
      }
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

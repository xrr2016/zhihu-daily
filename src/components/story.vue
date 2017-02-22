<template lang="html">
  <div class="container story">
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
    <div class="" v-else v-html="story.body"></div>
  </div>
</template>

<script>
export default {
  created(){
    this.getStory(this.$route.params.id)
  },
  data(){
    return {
      story: {},
      loading: true
    }
  },
  methods:{
    getStory(storyId){
      this.$http.get(`/api/4/news/${storyId}`)
                .then(res => {
                  this.story = res.data
                  this.loading = false
                })
                .catch(e => {
                  console.log(e)
                })
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "../assets/zhihu.daily.css";
  .story{
    min-height: 100vh;
    padding-bottom: 50px;
  }
</style>

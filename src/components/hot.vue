<template lang="html">
  <div class="container hot">
    <div class="row">
      <router-link class="col l6 m6 s6"
      :to="{name: 'story', params: {id: story.news_id }}" v-for="story of hotStories">
        <div class="card horizontal hoverable">
          <div class="card-image">
            <img :src="story.thumbnail | imageUrlPrefix">
          </div>
          <div class="card-stacked">
            <div class="card-content">
              <p class="flow-text">{{ story.title }}</p>
            </div>
          </div>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'hot',
  created() {
    this.getHotStories()
  },
  data() {
    return {
      hotStories: []
    }
  },
  methods: {
    getHotStories(){
      this.$http.get(`${this.$url}/api/3/news/hot`)
                .then(res => {
                  this.hotStories = res.data.recent
                })
                .catch(e => {
                  console.log(e)
                })
    }
  }
}
</script>

<style lang="scss" scoped>
  .hot {
    position: relative;
    min-height: 100vh;
    padding-bottom: 50px;
    .flow-text {
      font-size: 20px;
    }
  }
</style>

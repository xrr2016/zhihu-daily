<template lang="html">
  <div class="index">
    <md-layout md-gutter md-align="center">
      <md-layout md-flex="50" >
      <!-- top-stories-swiper -->
        <swiper :options="swiperOption" ref="mySwiperA">
          <swiper-slide v-for="story of topStories">
            <img :src="story.image">
            <div class="title">{{ story.title }}</div>
          </swiper-slide>
          <div class="swiper-pagination"  slot="pagination"></div>
        </swiper>
        <!-- stories-list -->
        <md-card class="card" v-for="story of latestStories">
          <md-card-header>
            <md-card-header-text>
              <div class="md-title card-title">{{ story.title }}</div>
            </md-card-header-text>
            <md-card-media>
              <img :src="story.images[0]">
            </md-card-media>
          </md-card-header>
        </md-card>
      </md-layout>
    </md-layout>
  </div>
</template>

<script>
export default {
  name: "index",
  created() {
    this.loadLatestStories()
  },
  data() {
    return {
      latestStories : [],
      topStories : [],
      swiperOption :{
        pagination: '.swiper-pagination',
        paginationClickable: true,
        speed: 600,
      }
    }
  },
  components: {},
  methods: {
    loadLatestStories() {
      const url = this.$store.state.API + '/latest'
      this.$http.get(url)
        .then(res => {
          this.latestStories = res.data.stories
          this.topStories = res.data.top_stories
        })
        .catch(e => console.log(e))
    }
  },
  computed: {},
  mounted() {}
}
</script>

<style lang="scss" scoped>
.index {
    .card {
        width: 100%;
        margin: 24px 0;
        .card-title{
          text-align: left;
        }
    }
}
</style>

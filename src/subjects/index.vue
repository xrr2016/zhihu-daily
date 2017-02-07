<template lang="html">
  <div class="index">
    <md-layout md-gutter md-align="center">
      <md-layout md-flex="50" >
      <!-- top-stories-swiper -->
        <swiper :options="swiperOption" ref="mySwiperA">
          <swiper-slide v-for="story of topStories">
              <!-- <md-card>
                <md-card-media-cover md-text-scrim>
                  <md-card-media md-ratio="16:9">
                    <img :src="story.image | imageUrlPrefix">
                  </md-card-media>
                  <md-card-area>
                    <md-card-header>
                      <div class="md-title">{{ story.title }}</div>
                    </md-card-header>
                  </md-card-area>
                </md-card-media-cover>
              </md-card> -->
              <div class="swiper-card">
                <img :src="story.image | imageUrlPrefix">
                <h2>{{ story.title }}</h2>
              </div>
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
              <img :src="story.images[0] | imageUrlPrefix">
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
      latestStories: [],
      topStories: [],
      imgPrefix: this.$store.state.imageUrlPrefix,
      swiperOption: {
        pagination: '.swiper-pagination',
        paginationClickable: true,
        speed: 800,
        autoplay: true
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
    .swiper-card{
      position: relative;
      img{
        width: 100%;
      }
      h2{
        position: absolute;
        width: 90%;
        bottom: 8%;
        margin-left: 24px;
        color: #f4f4f4;
        font-size: 34px;
        text-indent: 2em;
        line-height: 1.4;
        font-weight: bolder;
      }
    }
    .card {
        width: 100%;
        margin: 18px 0;
        .card-title {
            text-align: left;
        }
    }
}
</style>

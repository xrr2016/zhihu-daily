<template lang="html">
  <div class="container favorites">
    <div class="card-panel" v-if="getFavoritesStoryNum === 0">
     <h5 class="flow-text center-align purple-text text-lighten-2">还没有收藏文章.</h5>
    </div>
    <div v-else>
      <router-link tag="a" class="col l6 m12 s12"
        :to="{name: 'story', params: {id: story.id }}" v-for="story of getFavorites">
        <div class="card horizontal hoverable">
          <div class="card-image"><img :src="story.image | imageUrlPrefix"></div>
          <div class="card-stacked">
            <div class="card-content"><p class="story-title">{{ story.title }}</p></div>
          </div>
        </div>
      </router-link>
      <button class="waves-effect waves-light btn purple lighten-2 clear-all" @click="clearAllStories">清除全部收藏</button>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import toastr from 'toastr'
export default {
  computed: {
    ...mapGetters([
      'getFavorites',
      'getFavoritesReverse',
      'getFavoritesStoryNum'
    ])
  },
  methods: {
    clearAllStories(){
      this.$store.dispatch('clearFavoriteStorie')
      toastr.success('清除完成')
    }
  }
}
</script>

<style lang="scss" scoped>
  .favorites{
    position: relative;
    min-height: 100vh;
    padding-bottom: 50px;
    .story-title{
      font-size: 18px;
    }
   .clear-all{
     position: absolute;
     bottom: 2%;
     right: 50%;
     transform: translateX(50%);
    }
  }
</style>

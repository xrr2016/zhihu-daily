<template lang="html">
  <div class="container favorites">
    <router-link tag="a" class="col l6 m12 s12"
      :to="{name: 'story', params: {id: story.id }}" v-for="story of getFavorites">
      <div class="card horizontal hoverable">
        <div class="card-image"><img :src="story.image | imageUrlPrefix"></div>
        <div class="card-stacked">
          <div class="card-content"><p class="story-title">{{ story.title }}</p></div>
        </div>
      </div>
    </router-link>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters([
      'getFavorites',
      'getFavoritesReverse',
      'getFavoritesStoryNum'
    ])
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
  }
</style>

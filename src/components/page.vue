<template lang="html">
  <div class="page">
    page.vue
    <ul>
      <li v-for="movie of movies">
        {{ movie.title }} - {{ movie.id }}
      </li>
    </ul>
    <br>
    <button type="button" @click="getMovies" >loadMovies</button>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name:"appPage",
  computed : {
    ...mapGetters([
      'latestStories',
      'movies'
    ])
  },
  methods:{
    getMovies(){
      this.$store.dispatch('loadMovies')
      console.log('loadMovies');
    }
  }
}
</script>

<style lang="css">
</style>

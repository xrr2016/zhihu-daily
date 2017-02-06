<template lang="html">
  <div class="page">
    page.vue
    <ul>
      <li v-for="story of latestStories">
        {{ story.title }} - {{ story .id }}
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name:"appPage",
  computed : {
    ...mapGetters([
      'latestStories'
    ])
  }
}
</script>

<style lang="css">
</style>

<template lang="html">
  <div class="container latest">
    latest.vue
  </div>
</template>

<script>
export default {
  created(){

  },
  data(){
    return {
      latest: {}
    }
  },
  methods:{
    getLatest(){
      this.$http.get('/api/latest')
                .then(res => {
                  this.latest = res.data
                })
                .catch(e => {
                  console.log(e)
                })
    }
  }
}
</script>

<style lang="scss" scoped>
  .latest{
    min-height: 100vh;
    padding-bottom: 50px;
  }
</style>

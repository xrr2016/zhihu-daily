<template lang="html">
  <div class="container subject">
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
    <div class="row" v-else>
      <!-- subject top -->
      <div class="col l12 m12 s12">
        <div class="card">
           <div class="card-image">
             <img :src="subject.background | imageUrlPrefix">
             <span class="card-title">{{ subject.description }}</span>
           </div>
           <div class="card-content">
             <span>主编:&nbsp;&nbsp;</span>
             <div class="chip editor" v-for="editor of subject.editors">
               <img :src="editor.avatar | imageUrlPrefix" :alt="editor.bio">
               <a :href="editor.url">{{editor.name}}</a>
             </div>
           </div>
         </div>
      </div>
      <!-- subject stories -->
      <div class="stories-list">
        <router-link tag="a" class="col l12 m10 s10 story-item"
          :to="{name: 'story', params: {id: story.id }}" v-for="story of subject.stories">
          <div class="card horizontal hoverable">
            <div class="card-image" v-if="!!story.images">
              <img :src="story.images[0] | imageUrlPrefix">
            </div>
            <span class="" v-else></span>
            <div class="card-stacked">
              <div class="card-content"><p class="flow-text">{{ story.title }}</p></div>
            </div>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  created(){
    this.getSubject()
  },
  data(){
    return {
      subject: {},
      loading: true
    }
  },
  watch: {
    '$route': 'getSubject'
  },
  methods:{
    getSubject(){
      this.$http.get(`${this.$url}/api/4/theme/${this.$route.params.id}`)
                .then(res => {
                  this.subject = res.data
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
  .subject{
    min-height: 100vh;
    padding-bottom: 50px;
    .editor{
      margin-right:12px;
    }
  }
</style>

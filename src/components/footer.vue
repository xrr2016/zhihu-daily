<template lang="html">
    <footer class="page-footer purple lighten-2 footer">
      <div class="center-align app-footer-copyright">
            Copyright (c) 2016 Copyright Holder All Rights Reserved.
           <a class="grey-text text-lighten-4" href="https://github.com/xrr2016/zhihu-daily" target="_blank">
             <img class="app-github" :src="github" alt="项目地址">
           </a>
      </div>
    </footer>
</template>

<script>
import github from '../assets/imgs/github.svg'
export default {
  data(){
    return {
      github
    }
  }
}
</script>

<style lang="scss">
  .footer{
    .app-footer-copyright{
      text-align: center;
      background-color: rgba(51, 51, 51, .1);
      .app-github{
        margin-left: 12px;
        height: 40px;
      }
    }
  }
</style>

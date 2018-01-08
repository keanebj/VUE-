<template>
  <h1>{{title}}</h1>
</template>

<style scoped lang="less">
  @import '../assets/px2rem.less';

  h1{
    .px2rem(height,60);
    .px2rem(line-height,60);
    text-align: center;
    background: skyblue;
    color:white;
  }
</style>

<script>
import {mapGetters} from 'vuex'
export default {
  name: 'header-bar',
  computed: {
    ...mapGetters(['title'])
  }
}
</script>

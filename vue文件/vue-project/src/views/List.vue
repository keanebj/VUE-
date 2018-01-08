<template>
  <div class="list-div">
    <ul>
      <li v-for="x in 100" class="list-item">{{x}}</li>
    </ul>
  </div>
</template>

<style scoped lang="less">
@import '../assets/px2rem.less';
.list-div{
  background: pink;
}

.list-item{
  list-style: none;
  .px2rem(height, 40);
  padding: 0 10px;
}
</style>

<script>
import * as types from '../store/types'
export default {
  name: 'list',
  mounted: function () {
    this.$store.commit(types.CHANGE_HEAD_BAR, {title: '商品列表'})
  },
  data () {
    return {
      msg: 'Index'
    }
  }
}
</script>

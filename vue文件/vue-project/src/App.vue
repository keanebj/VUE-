<template>
  <div id="app">
    <header-bar></header-bar>
    <transition :name="transitionName">
      <router-view class="root-view" keep-alive></router-view>
    </transition>
    <nav>
      <router-link class="link" :class="{active:linkClass(item)}" v-for="item in menus" :to="item.path" :key="item">{{item.name}}</router-link>
    </nav>
  </div>
</template>

<style lang="less">
  @import './assets/px2rem.less';
  .root-view{
    position: absolute;
    width:100%;
    transition: all .5s ease;
    .px2rem(top,60);
    right: 0;
    left: 0;
    .px2rem(bottom,80);
    overflow-y: auto;
  }
</style>

<style scoped lang="less">
  @import './assets/px2rem.less';
  .slide-left-enter, .slide-right-leave-active {
    transform: translate(100%, 0);
  }
  .slide-left-leave-active, .slide-right-enter {
    transform: translate(-100%, 0);
  }
  nav{
    position: absolute;
    bottom:0;
    left:0;
    .px2rem(height,80);
  }

  .link{
    display:inline-block;
    .height-line-height-rem(80);
    padding:0 20px;
    text-decoration: none;
  }
  .link.active{
    background: lightgray;
  }
</style>
<script>
import HeaderBar from './components/HeaderBar.vue'
export default {
  name: 'app',
  components: {
    HeaderBar
  },
  data: function () {
    return {
      menus: [{
        name: '首页',
        path: '/'
      }, {
        name: '注册',
        path: '/Register'
      }, {
        name: '商品',
        path: '/List'
      }],
      transitionName: 'slide-left',
      routePath: ''
    }
  },
  watch: {
    '$route': function (to, from) {
      this.routePath = to.path
    }
  },
  created: function () {
    this.routePath = this.$route.path
  },
  methods: {
    linkClass (item) {
      return this.routePath === item.path
    }
  }
}
</script>

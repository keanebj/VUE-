<template>
  <div class="index">
    <h1>{{ msg }}</h1>
    <div class="swiper-container">
        <div class="swiper-wrapper">
            <div class="swiper-slide">Slide 1</div>
            <div class="swiper-slide">Slide 2</div>
            <div class="swiper-slide">Slide 3</div>
            <div class="swiper-slide">Slide 4</div>
            <div class="swiper-slide">Slide 5</div>
            <div class="swiper-slide">Slide 6</div>
            <div class="swiper-slide">Slide 7</div>
            <div class="swiper-slide">Slide 8</div>
            <div class="swiper-slide">Slide 9</div>
            <div class="swiper-slide">Slide 10</div>
        </div>
    </div>
  </div>
</template>

<script>
import '../../libs/swiper/js/swiper.jquery.js'

export default {
  name: 'index',
  mounted: function () {
    this.$store.dispatch('changeTitle', '首页')
    window.Swiper('.swiper-container')
  },
  data () {
    return {
      msg: 'Index'
    }
  }
}
</script>

<style scoped lang="less">
@import '../../libs/swiper/css/swiper.min.css';
@import '../assets/px2rem.less';
.swiper-container {
    width: 500px;
    height: 300px;
    margin: 20px auto;
}
.swiper-slide {
    text-align: center;
    font-size: 18px;
    background: #fff;

    /* Center slide text vertically */
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center;
}


.index{
  background: orange;
}
.banner{
  height:150px;
  border:1px solid red;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>

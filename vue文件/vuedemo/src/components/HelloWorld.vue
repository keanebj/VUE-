<template>
  <div class="hello">
    <router-link to="/loading"><h1>{{ msg }}</h1></router-link> 
    <router-link to="/model">布局分布</router-link>  
    <div @click=toast>点击提示</div>
    <div @click=loading>加载</div>
    <div></div>
  </div>
  
</template>

<script>
import { Toast } from 'mint-ui'
import { Indicator } from 'mint-ui';
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods:{
    toast(){
      Toast({
            message: "暂无信息",
            position: "bottom",
            className:"toast_blue",
            duration:1000
      });
    },
    loading(){
      Indicator.open({
        text: '加载中...',
        spinnerType: 'fading-circle'
      });
      setTimeout(function(){
            Indicator.close();
      },1000)
    },
    
    
  }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
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
.toast_blue{
  background:#42b983;
  color:red;
  font-size:20px;
}

</style>

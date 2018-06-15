<template>
  <div>
  	<div class="img">
  		<span></span>
  		App store 下载
  	</div>
    <router-link to="/Map">地图</router-link>
    <router-link to="/Line">折线图</router-link>
    <router-link to="/Radar">雷达图</router-link>
    
  </div>
</template>

<script>
export default {
  name: '',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
	
	.img{
		display: flex;
		background: red;
		width: 150px;
		line-height: 30px;
	}
	.img span{
		
		display: inline-flex;
		flex: 1;
		background-image: url(../assets/hoverbefore.png);
		background-repeat: no-repeat;
		background-size: 25px;
	}
	.img:hover span{
		display: inline-flex;
		flex: 1;
		background-image: url(../assets/hover.png);
		background-repeat: no-repeat;
		background-size: 25px;
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

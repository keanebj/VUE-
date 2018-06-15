<template>
	<div>
		<!--<div class="wrap">
	    	<div class="wrap_left">
				<ui class="list">
					<li class="item">目录</li>
				</ui>
	    	</div>
	    	
	    	<div class="wrap_right">
			  <div class="main">
			  	{{msg}}<img src="../assets/logo.png"/>
			  </div>
	    	</div>
	    </div>
	    -->
	    
	    <router-link to="/Line">折线图</router-link>
	    <router-link to="/Map">地图</router-link>
	   <router-link to="/Radar">雷达图</router-link>
	   <router-link to="/Pie">饼图</router-link>
	    
	    
	</div>
	
</template>

<script>
	export default{
		data(){
			return{
				msg:"心事"
			}
		}
	}
</script>

<style scoped="scoped" lang="less">
	.wrap{
		width: 100%;
		display: flex;
		
		.wrap_left{
			width: 300px;
			height: 100%;
			border: 1px solid #42B983;
		}
		.wrap_right{
			flex: 1;
			border: 1px solid red;
		}
	}
</style>
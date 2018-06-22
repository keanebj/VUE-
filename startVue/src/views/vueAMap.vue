<template>
	<div class="vueAMap">
		<baidu-map class="BMap bm-view"  ak="14ODU7VCYANPR4zaiGRxpL52" :center="center" :zoom="zoom" :scroll-wheel-zoom="true">
		</baidu-map>
	</div>
</template>

<script>
	import BaiduMap from 'vue-baidu-map'
	export default({
		name: "vueAMap",
		data() {
			return {
				center:{
					lng: 116.404, lat: 39.915
				},
				zoom:15
			}
		},
		watch: {},
		created() {
			
		},
		computed:{},
		mounted() {

		},
		methods: {
			initMap(){
			 	map = new BMap.Map('BMap')
			}
			
		}

	})
</script>

<style scoped="scoped">
	.vueAMap{
		height: 100%;
	}
	.bm-view{
		width: 100%;
		height: 100%;
	}
</style>
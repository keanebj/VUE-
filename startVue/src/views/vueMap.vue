<template>
	<div class="vueMap">
		 <baidu-map class="vueMap" :center="center" :zoom="zoom" @ready="handler"></baidu-map>
	</div>
</template>

<script>
	import BaiduMap from 'vue-baidu-map'
	export default({
		name: "vueMap",
		data() {
			return {
				center: {
					lng: 0, lat: 0
				},
     			zoom: 3
				
			}
		},
		watch: {},
		created() {

		},
		computed: {},
		mounted() {

		},
		methods: {
			handler ({BMap, map}) {
		      console.log(BMap, map)
		      this.center.lng = 116.404
		      this.center.lat = 39.915
		      this.zoom = 15
		    },
//	        initMap(){
//			 	map = new BMap.Map('BMap')
//			}
		}

	})
</script>

<style scoped="scoped">
	.vueMap{
		height: 100%;
	}
	.bm-view {
		width: 100%;
		height: 100%;
	}
</style>
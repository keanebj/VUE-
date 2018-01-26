<template>
	<div style="display: flex;">
		<div ref="myEchart" style="width:50%;height: 450px;"></div>
		<div ref="myEchart1" style="width:50%;height: 450px;"></div>
	</div>

</template>

<script>
	import echarts from "echarts"
	export default {
		name: "Map",
		data() {
			return {
				chart: {},
				chart1: {}
			}
		},
		components: {},
		mounted() {
			this.initData()
		},
		created() {

		},
		methods: {

			initData() {
				const chinaJson = require('../components/map-data/china.json');
				echarts.registerMap('china', chinaJson);
				const colorStyle = require("../lib/vintage.json")
				this.chart = echarts.init(this.$refs.myEchart, colorStyle);
				this.chart.setOption(

					{
						title: {
							text: '区域分布',
							subtext: '纯属虚构',
							left: 'left'
						},
						tooltip: {
							trigger: 'item'
						},
						legend: {
							orient: 'vetical',
							left: 'center',
							data: ['iphone3']
						},
						visualMap: {
							orient: 'horizontal',
							max: "100000",
							min: "0",
							left: 'left',
							top: 'bottom',
							text: ['100%', '0'], // 文本，默认为数值文本
							calculable: true
						},
						toolbox: {
							show: false,
							orient: 'vetical',
							left: 'right',
							top: 'center',
							feature: {
								dataView: {
									readOnly: false
								},
								restore: {},
								saveAsImage: {}
							}
						},
						series: [{
							name: 'iphone3',
							type: 'map',
							mapType: 'china',
							roam: false,
							itemStyle: {
								normal: {
									label: {
										show: true
									},
									areaStyle: {
										backgroundColor: "red",
										color: '#FF0000'
									},
									color: "none",
									borderColor: '#fff',
								},
								emphasis: {
									label: {
										show: true
									}
								}
							},
							label: {
								normal: {
									show: false
								},
								emphasis: {
									show: true
								}
							},
							//data: this.mapData
							data: [

								{
									name: '重庆',
									value: 10011.37
								},
								{
									name: '吉林',
									value: 10568.83
								},
								{
									name: '山西',
									value: 11237.55
								},
								{
									name: '天津',
									value: 11307.28
								},
								{
									name: '江西',
									value: 11702.82
								},
								{
									name: '广西',
									value: 11720.87
								},
								{
									name: '陕西',
									value: 12512.3
								},
								{
									name: '黑龙江',
									value: 12582
								},
								{
									name: '内蒙古',
									value: 14359.88
								},
								{
									name: '安徽',
									value: 15300.65
								},
								{
									name: '北京',
									value: 16251.93
								},
								{
									name: '福建',
									value: 17560.18
								},
								{
									name: '上海',
									value: 19195.69
								},
								{
									name: '湖北',
									value: 19632.26
								},
								{
									name: '湖南',
									value: 19669.56
								},

							]
						}]
					}

				)

				const colorStyle1 = require("../lib/walden.json")

				function randomData() {
					return Math.round(Math.random() * 1000);
				}
				this.chart1 = echarts.init(this.$refs.myEchart1, colorStyle1);
				this.chart1.setOption({
					title: {
						text: 'iphone销量',
						subtext: '纯属虚构',
						left: 'center'
					},
					tooltip: {
						trigger: 'item'
					},
					legend: {
						orient: 'vertical',
						left: 'left',
						data: ['iphone3', 'iphone4', 'iphone5']
					},
					visualMap: {
						min: 0,
						max: 2500,
						left: 'left',
						top: 'bottom',
						text: ['高', '低'], // 文本，默认为数值文本
						calculable: true
					},
					dataRange: {
//						x: 'left',
//						y: 'bottom',
//						splitList: [{
//								start: 1500
//							},
//							{
//								start: 900,
//								end: 1500
//							},
//							{
//								start: 310,
//								end: 1000
//							},
//							{
//								start: 200,
//								end: 300
//							},
//							{
//								start: 10,
//								end: 200,
//								label: '10 到 200（自定义label）'
//							},
//							{
//								start: 5,
//								end: 5,
//								label: '5（自定义特殊颜色）',
//								color: 'black'
//							},
//							{
//								end: 10
//							}
//						],
						color: ["#ffd1cb", "#db0000"]
					},

					toolbox: {
						show: true,
						orient: 'vertical',
						left: 'right',
						top: 'center',
						feature: {
							dataView: {
								readOnly: false
							},
							restore: {},
							saveAsImage: {}
						}
					},
					series: [

						{
							name: 'iphone3',
							type: 'map',
							mapType: 'china',
							roam: false,
							label: {
								normal: {
									show: true
								},
								emphasis: {
									show: false
								}
							},
							data: [{
									name: '北京',
									value: randomData()
								},
								{
									name: '天津',
									value: randomData()
								},
								{
									name: '上海',
									value: randomData()
								},
								{
									name: '重庆',
									value: randomData()
								},
								{
									name: '河北',
									value: randomData()
								},
								{
									name: '河南',
									value: randomData()
								},
								{
									name: '云南',
									value: randomData()
								},
								{
									name: '辽宁',
									value: randomData()
								},
								{
									name: '黑龙江',
									value: randomData()
								},
								{
									name: '湖南',
									value: randomData()
								},
								{
									name: '安徽',
									value: randomData()
								},
								{
									name: '山东',
									value: randomData()
								},
								{
									name: '新疆',
									value: randomData()
								},
								{
									name: '江苏',
									value: randomData()
								},
								{
									name: '浙江',
									value: randomData()
								},
								{
									name: '江西',
									value: randomData()
								},
								{
									name: '湖北',
									value: randomData()
								},
								{
									name: '广西',
									value: randomData()
								},
								{
									name: '甘肃',
									value: randomData()
								},
								{
									name: '山西',
									value: randomData()
								},
								{
									name: '内蒙古',
									value: randomData()
								},
								{
									name: '陕西',
									value: randomData()
								},
								{
									name: '吉林',
									value: randomData()
								},
								{
									name: '福建',
									value: randomData()
								},
								{
									name: '贵州',
									value: randomData()
								},
								{
									name: '广东',
									value: randomData()
								},
								{
									name: '青海',
									value: randomData()
								},
								{
									name: '西藏',
									value: randomData()
								},
								{
									name: '四川',
									value: randomData()
								},
								{
									name: '宁夏',
									value: randomData()
								},
								{
									name: '海南',
									value: randomData()
								},
								{
									name: '台湾',
									value: randomData()
								},
								{
									name: '香港',
									value: randomData()
								},
								{
									name: '澳门',
									value: randomData()
								}
							]
						},
						{
							name: 'iphone4',
							type: 'map',
							mapType: 'china',
							label: {
								normal: {
									show: true
								},
								emphasis: {
									show: true
								}
							},
							data: [{
									name: '北京',
									value: randomData()
								},
								{
									name: '天津',
									value: randomData()
								},
								{
									name: '上海',
									value: randomData()
								},
								{
									name: '重庆',
									value: randomData()
								},
								{
									name: '河北',
									value: randomData()
								},
								{
									name: '安徽',
									value: randomData()
								},
								{
									name: '新疆',
									value: randomData()
								},
								{
									name: '浙江',
									value: randomData()
								},
								{
									name: '江西',
									value: randomData()
								},
								{
									name: '山西',
									value: randomData()
								},
								{
									name: '内蒙古',
									value: randomData()
								},
								{
									name: '吉林',
									value: randomData()
								},
								{
									name: '福建',
									value: randomData()
								},
								{
									name: '广东',
									value: randomData()
								},
								{
									name: '西藏',
									value: randomData()
								},
								{
									name: '四川',
									value: randomData()
								},
								{
									name: '宁夏',
									value: randomData()
								},
								{
									name: '香港',
									value: randomData()
								},
								{
									name: '澳门',
									value: randomData()
								}
							]
						},
						{
							name: 'iphone5',
							type: 'map',
							mapType: 'china',
							label: {
								normal: {
									show: true
								},
								emphasis: {
									show: true
								}
							},
							data: [{
									name: '北京',
									value: randomData()
								},
								{
									name: '天津',
									value: randomData()
								},
								{
									name: '上海',
									value: randomData()
								},
								{
									name: '广东',
									value: randomData()
								},
								{
									name: '台湾',
									value: randomData()
								},
								{
									name: '香港',
									value: randomData()
								},
								{
									name: '澳门',
									value: randomData()
								}
							]
						}

					]
				})

			}

		}

	}
</script>

<style>

</style>
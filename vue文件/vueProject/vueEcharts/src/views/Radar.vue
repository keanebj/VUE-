<template>
	<div>
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
				var weatherIcons = {
				    'Sunny': '../assets/logo.png',
				    'Cloudy': '../assets/logo.png',
				    'Showers': '../assets/logo.png'
				};
				this.chart = echarts.init(this.$refs.myEchart);
				this.chart.setOption({
					title: {
						text: '基础雷达图'
					},
					tooltip: {
						
					},
					legend: {
						data: ['预算分配（Allocated Budget）', '实际开销（Actual Spending）']
					},
					toolbox: {
						x: "right"
					},
					radar: {
						shape: 'polygon', //circle  圆形    custom  方形'circle', 'sector', 'polygon' 
						name: {
							textStyle: {
								color: 'red',
								backgroundColor: 'yellow',
								borderRadius: 3,
								padding: [3, 5],

							}
						},
						indicator: [{
								name: '销售（sales）',
								max: 6500
						
							},
							{
								name: '管理（Administration）',
								max: 16000
							},
							{
								name: '信息技术（Information Techology）',
								max: 30000
							},
							{
								name: '客服（Customer Support）',
								max: 38000
							},
							{
								name: '研发（Development）',
								max: 52000
							},
							{
								name: '市场（Marketing）',
								max: 25000
							}
						]
					},
					series: [{
						name: '预算 vs 开销（Budget vs spending）',
						type: 'radar',
						markPoint: {
							animation: "true",
							//							'circle' | 'rectangle' | 'triangle' | 'diamond' |
							//'emptyCircle' | 'emptyRectangle' | 'emptyTriangle' | 'emptyDiamond''heart'（心形）、'droplet'（水滴）、'pin'（标注）、'arrow'（箭头）和'star'（五角星） 
							//							symbol: 'heart',
							/*指定一个类型*/
							//							symbol: 'heart',
							data: [
								/*value为值，x,y对应坐标，symbolSize为显示大小*/
								{
									name: '',
									value: 3,
									x: '50%',
									y: '50%',
									symbolSize: 10,
									color: "#595959",
								}

							],
							//							symbol:"triangle",  //'circle', 'rect', 'roundRect', 'triangle', 'diamond', 'pin', 'arrow'
							//							symbolSize:30,
							label: {
								normal: {
									textStyle: {
										fontSize: 100,
										color: "blue"
									}
								},
								emphasis: {
									show: true,
									color: 'red'
								}
							},
							itemStyle: {
								normal: { /*正常显示样式*/
									//									color: "red",
									//									color:{
									//										type: 'radial',
									//									    x: 0.5,
									//									    y: 0.5,
									//									    r: 0.5,
									//									    colorStops: [{
									//									        offset: 0, color: 'red' // 0% 处的颜色
									//									    }, {
									//									        offset: 1, color: 'blue' // 100% 处的颜色
									//									    }],
									//									    globalCoord: true // 缺省为 false
									//									},
									borderWidth: 2 /*保证不显示边框*/
								},
								emphasis: { /*鼠标移上样式*/
									borderWidth: 0,
								}
							}

						},
						itemStyle: {
							normal: {
								//			                    areaStyle: {
								//			                        type: '',
								//			                        backgroundColor: 'yellow'
								//			                    },
								color: "#FA6567", // 图表中各个图区域的边框线拐点颜色
								lineStyle: {
									color: "yellow" // 图表中各个图区域的边框线颜色
								},
							}
						},
						areaStyle: {
							normal: {
								color: new echarts.graphic.RadialGradient(0.5, 0.5, 1, [{
									offset: 0.1,
									color: 'rgba(255, 0, 0, 0.1)'
								}, {
									offset: 1,
									color: 'rgba(255, 255, 0, 1)'
								}], false)
							}
						},

						data: [
							//						    {
							//								value: [4300, 10000, 28000, 35000, 50000, 19000],
							//								name: '预算分配（Allocated Budget）'
							//							},
							{
								value: [5000, 14000, 28000, 31000, 42000, 21000],
								name: '实际开销（Actual Spending）',
								color: "red"
							}
						]
					}]
				})

				this.chart1 = echarts.init(this.$refs.myEchart1);
				this.chart1.setOption({
					title: {
						text: null
					}, // 隐藏图表标题
					legend: {
						enabled: false
					}, // 隐藏图例
					tooltip: {
						trigger: 'axis'
					},
					calculable: true,
					polar: [{
						nameGap: 20, // 图中工艺等字距离图的距离
						center: ['50%', '50%'], // 图的位置
						name: {
							show: true, // 是否显示工艺等文字
							formatter: null, // 工艺等文字的显示形式
							textStyle: {
								color: '#a3a5b6' // 工艺等文字颜色
							}
						},
						indicator: [{
								text: '工艺',
								max: 100,
								color: "red"
							},
							{
								text: '设备',
								max: 100,
								color: "green"

							},
							{
								text: '安全',
								max: 100,
								color: "red"
							},
							{
								text: '工艺',
								max: 100,
								color: "yellow"
							},
							{
								text: '仪表',
								max: 100,
								color: "orange"
							}
						],
						axisLine: { // 坐标轴线
							show: false // 默认显示，属性show控制显示与否
						},
						axisLabel: { // 坐标轴文本标签，详见axis.axisLabel
							show: false,
							textStyle: {
								color: '#247bd7' // 坐标轴刻度文字的样式
							}
						},
						splitArea: {
							show: true,
							areaStyle: {
								color: ["#ffd1cb", "#cccccc", "#fffff", "#eeeeee"] // 图表背景网格的颜色
							}
						},
						splitLine: {
							show: true,
							lineStyle: {
								width: 1,
								color: ["red", "yellow", "black", "orange"] // 图表背景网格线的颜色
							}
						}
					}],
					series: [{
						name: '完全实况球员数据',
						type: 'radar',
						symbol: "heart", //custom 去掉图表中各个图区域的边框线拐点
						itemStyle: {
							normal: {
								//								color: "rgba(0,0,0,0)", // 图表中各个图区域的边框线拐点颜色
								//								color: ["red","yellow","black","orange","#999"],
								color: "red",
								lineStyle: {
									//									color: "white" // 图表中各个图区域的边框线颜色
									color: ["red", "yellow", "black", "orange"]
								},
								areaStyle: {
									type: 'default'
								}
							}
						},
						data: [{
								value: [50, 42, 88, 60, 90],
								itemStyle: {
									normal: {
										areaStyle: {
											type: 'default',
											opacity: 0.8, // 图表中各个图区域的透明度
											color: "#1686c2" // 图表中各个图区域的颜色
										}
									}
								},
								name: '重整'
							},
							{
								value: [90, 32, 74, 20, 60],
								itemStyle: {
									normal: {
										areaStyle: {
											type: 'default',
											/*opacity: 1,*/
											color: "#6eaf97" // 图表中各个图区域的颜色
										}
									}
								},
								name: '催化'
							}
						]
					}]
				})

			}

		}
	}
</script>

<style>
	div {
		text-align: ;
		image-orientation: ;
	}
</style>
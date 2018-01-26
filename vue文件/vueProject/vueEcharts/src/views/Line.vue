<template>
	<div>
		<div ref="myEchart" style="width: 100%;height: 450px;"></div>
		<div ref="myEchart2" style="width: 100%;height: 450px;"></div>
	</div>
	
</template>

<script>
	import echarts from "echarts"
	export default {
		name:"Line",
		data(){
			return {
				chart: {},
				chart2: {}
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
				this.chart = echarts.init(this.$refs.myEchart)
				this.chart.setOption({
					title: {
						text: '堆叠区域图'
					},
					tooltip: {
						trigger: 'axis',
						axisPointer: {
							type: 'cross',
							label: {
								backgroundColor: '#6a7985'
							}
						}
					},
					legend: {
						data: ['邮件营销', '联盟广告', '视频广告', '直接访问', '搜索引擎']
					},
					toolbox: {
						feature: {
							saveAsImage: {}
						}
					},
					grid: {
						left: '3%',
						right: '4%',
						bottom: '3%',
						containLabel: true
					},
					xAxis: [{
						type: 'category',
						boundaryGap: false,
						data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
					}],
					yAxis: [{
						type: 'value'
					}],
					series: [{
							name: '邮件营销',
							type: 'line',
							stack: '总量',
							areaStyle: {
								normal: {}
							},
							data: [120, 132, 101, 134, 90, 230, 210]
						},
						{
							name: '联盟广告',
							type: 'line',
							stack: '总量',
							areaStyle: {
								normal: {}
							},
							data: [220, 182, 191, 234, 290, 330, 310]
						},
						{
							name: '视频广告',
							type: 'line',
							stack: '总量',
							areaStyle: {
								normal: {}
							},
							data: [150, 232, 201, 154, 190, 330, 410]
						},
						{
							name: '直接访问',
							type: 'line',
							stack: '总量',
							areaStyle: {
								normal: {}
							},
							data: [320, 332, 301, 334, 390, 330, 320]
						},
						{
							name: '搜索引擎',
							type: 'line',
							stack: '总量',
							label: {
								normal: {
									show: true,
									position: 'top'
								}
							},
							areaStyle: {
								normal: {}
							},
							data: [820, 932, 901, 934, 1290, 1330, 1320]
						}
					]
				})
				
				this.chart2 = echarts.init(this.$refs.myEchart2);
				this.chart2.setOption(
					{
						tooltip: {
							trigger: 'axis'
						},
						legend: {
							data: ['最高', '最低']
						},
						toolbox: {
							show: true,
							orient: 'horizontal', // 布局方式，默认为水平布局，可选为：
							// 'horizontal' ¦ 'vertical'
							x: 'right', // 水平安放位置，默认为全图右对齐，可选为：
							// 'center' ¦ 'left' ¦ 'right'
							// ¦ {number}（x坐标，单位px）
							y: 'top', // 垂直安放位置，默认为全图顶端，可选为：
							// 'top' ¦ 'bottom' ¦ 'center'
							// ¦ {number}（y坐标，单位px）
							color: ['#1e90ff', '#22bb22', '#4b0082', '#d2691e'],
							backgroundColor: 'rgba(0,0,0,0)', // 工具箱背景颜色
							borderColor: '#ccc', // 工具箱边框颜色
							borderWidth: 0, // 工具箱边框线宽，单位px，默认为0（无边框）
							padding: 5, // 工具箱内边距，单位px，默认各方向内边距为5，
							showTitle: true,
							feature: {
								mark: {
									show: true,
									title: {
										mark: '辅助线-开关',
										markUndo: '辅助线-删除',
										markClear: '辅助线-清空'
									},
									lineStyle: {
										width: 1,
										color: '#1e90ff',
										type: 'dashed'
									}
								},
								dataZoom: {
									show: true,
									title: {
										dataZoom: '区域缩放',
										dataZoomReset: '区域缩放-后退'
									}
								},
								dataView: {
									show: true,
									title: '数据视图',
									readOnly: true,
									lang: ['数据视图', '关闭', '刷新'],
									optionToContent: function(opt) {
										var axisData = opt.xAxis[0].data;
										var series = opt.series;
										var table = '<table style="width:100%;text-align:center"><tbody><tr>' +
											'<td>时间</td>' +
											'<td>' + series[0].name + '</td>' +
											'<td>' + series[1].name + '</td>' +
											'</tr>';
										for(var i = 0, l = axisData.length; i < l; i++) {
											table += '<tr>' +
												'<td>' + axisData[i] + '</td>' +
												'<td>' + series[0].data[i] + '</td>' +
												'<td>' + series[1].data[i] + '</td>' +
												'</tr>';
										}
										table += '</tbody></table>';
										return table;
									}
								},
								magicType: {
									show: true,
									title: {
										line: '动态类型切换-折线图',
										bar: '动态类型切换-柱形图',
										stack: '动态类型切换-堆积',
										tiled: '动态类型切换-平铺'
									},
									type: ['line', 'bar', 'stack', 'tiled']
								},
								restore: {
									show: true,
									title: '还原',
									color: 'black'
								},
								saveAsImage: {
									show: true,
									title: '保存为图片',
									type: 'jpeg',
									lang: ['点击本地保存']
								},
								myTool: {
									show: true,
									title: '自定义扩展方法',
									icon: 'image://../asset/ico/favicon.png',
									onclick: function() {
										alert('myToolHandler')
									}
								}
							}
						},
						calculable: true,
						dataZoom: {
							show: true,
							realtime: true,
							start: 20,
							end: 80
						},
						xAxis: [{
							type: 'category',
							boundaryGap: false,
							data: function() {
								var list = [];
								for(var i = 1; i <= 30; i++) {
									list.push('2013-03-' + i);
								}
								return list;
							}()
						}],
						yAxis: [{
							type: 'value'
						}],
						series: [{
								name: '最高',
								type: 'line',
								data: function() {
									var list = [];
									for(var i = 1; i <= 30; i++) {
										list.push(Math.round(Math.random() * 30));
									}
									return list;
								}()
							},
							{
								name: '最低',
								type: 'line',
								data: function() {
									var list = [];
									for(var i = 1; i <= 30; i++) {
										list.push(Math.round(Math.random() * 10));
									}
									return list;
								}()
							}
						]
					}
				)

				
			}

		}
	}
</script>

<style>

</style>
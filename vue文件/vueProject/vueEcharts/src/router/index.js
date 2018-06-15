import Vue from 'vue'
import Router from 'vue-router'
import helloworld from '@/components/helloworld'
import Map from "@/views/Map"
import Line from "@/views/Line"
import Radar from "@/views/Radar"
import home from "@/views/home.vue"
import Pie from "@/views/Pie.vue"

Vue.use(Router)
export default new Router({
	routes:[
		{
			path: '/home',
			name: 'home',
			component: home
		},
		{
			path: '/',
			redirect:"/home",
			name: 'Helloworld',
			component: helloworld
		},
		
		{
			path: '/Map',
			name: 'Map',
			component: Map
		},
		{
			path: '/Line',
			name: 'Line',
			component: Line
		},
		{
			path: '/Radar',
			name: 'Radar',
			component: Radar
		},
		{
			path: '/Pie',
			name: 'Pie',
			component: Pie
		}
	]
})

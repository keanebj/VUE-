import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from "@/views/home"
import VueMap from "@/views/vueMap"
import VueAMap from "@/views/vueAMap"

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect:"/Home",
//    component:Home
    },
    {
    	path: '/Home',
    	name:"Home",
      component:Home
    },
    {
    	path:"/HelloWorld",
    	name:"HelloWorld",
    	component: HelloWorld
    },
    {
    	path:"/vueMap",
    	name:"vueMap",
    	component:VueMap
    },
    {
    	path:"/vueAMap",
    	name:"vueAMap",
    	component:VueAMap
    }
  ]
})

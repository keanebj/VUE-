import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Map from "@/views/Map"
import Line from "@/views/Line"
import Radar from "@/views/Radar"


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
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
    }
  ]
})

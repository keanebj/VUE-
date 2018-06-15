import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/views/Index'
import List from '@/views/List'
import Register from '@/views/Register'
import Map from '@/views/Map'

Vue.use(Router)

var router = new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    }
    
  ]
})

router.beforeEach((to, from, next) => {
//if (to.path !== '/Register' && !localStorage.isRegister) {
//  router.push('/Register')
//  next(false)
//} else {
//  next()
//}
})

export default router

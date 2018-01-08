import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/views/Index'
import List from '@/views/List'
import Register from '@/views/Register'

Vue.use(Router)

var router = new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path: '/Register',
      name: 'register',
      component: Register
    },
    {
      path: '/List',
      name: 'list',
      component: List
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.path !== '/Register' && !localStorage.isRegister) {
    router.push('/Register')
    next(false)
  } else {
    next()
  }
})

export default router

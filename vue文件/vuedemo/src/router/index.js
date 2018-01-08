import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import loading from '@/components/loading'
import model from '@components/model'
import login from "@components/login"
import reg from "@components/reg"

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: HelloWorld 
    },
    {
       path:"/loading",
       name:"loading",
       component:loading 
    },
    {
       path:"/model",
       name:"model",
       component:model 
    },
    {
       path:"/login",
       name:"login",
       component:login 
    },
    {
       path:"/reg",
       name:"reg",
       component:reg 
    }
    
    


  ]
})

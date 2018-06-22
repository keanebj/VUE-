import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);
const store = new Vuex.Store({
    state: {
        count:10,
        userName:"王",
        userId:"123",
        firstName:"王小川",
        lastName:"张小川",
        list:[
        	{
        		name:"苹果",
        		id:"apple",
        		type:true,
        		count:3,
        	},
        	{
        		name:"华为",
        		id:"huawei",
        		type:false,
        		count:10,
        	},
        	{
        		name:"小米",
        		id:"xiaomi",
        		type:true,
        		count:5,
        	},
        	{
        		name:"oppo",
        		id:"oppo",
        		type:true,
        		count:20,
        	}
        ]
    },
    //类似计算属性
    getters:{
    	totalCount:state=>{
    		return state.count+=10
    	},
    	allName:state=>{
    		return state.firstName+state.lastName
    	}
    },
    mutations: {
       increment (state,data) {
       	console.log(state,data)
	      state.count+=data
	   },
	   decrement(state,data){
	   	console.log(state,data)
	   	 state.count-=data	
	   }
	    
    },
    actions: {
		increment (context,data) {
			console.log(context,data)
	      	context.commit('increment',data)
		   },
		decrement(context,data){
		   	 context.commit('decrement',data)
		   }
    },
    //可以分为不同的模块
    modules: {
       
    }
});

export default store;

<template>
  <div class="hello">
   	{{total}}--{{userName}}--{{userId}}
   	<table border="" cellspacing="" cellpadding="">
   		<tr><th>品牌</th><th>库存</th><th>数量</th><th>操作</th></tr>
   		<tr v-for="item in list">
   			<td>{{item.name}}</td>
   			<td>{{item.count}}</td>
   			<td>{{item.count}}</td>
   			<td><button @click="increment(item.count)">添加</button><button @click="decrement(item.count)">减少</button></td>
   		</tr>
   	</table>
   	
  </div>
</template>

<script>
import { mapState,mapGetters,mapMutations,mapActions } from 'vuex'
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: ''
    }
  },
  watch:{},
  computed:{
		...mapState({
			count:state=>state.count,
			userName:state=>state.userName,
			userId:state=>state.userId,
			list:state=>state.list
		}),
		
		...mapGetters({
			totalCount:"totalCount",
			allName:"allName"
		}),
		

  	total(){
  		return this.msg=this.count
  	}
  	
  },
  created(){
  	console.log(this.count,this.$store.state.count,this.totalCount,this.allName)
  	console.log(this.increment)
  },
  mounted(){
  	
  },
  methods:{
  	//vuex 实例方法
    		...mapMutations({
						increment:"increment",
						decrement:"decrement"
					}),
				...mapActions({
					increment:"increment",
					decrement:"decrement"
				}),
				//mutations  方法
//			increment(data){
//					 this.$store.commit('increment',data);
//			},
//			decrement(data){
//					 this.$store.commit('decrement',data);
//			},
//			actions 方法，需要dispatch
//			increment(data){
//      this.$store.dispatch("increment",data);
//	    },
//	    decrement(data) {
//	        this.$store.dispatch("decrement",data)
//	    }
  },
  
  
  beforeCreate(){},
	beforeMount(){},
	beforeUpdate(){},
	updated(){},
	activated(){},
	deactivated(){},
	beforeDestroy(){},
	destroyed(){},
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

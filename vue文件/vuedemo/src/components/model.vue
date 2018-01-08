<template>
   <div>
    <div class="header_nav">
        <a v-link="{path:'/login'}">登陆</a>
        <a v-link="{path:'/reg'}">注册</a>
    </div>
    <div>
       <router-view></router-view>  
    </div>
      

   </div> 
</template>
<script>
    export default{
        name:"model",
        data (){
            return {

            }
        }     
    }
</script>
<style></style>
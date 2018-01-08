<template>
  <div class="main-body">
    <transition name="fade">
      <div class="error-msg" v-show="errMsg">{{errMsg}}</div>
    </transition>
    <div class="input-wrapper">
      <input type="text" placeholder="请输入ETC卡号" @blur="checkEtcCard" v-model="etcCard" @input="input">
    </div>
    <div class="input-wrapper">
      <input type="text" placeholder="请输入身份证号" @blur="checkIdCard" v-model="idCard" @input="input">
    </div>
    <div class="input-wrapper">
      <input type="text" placeholder="请输入车牌号" @blur="checkCarNo" v-model="carNo" @input="input">
    </div>
    <div class="input-wrapper button" :class="{disabled:btnDisabled}" @click="btnClick">下一步</div>
  </div>
</template>

<style scoped>
  .error-msg{
    position: absolute;
    top:0;
    left:0;
    background: rgba(255,0,0,0.5);
    text-align: center;
    line-height:34px;
    width:100%;
    height:34px;
    font-size:24px;
    color:white;
  }

  .fade-enter-active,.fade-leave-active{
    transition: opacity .5s;
  }

  .fade-enter,.fade-leave-active{
    opacity: 0;
  }

  input{
    width: 100%;
    height: 50px;
    border: 1px solid #ccc;
    text-indent: 20px;
    border-radius: 5px;
  }

  .main-body{
    padding:5px 10px;
    box-sizing: border-box;
  }

  .main-body>.input-wrapper{
    margin-top:50px;
  }

  .button{
    width:100%;
    border:1px solid lightgreen;
    background: lightgreen;
    color: white;
    height: 60px;
    border-radius: 5px;
    line-height: 60px;
    text-align: center;
  }

  .button.disabled{
    border:1px solid lightgray;
    background: lightgray;
  }
</style>

<script>
import * as types from '../store/types.js'

export default {
  mounted: function () {
    this.$store.commit(types.CHANGE_HEAD_BAR, {title: '注册'})
  },
  data: function () {
    return {
      btnDisabled: true,
      etcCard: '',
      idCard: '',
      carNo: '',
      errMsg: null
    }
  },
  methods: {
    btnClick () {
      console.log(1)
      localStorage.isRegister = '1'
    },
    checkEtcCard ($event) {
      if (this.etcCard.length === 0) {
        this.errMsg = '请输入ETC卡号'
        $event.target.focus()
      } else {
        this.errMsg = null
      }
    },
    checkIdCard ($event) {
      if (this.idCard.length === 0) {
        this.errMsg = '请输入身份证号'
        $event.target.focus()
      } else {
        this.errMsg = null
      }
    },
    checkCarNo ($event) {
      if (this.carNo.length === 0) {
        this.errMsg = '请输入车牌号'
        $event.target.focus()
      } else {
        this.errMsg = null
      }
    },
    input () {
      var valid = true
      if (!this.etcCard || this.etcCard.length === 0) {
        valid = false
      }
      if (!this.idCard || this.idCard.length === 0) {
        valid = false
      }
      if (!this.carNo || this.carNo.length === 0) {
        valid = false
      }

      this.btnDisabled = !valid
      return valid
    }
  }
}
</script>

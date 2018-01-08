<template>
    <input type="text" :placeholder="placeholder" v-model="val" @input="input">
</template>

<style scoped>
  input{
    width: 100%;
    height: 50px;
    border: 1px solid #ccc;
    text-indent: 20px;
    border-radius: 5px;
  }
</style>

<script>
export default {
  name: 'input-box',
  props: ['placeholderText'],
  data: function () {
    return {
      val: '',
      placeholder: this.placeholderText
    }
  },
  methods: {
    input () {
      this.$emit('input')
    }
  }
}
</script>

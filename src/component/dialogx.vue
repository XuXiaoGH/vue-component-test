<template>
  <div class="content">
    <button @click="biu">点击发射</button>
  </div>
</template>

<script>
export default {
  name: 'dialogx',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods:{
    biu:function(){
      console.log('dialog---->发射');
      this.$root.$emit('btnClick');
    }
  },
  destroyed(){
      console.log('dialog---->销毁开始');
      this.$root.$off('btnClick');
      console.log('dialog---->销毁完成');
      console.log(this.$root);
  }
}
</script>

<style>

  .content{
    width: 300px;
    height: 200px;
    background: #41B883;
    border-radius: 2px;
  }

  button{
    border: none;
    margin: 50px;
  }

</style>

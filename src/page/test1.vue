<template>
  <div class="content">
    我是test1页面
    <router-link to='/test2' style='color:white'> 去test2 </router-link>
    <dialogx></dialogx>
  </div>
</template>

<script>
import dialogx from '../component/dialogx.vue';
export default {
  name: 'test1',
  data () {
    return {
    }
  },
  components:{
      dialogx
  },
  mounted(){
    this.$root.$on('btnClick', ()=>{
        console.log('test1---->页面拦截到了');
    });
  },
  destroyed(){
    console.log('test1----> 销毁自己');
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

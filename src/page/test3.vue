<template>
  <div class="content">
    我是test3页面
    <router-link to='/test1' style='color:white'> 去test1 </router-link>
    <router-link to='/test2' style='color:white'> 去test2 </router-link>
    <dialogx></dialogx>
  </div>
</template>

<script>
import dialogx from '../component/dialogx.vue';
export default {
  name: 'test3',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods:{
   
  },
  components:{
      dialogx
  },
   created(){
     this.$root.eventHub.$on('btnClick', ()=>{
        console.log('test3页面拦截到了');
     });
  },
  /* destroyed(){
      console.log('销毁test3');
      this.$root.eventHub.$off('btnClick');
  } */
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

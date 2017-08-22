<template>
  <div class="content">
    我是test2页面
    <router-link to='/test1' style='color:white'> 去test1 </router-link>
    <dialogx></dialogx>
  </div>
</template>

<script>
import dialogx from '../component/dialogx.vue';
export default {
  name: 'test2',
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
  mounted(){
     this.$root.$on('btnClick', ()=>{
      console.log('test2---->页面拦截到了');
    });
    console.log('test2---->执行完 mounted'); 
  },
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

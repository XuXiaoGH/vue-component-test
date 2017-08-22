import Vue from 'vue'
import App from './App.vue'
import router from './router/router';

new Vue({
  el: '#app',
  router: router,
  /* data: {
        eventHub: new Vue()
  }, */
  render: h => h(App)
})

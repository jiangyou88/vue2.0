import Vue from 'vue'
import App from './App'
import router from './router'
import '../src/assets/styles/reset.css'
// 1px像素边框
import '../src/assets/styles/border.css'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

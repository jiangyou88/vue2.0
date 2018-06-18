import Vue from 'vue'
import App from './App'
import router from './router'
import fastClick from 'fastclick'//移动端点击click 300s点击延迟
import '../src/assets/styles/reset.css'
// 1px像素边框
import '../src/assets/styles/border.css'
import '../src/assets/styles/iconfont.css'

Vue.config.productionTip = false
fastClick.attach(document.body);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

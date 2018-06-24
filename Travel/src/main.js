import Vue from 'vue'
import App from './App'
import router from './router'
import fastClick from 'fastclick'//移动端点击click 300s点击延迟
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'babel-polyfill' //es6代码得以正常运行
import store from './store'
import '../src/assets/styles/reset.css'
// 1px像素边框
import '../src/assets/styles/border.css'
import '../src/assets/styles/iconfont.css'

import 'swiper/dist/css/swiper.css'
Vue.use(VueAwesomeSwiper)

Vue.config.productionTip = false
fastClick.attach(document.body);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})

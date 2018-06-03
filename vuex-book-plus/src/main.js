// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueAwesomeSwiper from 'vue-awesome-swiper';//导入轮播图插件
import 'swiper/dist/css/swiper.css';
Vue.use(VueAwesomeSwiper);//使用轮播图插件

import VueLazyload from 'vue-lazyload';//图片懒加载
Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: 'https://image.baidu.com/search/detail?ct=503316480&z=undefined&tn=baiduimagedetail&ipn=d&word=%E9%94%99%E8%AF%AF%E5%9B%BE&step_word=&ie=utf-8&in=&cl=2&lm=-1&st=undefined&cs=2524588537,786117957&os=212721885,3063672121&simid=3606374895,332465373&pn=3&rn=1&di=151272657580&ln=1983&fr=&fmq=1526888236447_R&fm=&ic=undefined&s=undefined&se=&sme=&tab=0&width=undefined&height=undefined&face=undefined&is=0,0&istype=0&ist=&jit=&bdtype=0&spn=0&pi=0&gsm=0&hs=2&objurl=http%3A%2F%2Fpic.58pic.com%2F58pic%2F15%2F87%2F11%2F39m58PICDQU_1024.jpg&rpstart=0&rpnum=0&adpicid=0',
  loading: 'http://www.kedo.gov.cn/upload/resources/image/2015/11/03/144653551630115504.gif?1496681463372',
  attempt: 1
})

Vue.config.productionTip = false;
//在进入路由之前 每一次都会执行此方法,全局钩子，拦截功能
router.beforeEach(function(to,from,next){
  console.log(to);
  document.title=to.meta.title;
  next();
})
import store from './store';
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})

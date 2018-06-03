import Vue from 'vue'
import Router from 'vue-router'
// import Index from '../components/index.vue'

Vue.use(Router)

export default new Router({
  mode:'history',//去掉url后面#号
  routes: [
    {
      path: '/',
      name: 'Index',
      component: ()=>import('../components/index.vue'),
      meta:{title:'计算属性、指令等知识开发购物车'}
    }
  ]
})

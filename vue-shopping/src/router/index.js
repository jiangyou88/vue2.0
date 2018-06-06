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
    },
    {
      path: '/radio',
      name: 'Radio',
      component: ()=>import('../components/radio.vue'),
      meta:{title:'单选按钮'}
    },
    {
      path: '/checkbox',
      name: 'Checkbox',
      component: ()=>import('../components/checkbox.vue'),
      meta:{title:'复选按钮'}
    },{
      path:'/select',
      name:'Select',
      component:()=>import('../components/select.vue'),
      meta:{title:'下拉选择器'}
    },{
      path:'/bindradio',
      name:'Bindradio',
      component:()=>import('../components/bindradio.vue'),
      meta:{title:'绑定值'}
    }
  ]
})

import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

//页面全局组件
// import Add from '../components/Add.vue';
// import Home from '../components/Home.vue';
// import Collect from '../components/Collect.vue';
// import Detail from '../components/Detail.vue';
// import List from '../components/List.vue';

export default new Router({
  routes: [
    {
      path:"/",
      redirect:"/home"
    },
    //{path:"/",component:Home},
    {
      path:"/home",
      component:()=>import('../components/Home.vue'),
      meta:{keepAlice:true}
    },
    {
      path:"/collect",
      component:()=>import('../components/Collect.vue')
    },
    {
      path:"/add",
      component:()=>import('../components/Add.vue')
    },
    // /detail/1 {bid:1} 路径参数 必须有但是可以随机
    {
      path:"/detail/:bid",
      component:()=>import('../components/Detail.vue'),
      name:"detail"
    },
    {
      path:"/list",
      component:()=>import('../components/List.vue')
    },
    {
      path:"*",
      redirect:"/home"
    }
  ]
})

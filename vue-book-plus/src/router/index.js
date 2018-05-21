import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

//页面全局组件
import Add from '../components/Add.vue';
import Home from '../components/Home.vue';
import Collect from '../components/Collect.vue';
import Detail from '../components/Detail.vue';
import List from '../components/List.vue';

export default new Router({
  routes: [
    {path:"/",redirect:"/home"},
    //{path:"/",component:Home},
    {path:"/home",component:Home,meta:{keepAlice:true}},
    {path:"/collect",component:Collect},
    {path:"/add",component:Add},
    // /detail/1 {bid:1} 路径参数 必须有但是可以随机
    {path:"/detail/:bid",component:Detail,name:"detail"},
    {path:"/list",component:List},
    {path:"*",redirect:"/home"}
  ]
})

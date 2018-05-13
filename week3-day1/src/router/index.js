import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);//和以前不一样的地方引入router必须使用use
import Home from "../components/Home.vue";
import List from "../components/List.vue";
let router=new VueRouter({
    routes:[
        {path:"",component:Home},
        {path:"/home",component:Home},
        {path:"/list",component:List}
    ]
})
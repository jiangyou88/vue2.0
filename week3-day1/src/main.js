import Vue from "vue";//runtime不支持template 只支持render
import App from "./App.vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);//和以前不一样的地方引入router必须使用use
import Home from "./components/Home.vue";
import List from "./components/List.vue";
let router=new VueRouter({
    routes:[
        {path:"",component:Home},
        {path:"/home",component:Home},
        {path:"/list",component:List}
    ]
})
new Vue({
    el:"#app",
    router,
    render:h=>h(App)
})
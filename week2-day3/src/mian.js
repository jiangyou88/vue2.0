import Vue from "vue";
//这样直接引用vue 引用的并不是vue.js 引用的是vue的runtime
//vue=compile+runtime(Compiler 可以编译模板)

import App from "./App.vue";
//console.log(App);
new Vue({
    //render函数的作用是将虚拟dom渲染成真实的dom
    //createElement返回的是虚拟的dom
    render:(h)=> h(App)
}).$mount("#app");
document.body.innerHTML='hello';

import Vue from 'vue';
import Vuex from 'vuex';
import App from './App.vue';
Vue.use(Vuex);
//容器是唯一的
const state={count:0};
let store=new Vuex.Store({
    state
});

//计数器
new Vue({
    el:'#app',
    ...App,
    store//store被注册到了实例上 所以有组件都会有一个属性 this.$store
})
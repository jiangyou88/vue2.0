import Vue from "vue";//runtime不支持template 只支持render
import App from "./App.vue";
import router from "./router";

import notify from "./plugin/notify";
Vue.use(notify);

new Vue({
    el:"#app",
    router,
    render:h=>h(App)
})
import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'Index',
      component: ()=>import('../components/index.vue'),
      meta:{title:'vue-todos'}
    }
  ]
})

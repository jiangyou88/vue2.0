import Vue from 'vue'
import Router from 'vue-router'
import Treemuen from '@/components/Tree'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Tree',
      component: Treemuen
    }
  ]
})

import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode:'history',
  linkActiveClass:"active",
  routes: [
    {
      path:'/',
      name:'Home',
      component:()=>import('../components/Home.vue'),
      meta:{title:'首页'}
    },
    {
      path: '/home',
      name: 'Home',
      component: ()=> import('../components/Home.vue'),
      meta:{title:'首页'}
    },
    {
      path:'/explorer',
      name:'Explorer',
      component:()=> import('../components/Explorer.vue'),
      meta:{title:'分类'}
    },
    {
      path:'/cart',
      name:'Cart',
      component:()=> import('../components/Cart.vue'),
      meta:{title:'购物车'}
    },
    {
      path:'/me',
      name:'Me',
      component:()=> import('../components/Me.vue'),
      meta:{title:'我'}
    },
    {
      path:'/book/:id',
      name:'BookDetails',
      component:()=>import('../components/BookDetails.vue'),
      meta:{title:'详情'}
    }
  ]
})

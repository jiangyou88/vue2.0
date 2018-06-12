<template>
  <div id="app">
    <div class="tabs">
      <ul>
        <li>
          <!-- 使用router-link指向定义的path -->
          <router-link :to="{name:'Home'}">
            <div><img src="./assets/images/home.svg" /></div>
            <div>首页</div>
          </router-link>
        </li>
        <li>
          <router-link :to="{name:'Explorer'}">
            <div><img src="./assets/images/category.svg" /></div>
            <div>分类</div>
          </router-link>
        </li>
        <li>
          <router-link :to="{name:'Cart'}">
            <div><img src="./assets/images/cart.svg" /></div>
            <div>购物车</div>
          </router-link>
        </li>
        <li>
          <router-link :to="{name:'Me'}">
            <div><img src="./assets/images/me.svg" /></div>
            <div>我</div>
          </router-link>
        </li>
        <li>
          <router-link :to="{name:'BookDetails',params:{id:'1'}}">
            <div>详情</div>
          </router-link>
        </li>
      </ul>
    </div>
    <div class="content">
      <!-- 用router-view渲染视图 -->
      <transition name="slide-fade">
        <router-view/>
      </transition>
    </div>  
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.slide-fade-enter-active{
  transition: all .3s ease;
}
.slide-fade-leave-active{
  transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter,.slide-fade-leave-active{
  transform: translateX(-430px);
  opacity: 0;
}
</style>

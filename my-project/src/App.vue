<template>
  <div id="app">
    <div class="tabs">
      <ul>
        <li>
          <!-- 使用router-link指向定义的path -->
          <router-link to="/home">
            <div><img src="./assets/images/home.svg" /></div>
            <div>首页</div>
          </router-link>
        </li>
        <li>
          <router-link to="/explorer">
            <div><img src="./assets/images/category.svg" /></div>
            <div>分类</div>
          </router-link>
        </li>
        <li>
          <router-link to="/cart">
            <div><img src="./assets/images/cart.svg" /></div>
            <div>购物车</div>
          </router-link>
        </li>
        <li>
          <router-link to="/me">
            <div><img src="./assets/images/me.svg" /></div>
            <div>我</div>
          </router-link>
        </li>
      </ul>
    </div>
    <div class="content">
      <!-- 用router-view渲染视图 -->
      <router-view/>
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
</style>

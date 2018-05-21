<template>
  <div id="app">
    <Footer></Footer>
    <!-- 需要缓存的 -->
    <transition name="fadeIn">
    <keep-alive>
    <router-view v-if="$route.meta.keepAlice"></router-view>
    </keep-alive>
    </transition>
    <!-- 正常的访问走下面 -->
    <transition name="fadeIn">
    <router-view v-if="!$route.meta.keepAlice"></router-view>
    </transition>
  </div>
</template>

<script>
import Footer from './components/Footer';
export default {
  name: 'App',
  components: {
    Footer
  }
}
</script>

<style>
*{margin: 0;padding: 0;}
ul,li{list-style: none;}
a{text-decoration: none;}
input,button{appearance: none;}
.content{position: fixed;width: 100%;top: 40px;bottom: 50px;overflow: auto;}
.fadeIn-enter{
  opacity: 0;
}
.fadeIn-enter-active{
  transition: all 0.3s linear;
}
.fadeIn-leave-active{
  transition: all 0.3s linear;
  opacity: 0;
}
</style>

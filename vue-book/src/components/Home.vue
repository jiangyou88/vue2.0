<template>
  <div>
    <Header>首页</Header>
    <div class="content">
      <Swiper></Swiper>
    </div>
  </div>
</template>
<script>
//1.引入组件2.注册组件3.使用组件
import Header from './Header';
import Swiper from '../base/Swiper';
export default {
  components: {
    Header,Swiper
  }
}
</script>
<style lang="less" scoped>

</style>



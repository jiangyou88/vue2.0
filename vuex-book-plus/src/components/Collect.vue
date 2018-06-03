<template>
  <div>
    <Header :back="true">购物车</Header>
    <ul class="content">
      <li v-for="(list,index) in cartList" :key="index">
          <img :src="list.bookCover" alt="图片加载失败" />
          <button>-</button>{{list.bookCount}}<button>+</button>
          <p>小计:{{(list.bookPrice*list.bookCount).toFixed(2)}}</p>
          <button>删除</button>
      </li>
      <li>共{{count}}本</li>
    </ul>
  </div>
</template>
<script>
import Header from './Header';
//辅助函数 语法糖
import {mapState,mapGetters} from 'vuex';
console.log(...mapState(['cartList']));
export default {
  computed:{
    ...mapGetters(['count']),
    ...mapState(['cartList']),
    //等价于下面的
    // cartList(){
    //   return this.$store.state.cartList
    // }
  },
  components: {
    Header
  }
}
</script>
<style lang="less" scoped>

</style>



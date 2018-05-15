<template>
  <div>
    <Header>首页</Header>
    <div class="content">
      <Swiper :swiperSlides="sliders"></Swiper>
      <div class="container">
        <h3>热门图书</h3>
      <ul>
        <li v-for="(hot,index) in hotBooks" :key="index">
            <img :src="hot.bookCover">
            <b>{{hot.bookName}}</b>{{index}}
          </li>
      </ul>
      </div>
    </div>
  </div>
</template>
<script>
//1.引入组件2.注册组件3.使用组件
import Header from "./Header";
import Swiper from "../base/Swiper";
import { getSliders, getHotBook } from "../api";
export default {
  data() {
    return { sliders: [], hotBooks: [] };
  },
  created() {
    this.getSlider(); //获取轮播图
    this.getHot(); //获取最新图书
  },
  methods: {
    async getSlider() {
      //给data起别名 对象中的属性名字必须和得到的结果名字一致
      this.sliders = await getSliders();
    },
    async getHot() {
      this.hotBooks = await getHotBook();
    }
  },
  components: {
    Header,
    Swiper
  }
};
</script>
<style lang="less" scoped>
h3 {
  color: #999;
  padding: 5px 0;
}
.container {
  width: 90%;
  margin: 0 auto;
  ul {
    display: flex;
    flex-wrap: wrap;
    padding-bottom: 10px;
    li {
      width: 50%;
      text-align: center;
      img {
        width: 100%;
      }
    }
  }
}
</style>



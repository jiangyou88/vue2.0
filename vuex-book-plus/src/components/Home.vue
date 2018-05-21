<template>
  <div>
    <Header>首页</Header>
    <div class="content">
      <Loading v-if="loading"></Loading>
      <template v-else>
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
      </template>
    </div>
  </div>
</template>
<script>
//1.引入组件2.注册组件3.使用组件
import Header from "./Header";
import Swiper from "../base/Swiper";
import Loading from "../base/Loading";
import { getAll } from "../api";
export default {
  data() {
    return { sliders: [], hotBooks: [],loading:true };
  },
  created() {
    this.getData();
  },
  methods: {
    async getData(){
      let [sliders,hotBooks]=await getAll();//[sliders,books]
      this.sliders=sliders;
      this.hotBooks=hotBooks;
      //... 轮播图和热门图书已经获取完成
      this.loading=false;
    }
  },
  components: {
    Header,
    Swiper,
    Loading
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



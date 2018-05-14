<template>
  <div>
    <Header>首页</Header>
    <div class="content">
      <Swiper :swiperSlides="sliders"></Swiper>
    </div>
  </div>
</template>
<script>
//1.引入组件2.注册组件3.使用组件
import Header from "./Header";
import Swiper from "../base/Swiper";
import { getSliders } from "../api";
export default {
  data() {
    return { sliders: [] };
  },
  async created() {
    //给data起别名 对象中的属性名字必须和得到的结果名字一致
    let { data: sliders } = await getSliders();
    //将获取的数据放到sliders中
    this.sliders = sliders;
  },
  components: {
    Header,
    Swiper
  }
};
</script>
<style lang="less" scoped>

</style>



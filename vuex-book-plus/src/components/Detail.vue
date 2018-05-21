<template>
  <div class="detail">
    <Header :back="true">详情页{{bid}}</Header>
    <ul>
      <li>
        <label for="bookName">书的名称</label>
        <input type="text" v-model="book.bookName" id="bookName" />
      </li>
      <li>
        <label for="bookInfo">书的信息</label>
        <input type="text" v-model="book.bookInfo" id="bookInfo" />
      </li>
      <li>
        <label for="bookPrice">书的价格</label>
        <input type="text" v-model.number="book.bookPrice" id="bookPrice" />
      </li>
    </ul>
    <button @click="updated">确认修改</button>
  </div>
</template>
<script>
import Header from "./Header";
import { findOneBook,updateBook } from "../api";
export default {
  data() {
    return { book: {} };
  },
  watch: {
    $route() {
      //只要路径变化，重新获取数据
      this.getData();
    }
  },
  created() {
    //页面一加载 需要根据id 发送请求
    this.getData();
  },
  methods: {
    //点击修改图书信息
    async updated () {
       await updateBook(this.bid,this.book);
       this.$router.push('/list');//修改完成后跳转页面
    },
    async getData() {
      //通过id找到某一项后 赋给book
      this.book = await findOneBook(this.bid);
      //如果是空对象 需要跳转回列表页
      //$router是方法 $route是属性
      Object.keys(this.book).length > 0 ? void 0 : this.$router.push("/list");
    }
  },
  computed: {
    bid() {
      return this.$route.params.bid; //将路径参数的id映射到bid上
    }
  },
  components: {
    Header
  }
};
</script>
<style lang="less" scoped>
ul {
  margin: 50px 10px 0 10px;
  label{
    display: block;
    font-size: 25px;
  }
  input{
    margin:10px 0;
    height: 25px;
    width:100%;
  }
}
.detail {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: #fff;
  z-index: 1;
  button{
    display: block;
      width: 60px;
      height: 35px;
      background: #afd9ee;
      color: #fff;
      border:none;
      border-radius: 4px;
      outline: none;
  }
}
</style>



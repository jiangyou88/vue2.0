<template>
<div>
  <Header :back="true">添加</Header>
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
      <li>
        <label for="bookCover">书的封面</label>
        <input type="text" v-model="book.bookCover" id="bookCover" />
      </li>
    </ul>
    <button @click="add">添加</button>
</div> 
</template>
<script>
import Header from "./Header";
import {addBook} from '../api'
export default {
  data(){
      return {book:{}};
  },
  methods: {
    async add(){
      await addBook(this.book);
      this.$router.push('/list');
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
  label {
    display: block;
    font-size: 25px;
  }
  input {
    margin: 10px 0;
    height: 25px;
    width: 100%;
  }
}
button {
  display: block;
  width: 60px;
  height: 35px;
  background: #afd9ee;
  color: #fff;
  border: none;
  border-radius: 4px;
  outline: none;
}
</style>



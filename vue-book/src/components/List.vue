<template>
  <div>
      <Header :back="true">列表页</Header>
      <div class="content">
        <ul>
          <router-link v-for="(book,index) in books" :key="index" to="{name:'detail',params:{bid:book.bookId}}" tag="li"> 
            <img :src="book.bookCover" alt="" />
            <div>
              <h4>{{book.bookName}}</h4>
              <p>{{book.bookInfo}}</p>
              <b>{{book.bookPrice}}</b>
            </div>
            <button @click.stop="remove(book.bookId)">删除</button>
          </router-link>
          
        </ul>
      </div>
  </div>
</template>
<script>
import Header from './Header'
import {getBooks,removeBook} from '../api';
export default {
  data(){
    return {books:[]}
  },
  created () {
      this.getData();
  },
  methods: {
    async getData(){
        this.books=await getBooks();
    },
    async remove(id){
      await removeBook(id);
      //要删除前台数据
      this.books=this.books.filter(item=>item.bookId!==id);
    }
  },
  components: {
    Header
  }
}
</script>
<style lang="less" scoped>
.content ul{
  padding: 10px;
  li{
    display: flex;
    padding: 10px 0;
    border-bottom: 1px solid #ccc;
    button{
      display: block;
      width: 60px;
      height: 35px;
      background: orangered;
      color: #fff;
      border:none;
      border-radius: 10px;
      outline: none;
    }
    h4{
      font-size: 20px;
      line-height: 25px;
    }
    p{
      color: #2a2a2a;
      line-height: 25px;
    }
    b{
      color: red;
    }
    img{
      width: 130px;
      height: 150px;
    }
  }
}
</style>



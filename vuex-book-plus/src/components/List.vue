<template>
  <div>
      <Header :back="true">列表页</Header>
      <!-- scrollTop+元素.clientHeight+20==元素.scrollHeight -->
      <div class="content" ref="scroll" @scroll="loadMore">
        <ul>
          <router-link v-for="(book,index) in books" :key="index" :to="{name:'detail',params:{bid:book.bookId}}" tag="li"> 
            <img v-lazy="book.bookCover" alt="" />
            <div>
              <h4>{{book.bookName}}</h4>
              <p>{{book.bookInfo}}</p>
              <b>{{book.bookPrice}}</b>
            </div>
            <button @click.stop="remove(book.bookId)">删除</button>
            <button @click.stop="addCart(book)">添加</button>
          </router-link>
          
        </ul>
        <div @click="more" class="more">加载更多</div>
      </div>
  </div>
</template>
<script>
import Header from './Header'
import {pagination,removeBook} from '../api';
import * as Types from '../store/mutations-type.js';
export default {
  data(){
    //offet代表的是偏移量 hasMore 是否有更多 默认不是正在加载
    return {books:[],offset:0,hasMore:true,isLoading:false}
  },
  created () {
      this.getData();
  },
  methods: {
    addCart(book){
      this.$store.commit(Types.ADD_CART,book);
    },
    loadMore(){
      //触发scroll事件 可能触发n次 先进来开一个定时器，下次触发时将上一次定时器清除掉
      clearTimeout(this.timer);
      this.timer = setTimeout(()=>{//函数节流 防抖
             //卷去的高度 当前可见区域  总高
         let {scrollTop,clientHeight,scrollHeight}= this.$refs.scroll;
         if(scrollTop+clientHeight+20>scrollHeight){
           this.getData();//加载更多
         }
      },13)
     
    },
    more(){
      this.getData();
    },
    async getData(){

      if(this.hasMore&&!this.isLoading){//有更多的时候获取数据
        this.isLoading=true;
        let {hasMore,books}=await pagination(this.offset);
        this.books=[...this.books,...books];//获取的书放到books属性上
        this.hasMore=hasMore;
        this.isLoading=false;//加载完毕
        this.offset=this.books.length;//维护偏移量 就是总书的长度
      }
        
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
.more{
  margin: 10px;
  background: #2afedd;
  height: 30px;
  line-height: 30px;
  text-align: center;
  font-size: 20px;
}
</style>



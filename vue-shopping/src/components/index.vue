<template>
  <div class="content" v-if="lists.length" v-cloak>
    <table>
      <thead>
        <tr>
          <th>商品名称</th>
          <th>商品单价</th>
          <th>购买数量</th>
          <th>操作</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item,index) in lists" :key="index">
          <td>{{index+1}}</td>
          <td>{{item.name}}</td>
          <td>{{item.price}}</td>
          <td>
            <button @click="handleReduce(index)" :disabled="item.count===1">-</button>
            {{item.count}}
            <button @click="handleAdd(index)">+</button>
          </td>
          <td>
            <button @click="handleRemove(index)">移除</button>
          </td>
        </tr>
      </tbody>
    </table>
    <div>总价:￥{{totalPrice}}</div>
  </div>
  <div v-else>购物车为空</div>
</template>

<script>
import { getLists } from "../api";
export default {
  name: "Index",
  data() {
    return {
      lists: []
    };
  },
  created() {
    this.getListDate();
  },
  computed: {
    totalPrice(){
      let total=0;
      for(let i=0;i<this.lists.length;i++){
        let item=this.lists[i];
        this.$set(item,'num',1);
        total+=item.price*item.count;
      }
      return total.toString().replace(/\B(?=(\d{3})+$)/g,',');
    }
  },
  methods: {
    handleRemove(index){
      this.lists.splice(index,1);
    },
    handleAdd(index){
      this.lists[index].count++;
    },
    handleReduce(index){
      if(this.lists[index].count===1) return;
      this.lists[index].count--;
    },
    async getListDate() {
      this.lists = await getLists();
      console.log(this.lists);
    }
  }
};
</script>

<style lang="less" scoped>
[v-cloak] {
  display: none;
}
table {
  border: 1px solid #e9e9e9;
  border-collapse: collapse;
  border-spacing: 0;
  empty-cells: show;
  th, td {
    padding: 8px 16px;
    border: 1px solid #e9e9e9;
    text-align: left;
  }
  th{
    background: #f7f7f7;
    color: #5c6b77;
    font-weight: 600;
    white-space: nowrap;
  }
}
</style>


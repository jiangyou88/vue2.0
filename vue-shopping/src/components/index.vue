<template>
  <div class="content">
    购物车
  </div>
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
  methods: {
    async getListDate() {
      this.lists = await getLists();
      console.log(this.lists);
    }
  }
};
</script>

<style lang="less" scoped>
</style>


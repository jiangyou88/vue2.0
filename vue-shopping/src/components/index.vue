<template>
  <div class="content">
    购物车
  </div>
</template>

<script>
import { getList } from "../api";
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
      this.lists = await getList();
    }
  }
};
</script>

<style lang="less" scoped>
</style>


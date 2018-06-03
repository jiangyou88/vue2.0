<template>
  <div class="footer">
        <router-link to="/home"><i class="iconfont icon-index"></i><span>首页</span></router-link>
        <router-link to="/list"><i class="iconfont icon-liebiaoyemian"></i><span>列表</span></router-link>
        <router-link to="/collect"><i class="iconfont icon-shoucang"></i><span>购物车</span></router-link>
        <router-link to="/add"><i class="iconfont icon-tianjia"></i><span>添加</span></router-link>
  </div>
</template>
<script>
export default {
  name: "Footer"
};
</script>
<!-- 
display:flex
flex-direction:row/column
justfy-content:center 垂直居中
align-item:center 横向居中
flex:1每份占1
-->
<style lang="less" scoped>
.footer {
  position: fixed;
  left: 0;
  bottom: 0;
  z-index: 1;
  width: 100%;
  height: 50px;
  display: flex;
  border-top: 1px solid #ccc;
  a {
    color: #000;
    display: flex;
    flex-direction: column;
    flex: 1;
    align-items: center;
    justify-content: center;
  }
  a.router-link-active {
    color: red;
  }
}
</style>



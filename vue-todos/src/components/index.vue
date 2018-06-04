<template>
  <div class="content">
    <h1>{{ title }}</h1>
    <ul>
      <!-- 如果没有在id前面加上":"，那么Vue就会认为我们正在为id属性赋予一个字符串 -->
      <li v-for="(todo,index) in todos" :key="index" :id="index">
          <label>{{index+1}}.{{todo.value}}</label>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Index',
  data () {
    return {
      title: 'vue-todos',
      todos:[
        {value:'阅读一本关于钱的开发的书',done:false},
        {value:'补充范例代码',done:true},
        {value:'写心得',done:false}
      ]
    }
  }
}
</script>

<style lang="less" scoped>
@import '../assets/site.less';
@import '../assets/todos.less';

</style>

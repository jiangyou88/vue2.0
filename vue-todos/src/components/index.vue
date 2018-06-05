<template>
  <div class="content">
    <h1>{{ title }}</h1>
    <ul class="todos">
      <li>
        <!-- autofocus="true"当页面加载的时候自动获取input的焦点  -->
        <input type="text" placeholder="快写下您要我记住的事吧" autofocus="true" v-model="newTodo" @keyup.13="addItem"/>
      </li>
      <!-- 如果没有在id前面加上":"，那么Vue就会认为我们正在为id属性赋予一个字符串 -->
      <li v-for="(todo,index) in todos" :key="index" :id="index" :class="{'checked':todo.done}">
          <input type="checkbox" v-model="todo.done" @change="saveToStore" />
          <label>{{index+1}}.{{todo.value}}</label>
          <time>{{todo.created | date}}</time>
          <button @click.prevent="delItem(todo)"></button>
      </li>
    </ul>
  </div>
</template>

<script>
import moment from 'moment';
import 'moment/locale/zh-cn';
moment.locales('zh-cn');
export default {
  name: 'Index',
  data () {
    return {
      title: 'vue-todos',
      newTodo:"",
      todos:[
        {value:'阅读一本关于钱的开发的书',done:false,created:Date.now()},
        {value:'补充范例代码',done:true,created:Date.now()+300000},
        {value:'写心得',done:false,created:Date.now()-30000000}
      ]
    }
  },
  created(){
    console.log(this.is_initialized);
    if(this.is_initialized){
      this.todos=JSON.parse(localStorage.getItem('VUE-TODOS'));
    }
  },
  computed:{
    is_initialized(){
      return localStorage.getItem('VUE-TODOS')!=null;
    }
  },
  // 在所有的过滤器中是没有this引用的，过滤器内的this是一个undefined的值，所以不要在过滤器内尝试引用组件实例内的变量或方法，否则会引发空值引用的异常
  filters:{
    date(val){
      return moment(val).calendar();
    }
  },
  methods:{
    addItem(){
      this.todos.push({
        value:this.newTodo,
        created:Date.now(),
        done:false
      });
      this.saveToStore();
      this.newTodo='';
    },
    delItem(todo){
      this.todos=this.todos.filter((x)=>x!==todo);
      this.saveToStore();
    },
    saveToStore(){
      localStorage.setItem('VUE-TODOS',JSON.stringify(this.todos));
    }
  }
}
</script>

<style lang="less" scoped>
@import '../assets/site.less';
@import '../assets/todos.less';

</style>

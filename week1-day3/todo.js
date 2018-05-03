const vm=new Vue({
    el:"#app",
    directives: {
        focus(el,bindings){
            //当点击当前li时让内部的输入框获取焦点
            if(bindings.value){
                el.focus();//获取焦点
            }
        }
    },
    data:{
        todos:[
            {isSelected:false,title:"睡觉"},
            {isSelected:false,title:"吃饭"}
        ],
        title:"",
        cur:""
    },
    created () {//ajax获取 初始化数据
        //如果localStorage中有数据 就用有的 没数据 就用默认的
        this.todos=JSON.parse(localStorage.getItem("data"))||this.todos;
    },
    watch: {
        todos:{//watch默认只监控一层的数据变化，深度监控
            handler(){//默认写成函数 就相当于默认写了个handler
                localStorage.setItem("data",JSON.stringify(this.todos));
            },deep:true
        }
    },
    computed: {
      count(){
          return this.todos.filter(item=>!item.isSelected).length;
      }  
    },
    methods: {
        add(){//keydown/keyup差一个单词，keydown的时候内容没有进入到输入框内
            this.todos.push({isSelected:false,title:this.title});
            this.title="";
        },
        //拿到当前点击的和数组里的比对相等则返回false即可
        remove(todo){
            this.todos=this.todos.filter(item=>item!==todo);
        },
        remember(data){//当前传递的是todo (当前点击的这一项)
            this.cur=data;
        },
        cancel(){
            this.cur="";
        }
    }
});
//将数据循环到页面上
//2.敲回车时添加新数据(需要加入isSelected属性)
//3.删除功能
//4.计算一下档期没有被选中的个数
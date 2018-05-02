## vue 第一天复习
- vm =>viewModel 数据最终都会被vm所代理
- {{a}} 取值表达式，通过{{}}来进行取值，默认可以不写this，表达式 赋值运算 计算 三元表达式 尽量少写逻辑(computed)
- 指令：dom元素的行间属性，vue提供了内置的指令，必须v-开头，后面的值均为变量
  - v-model(表单元素) 忽略掉value,checked,selected,将数据绑定到试图上，试图修改后会影响数据的变化

## 安装
```
npm install vue axios bootstrap
```
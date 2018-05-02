## 框架和库
- 框架 vue 拥有完整的解决方案 我们写好人家调用我 渐进式框架
- 库 jquery underscore(模板库) zepto animate.css 我们调用它

## 渐进式 (渐进增强)
- vue全家桶 vue.js + vue-router + vuex + axios
- 通过组合 完成一个完整的框架

## vue概述
- 是一套构建用户界面的渐进式框架

## vue的特点
- 核心只关注试图层(view)
- 易学，轻量，灵活的特点
- 使用于移动端项目
- 渐进式框架

## 渐进式的理解
- 声明式渲染(无需关心如何实现)
- 组件系统
- 客户端路由(vue-router)
- 大规模状态管理(vuex)
- 构建工具(vue-cli)

## vue的两个核心点
- 响应的数据变化
  - 当数据发生改变->视图自动更新
- 组合的视图组件
- ui页面映射为组件树
- 划分组件可维护，可复用，可测试

## MVVM模式(angular,vue)
- model数据
- view 视图
- viewModel 视图模型

## MVC
- model数据
- view 视图
- controller 控制器

## Object.defineProperty(es5)的没有替代方案
- 不支持ie8<=

## 安装vue
- cdn的方式(<script src="https://cdn.jsdelivr.net/npm/vue@2.5.16/dist/vue.js"></script>)
)
- npm install vue
```
npm init -y(一键生成)
> 初始化会产生一个pacakge.json的文件这个文件用来描述项目的依赖，不能有大写 特殊字符 中文，而且不要和安装的包的名字相同
```
## 安装插件
- npm install vue axios bootstrap
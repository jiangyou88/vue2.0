## 地址
- https://github.com/dotnetage

- build 存放用于编译用的webpack配置与相关的辅助工具代码
- config 存放三大环境配置文件，用于设定环境变量和必要的路径信息
- test 存放E2E测试与单元测试文件以及相关的配置文件
- static 存放项目所需要的静态资源文件
- dist 存放运行npm run build指令后的生产环境输出文件，可直接部署到服务器对应的静态资源文件夹内，该文件夹只有在运行build之后才会生成

## 1. 编译开发环境
- 在开发环境下通过以下指令加载运行Vue项目
```
npm run dev
```
- 这个指令的配置是在package.json的script属性中设置的，实质上它是由npm 来引导执行入口程序dev-server.js完成以下的加载过程
 - 加载环境变量——合并webpack配置——配置热加载——配置代理服务——配置回退支持——配置静态资源——加载开发服务器

## 加载环境变量
- 该环节从config目录加载index.js和dev.env.js两个模块，准备开发调式环境所必需的一些目录和全局变量

## 合并webpack配置
- 在build目录下一共有三个webpack的配置文件
 - webpack.base.conf.js 公用的基本webpack配置
 - webpack.dev.conf.js 开发环境专用的webpack配置项
 - webpack.prod.conf.js 生产环境专用的webpack配置项

## 配置热加载
## 配置代理服务器
## 配置静态资源
## 加载开发服务器
--------------- 以上就是npm run dev的完整执行思路---------------------

## 2.编译生产环境
- 当项目准备发布时，在命令行键入 npm run build

## webpack的目标：
- 把依赖树按需分割
- 把初始加载时间控制在较低的水平
- 每个静态资源都应该成为一个模块
- 能把第三方库集成到项目里成为一个模块
- 能定制模块打包器的每个部分
- 能适用于大型项目

## 加载器
- vue-loader 用于加载与编译.vue文件
- vue-style-loader 用于加载.vue文件中的样式
- style-loader 用于将样式直接插入到页面的<style>内
- css-loader 用于加载.css样式表文件
- less-loader 用于编译于加载.less文件(需要依赖less库)
- babel-loader 用于将ES6编译成为浏览器兼容的ES5
- file-loader 用于直接加载文件
- url-loader 用于加载URL指定的文件，多用于字体与图片的加载
- json-loader 用于加载.json文件为JS实例


## 设计原型
- Sketch

## 3.1 vue-router
- 从传统意义上说，路由就是定义一系列的访问地址规则，路由引擎根据这些规则匹配并找到对应的处理页面，然后将请求转发给页面进行处理。可以说所有的后端开发都是这样做的，而前端路由是不存在"请求"一说的
- 前端路由是直接找到与地址匹配的一个组件或对象并将其渲染出来。
- 改变浏览器地址而不向服务器发出请求有两种做法：
 - 1.是在地址中加入#以欺骗浏览器，地址的干部是由于正在进行页内导航
 - 2.是使用HTML5的window.history功能，使用URL的Hash来模拟一个完整的URL

## 路由配置（一级）
- 首页 /home Home.vue
- 分类 /explorer Explorer.vue
- 购物车 /cart Cart.vue
- 我 /me Me.vue

## 路由与导航
- router-view 渲染路径匹配到的视图组件，它还可以内嵌自己的<router-vuew>,根据嵌套路径渲染嵌套组件
- router-link 支持用户在具有路由功能的应用中(点击)导航

## 路由配置（二级）
- 图书详情(BookDetails)
- 结算(Checkout)
- 收货地址(Address)
- 个人资料(Profile)
- 订单(Orders)


# my-project

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

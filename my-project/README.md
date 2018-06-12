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

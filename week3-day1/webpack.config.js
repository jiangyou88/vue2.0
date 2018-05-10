//webpack必须采用common.js写法
const path = require('path'); //专门处理路径用的
//专门处理路径用的，以当前路径解析出一个绝对路径
//console.log(path.resolve("./dist"));

let HtmlWebpackPlugin=require("html-webpack-plugin");
module.exports = {
    entry: "./src/mian.js", //打包的入口文件，webpack会自动查找相关的依赖进行打包
    output: {
        filename: "bundle.js", //打包后的名字
        path: path.resolve(__dirname, "dist") //必须是一个绝对路径
    },
    //模块的解析规则
    //-js 匹配所有的js 用babel-loader转义 排除掉node_modules
    module:{
        rules:[
            {test:/\.js$/,use:'babel-loader',exclude:/node_modules/},
            //use是从右往左写
            {test:/\.css$/,use:['style-loader','css-loader']},
            {test:/\.less$/,use:['style-loader','css-loader','less-loader']},
            //转化base64只在8192字节以下转化，其他情况下输出图片
            {test:/\.(jpg|png|gif)$/,use:'url-loader?limit=9192'},
            {test:/\.(eot|svg|woff|woff2|wtf)$/,use:'url-loader'},
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({//自动插入到dist目录中
            template:"./src/index.html",//使用的模板
            //filename:"login.html"//产出的文件名字
        })
    ]
}
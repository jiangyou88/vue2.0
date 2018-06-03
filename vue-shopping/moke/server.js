let express = require('express');
let app = express();
let fs=require("fs");
app.listen(3000);
let lists = require('./lists');
// let bodyParser=require('body-parser');//Express 常用中间件 body-parser 实现解析
// app.use(bodyParser.json());// 创建 application/json 解析
// app.use(express.static(__dirname));//设置静态文件目录

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
  res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
  res.header("X-Powered-By", ' 3.2.1')
  if (req.method == "OPTIONS") res.send(200); /*让options请求快速返回*/
  else next();
});
function read(cb){
    fs.readFile('./lists.json','utf8',function(err,data){
        if(err||data.length===0){
            cb([]);
        }else{
            cb(JSON.parse(data));
        }
    })
}
app.get('/lists',function(req,res){
    read(function(lists){
        res.json(lists);
    })
});

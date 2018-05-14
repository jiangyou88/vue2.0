let http = require("http");
let fs = require("fs");
let url = require("url");
let port = 3000;

//获取轮播图/sliders
let sliders = require("./sliders")
http.createServer(function (req, res) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
    res.setHeader("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.setHeader("X-Powered-By",' 3.2.1')
    if(req.method=="OPTIONS") return res.end();/*让options请求快速返回*/
    let { pathname, query} = url.parse(req.url);
    console.log(url.parse(req.url));
  if (pathname === "/sliders") {
    res.setHeader('Content-Type', 'application/json;charset=utf8');
    res.end(JSON.stringify(sliders));
  }
}).listen(port);

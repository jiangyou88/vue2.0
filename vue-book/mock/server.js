let http=require("http");
let fs=require("fs");
let url=require("url ");
let port=3000;

//获取轮播图/sliders
http.createServer(function(req,res){
    let {pathname,query}=url.parse(req.url);
}).listen(port);
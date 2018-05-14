let http=require("http");
let fs=require("fs");
let url=require("url ");
let port=3000;

//获取轮播图/sliders
let sliders=require("./sliders")
http.createServer(function(req,res){
    let {pathname,query}=url.parse(req.url);
    if(pathname==="/sliders"){
        res.setHeader('Content-Type','application/json;charset=utf8');
        res.end(JSON.stringify(sliders));
    }
}).listen(port);
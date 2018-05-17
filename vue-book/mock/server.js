let http = require("http");
let fs = require("fs");
let url = require("url");
let port = 3000;

//获取轮播图/sliders
let sliders = require("./sliders")
function read(cb){
  fs.readFile('./book.json','utf8',function(err,data){
    if(err||data.length==0) {
      cb([]);//如果有错误 或者文件没长度 就是空数组
    }else{
      cb(JSON.parse(data));//将读出来的内容转化成对象
    }

  })
}
// read(function(books){//books代表所有图书

// })
function write(data,cb){//写入内容
  fs.writeFile('./book.json',JSON.stringify(data),cb);
};
// write({},function(){
//   console.log("写入成功")
// })

http.createServer(function (req, res) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
    res.setHeader("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.setHeader("X-Powered-By",' 3.2.1')
    if(req.method=="OPTIONS") return res.end();/*让options请求快速返回*/
    let { pathname, query} = url.parse(req.url,true);//true把query转化成对象
    console.log(query);
  if (pathname === "/sliders") {
    res.setHeader('Content-Type', 'application/json;charset=utf8');
    return res.end(JSON.stringify(sliders));
  };
  if(pathname==='/hot'){
    read(function(books){
      let hot=books.reverse().slice(0,5);
      res.setHeader('Content-Type', 'application/json;charset=utf8');
      res.end(JSON.stringify(hot))
    });
    return;
  }
  if(pathname==='/book'){
    let id=parseInt(query.id);//取出
    switch(req.method){// ?id=1
      case 'GET':
        if(!isNaN(id)){//查询一个
          read(function(books){
            let book=books.find(item=>item.bookId===id);
            if(!book) book={};//如果没找到则是undefined
            res.setHeader('Content-Type', 'application/json;charset=utf8');
            res.end(JSON.stringify(book));
          })

        }else{//获取所有图书
          read(function(books){
            res.setHeader('Content-Type', 'application/json;charset=utf8');
            res.end(JSON.stringify(books.reverse()))
          })
        }
        break;
      case 'POST':
        break;
      case 'PUT':
        break;
      case 'DELETE':
        read(function (books){
          books=books.filter(item=>item.bookId!==id);
          write(books,function(){
            res.end(JSON.stringify({}));//删除返回空对象
          })
        })
        break;
    }
    return;
  }
  
}).listen(port);


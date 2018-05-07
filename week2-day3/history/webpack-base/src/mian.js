let str = require("./a.js");
console.log(str);

let a = b => c => d => b + c + d;
console.log(a(1)(2)(3));

let obj={name:"jiangyou"};
let obj1={age:30};
let newObj={...obj,...obj1};
console.log(newObj);


import "./index.css";//引入css
import "./style.less";

// //在js中引入图片需要import,或者写一个线上路径
import page from "./fail.png"
let img=new Image();
img.src=page;//写了一个字符串 webpack不会进行查找
console.log(page);//page就是打包后的图片路径
document.body.appendChild(img);
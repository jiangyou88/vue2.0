let notify={//需要在此对象中拥有一个install方法

};
notify.install=function(){
console.log(111);
};
//导出这个包含install的对象，如果使用vue.use就会调用这个install方法
export default notify;

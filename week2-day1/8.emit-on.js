//发布 emit 订阅 on {女生失恋:["哭","购物","吃"]}
function Girl() {
    this._event={};
};
Girl.prototype.on = function (eventName, callback) {
    if(this._event[eventName]){//不是第一次
        this._event[eventName].push(callback)
    }else{
        this._event[eventName]=[callback];
    }
};
Girl.prototype.emit = function (eventName,...args) {
    if(this._event[eventName]){
        this._event[eventName].forEach(cb=>cb(...args));
    }
}
let girl = new Girl();
let cry = (who) => {
    console.log("哭",who);
};
let shopping = (who) => {
    console.log("购物",who);
};
let eat = (who) => {
    console.log("吃",who);
};
girl.on("失恋", cry); //{失恋:[cry]}
girl.on("失恋", shopping); //{失恋:[cry,shopping]}
girl.on("失恋", eat); ////{失恋:[cry,shopping,eat]}
girl.emit("失恋","我");
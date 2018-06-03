const mutations= {
    add(state,count){//state是自动放入的，默认指的就是当前的state
        state.count+=count;
    },
    minus(state){
        state.count-=1;
    }
};
export default mutations;
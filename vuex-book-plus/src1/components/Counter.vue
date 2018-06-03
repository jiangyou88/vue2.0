<template>
    <div>
        计数器:<button @click="minus">-</button><br>
        当前：{{this.$store.state.count}}<br>
        计数器:<button @click="add">+</button>
        {{$store.getters.val}}
    </div>
</template>
<script>
export default {
    methods: {
        add(){
            //提交add的mutation
            //载荷payload
            this.$store.commit('add',2);
        },
        minus(){
            this.$store.commit('minus');
        }
    }
}
</script>


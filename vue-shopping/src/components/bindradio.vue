<template>
    <div>
        <input type="radio" v-model="picked" :value="value" />
        <label>单选按钮</label>
        <p>{{picked}}</p>
        <p>{{value}}</p>
    </div>
</template>
<script>
export default {
    data(){
        return{
            picked : false,
            value : 123
        }
    }
}
</script>
<style lang="less" scoped>

</style>


<template>
    <div>
        <select v-model="selected">
            <option>html</option>
            <option value="js">Javascript</option>
            <option>css</option>
        </select>
        <p>选择的项是:{{selected}}</p>
    </div>
</template>
<script>
export default {
    data(){
        return {selected:'html'}
    }
}
</script>
<style lang="less" scoped>

</style>

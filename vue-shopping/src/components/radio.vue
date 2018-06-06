<template>
    <div>
        <input type="radio" v-model="picked" value="html" id="html" />
        <label for="html">HTML</label>
        <br>
        <input type="radio" v-model="picked" value="js" id="js" />
        <label for="html">JavaScrit</label>
        <br>
        <input type="radio" v-model="picked" value="css" id="css" />
        <label for="html">CSS</label>
        <p>选择的项是：{{picked}}</p>
    </div>
</template>
<script>
export default {
    data(){
        return {
            picked:'js'
        }
    }
}
</script>
<style lang="less" scoped>

</style>


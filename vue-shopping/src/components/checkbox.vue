<template>
        <div>
            <input type="checkbox" v-model="checked" value="html" id="html" />
            <label for="html">HTML</label>
            <br>
            <input type="checkbox" v-model="checked" value="js" id="js" />
            <label for="html">JavaScrit</label>
            <br>
            <input type="checkbox" v-model="checked" value="css" id="css" />
            <label for="html">CSS</label>
            <p>选择的项是：{{checked}}</p>
        </div>
</template>
<script>
export default {
    data(){
        return {
            checked:['false']
        }
    }
};
</script>
<style scoped>
</style>


<template>
    <div class="header">
        选择城市
        <router-link to="/">
            <div class="iconfont header-back-icon">&#xe624;</div>
        </router-link>
    </div>
</template>
<script>
export default {
    name: 'CityHeader'
}
</script>
<style lang="stylus" scoped>
    @import '../../../assets/styles/varibles.styl';
    .header{
        height .86rem
        line-height .86rem
        text-align center
        color #fff
        background $bgColor
        font-size .32rem
        position relative
        .header-back-icon{
            width .64rem
            text-align center
            font-size .4rem
            position absolute
            top 0
            left 0
            color #fff
        }
    }
</style>



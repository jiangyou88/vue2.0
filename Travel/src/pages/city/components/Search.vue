<template>
    <div class="search">
        <input class="search-input" type="text" placeholder="输入城市名或拼音" />
    </div>
</template>
<script>
export default {
    name: 'CitySearch'
}
</script>
<style lang="stylus" scoped>
    @import '../../../assets/styles/varibles.styl';
    .search{
        height .72rem
        background $bgColor
        padding 0 .1rem
        .search-input{
            width 100%
            height .62rem
            line-height .62rem
            text-align center
            padding 0 .1rem
            box-sizing border-box
            border-radius .06rem
            color #666
        }
    }
</style>



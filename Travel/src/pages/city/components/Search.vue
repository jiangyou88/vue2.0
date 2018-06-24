<template>
    <div>
        <div class="search">
            <input class="search-input" v-model="keyword" type="text" placeholder="输入城市名或拼音" />
        </div>
        <div class="search-content" ref="search" v-show="keyword">
            <ul>
                <li v-for="item in list" class="search-item border-bottom" :key="item.id" @click="handleCityClick(item.name)">{{item.name}}</li>
                <li class="search-item border-bottom" v-show="hasNode">没有找到匹配数据</li>
            </ul>
        </div>
    </div>
</template>
<script>
import Bscroll from 'better-scroll'
import { mapMutations } from 'vuex'
export default {
    name: 'CitySearch',
    props: {
        citiels: Object
    },
    data() {
        return {
            keyword: '',
            list: [],
            timer: null
        }
    },
    computed: {
        hasNode (){
            return !this.list.length
        }
    },
    watch: {
        keyword () {
            if(this.timer){
                clearTimeout(this.timer)
            }
            if(!this.keyword) {
                this.list = []
                return
            }
            this.timer = setTimeout(()=>{
                const result= []
                for(let i in this.citiels){
                    this.citiels[i].forEach((value)=>{
                        if(value.spell.indexOf(this.keyword)>-1||value.name.indexOf(this.keyword)>-1){
                            result.push(value)
                        }
                    })
                }
                this.list= result
            },100)
        }
    },
    methods: {
        handleCityClick(city){
            //this.$store.commit('changeCity',city)
            this.changeCity(city)
            this.$router.push('/')
        },
        ...mapMutations['changeCity']
    },
    mounted () {
        this.scroll=new Bscroll(this.$refs.search)
    }
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
    .search-content{
        position absolute
        overflow hidden
        top 1.58rem
        left 0
        right 0
        bottom 0
        z-index 1
        background #eee
        .search-item{
            line-height .62rem
            padding-left .2rem
            color #666
            background #fff
        }
    }
</style>



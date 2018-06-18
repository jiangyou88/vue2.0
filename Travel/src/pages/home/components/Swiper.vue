<template>
<div class="wrapper">
    <swiper :options="swiperOption">
        <swiper-slide v-for="item in swiperList" :key="item.id">
            <img class="swiper-img" :src="item.imgUrl" />
        </swiper-slide>
        <div class="swiper-pagination"  slot="pagination"></div>
  </swiper>
</div>
</template>
<script>
export default {
    name:'HomeSwiper',
    data () {
        return {
            swiperOption:{
                pagination:'.swiper-pagination',
                loop:true
            },
            swiperList:[
                {
                    id:'0001',
                    imgUrl:'http://img1.qunarzz.com/piao/fusion/1806/11/947d8b7e221cbb02.jpg_750x200_4145c399.jpg'
                },
                {
                    id:'0002',
                    imgUrl:'http://img1.qunarzz.com/piao/fusion/1806/fc/e47aa3e1c67bbc02.jpg_750x200_0f3eecf8.jpg'
                }
            ]
        }
    }
}
</script>
<style lang="stylus" scoped>
// 组件样式穿透
.wrapper >>> .swiper-pagination-bullet-active{
    background #fff !important
}
.wrapper{
    width 100%
    height 0
    overflow hidden
    padding-bottom 26.67%
    .swiper-img{
        width 100%
    }
}
</style>



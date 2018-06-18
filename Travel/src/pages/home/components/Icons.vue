<template>
    <div class="icons">
        <swiper :options="swiperOption">
            <swiper-slide v-for="(page,index) in pages" :key="index">
                <div class="icon" v-for="item in page" :key="item.id">
                    <div class="icon-img">
                        <img :src="item.imgUrl" />
                        <p>{{item.desc}}</p>
                    </div>
                </div>
            </swiper-slide>
            <div class="swiper-pagination"  slot="pagination"></div>
        </swiper>
    </div>
</template>
<script>
export default {
  name: "HomeIcons",
  data() {
    return {
      swiperOption: {
        pagination: ".swiper-pagination",
        loop: true
      },
      iconList: [{
          id: 1,
          imgUrl:"http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png",
          desc: "景点门票"
        },
        {
          id: 2,
          imgUrl:"http://img1.qunarzz.com/piao/fusion/1804/ff/fdf170ee89594b02.png",
          desc: "必游榜单"
        },
        {
          id: 3,
          imgUrl:"http://img1.qunarzz.com/piao/fusion/1803/6a/45f595250c73d102.png",
          desc: "夏日玩水"
        },
        {
          id: 4,
          imgUrl:"http://img1.qunarzz.com/piao/fusion/1804/5a/13ceb38dcf262f02.png",
          desc: "一日游"
        },{
          id: "0001",
          imgUrl:
            "http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png",
          desc: "景点门票"
        },
        {
          id: "0002",
          imgUrl:
            "http://img1.qunarzz.com/piao/fusion/1804/ff/fdf170ee89594b02.png",
          desc: "必游榜单"
        },
        {
          id: "0003",
          imgUrl:
            "http://img1.qunarzz.com/piao/fusion/1803/6a/45f595250c73d102.png",
          desc: "夏日玩水"
        },
        {
          id: "0004",
          imgUrl:
            "http://img1.qunarzz.com/piao/fusion/1804/5a/13ceb38dcf262f02.png",
          desc: "一日游"
        },
        {
          id: "0005",
          imgUrl:
            "http://img1.qunarzz.com/piao/fusion/1804/5a/13ceb38dcf262f02.png",
          desc: "二日游"
        }]
    };
  },
  computed:{
      pages(){
          const pages=[];
          this.iconList.forEach((item,index)=>{
              const page=Math.floor(index/8);
              if(!pages[page]){
                  pages[page]=[]
              }
              pages[page].push(item)
          })
          return pages
      }
  }
};
</script>
<style lang="stylus" scoped>
@import '../../../assets/styles/varibles.styl';
@import '../../../assets/styles/mixins.styl';

.icons >>> .swiper-container {
    height: 0;
    padding-bottom: 50%;
    overflow: hidden;
}

.icon {
    float: left;
    width: 25%;
    padding-bottom: 25%;
    overflow: hidden;
    position: relative;
    height: 0;

    .icon-img {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0.44rem;
        box-sizing: border-box;
        padding: 0.1rem;

        img {
            height: 100%;
            display: block;
            margin: 0 auto;
        }

        p {
            height: 0.44rem;
            line-height: 0.44rem;
            color: $darkTextColor;
            text-align: center;
            ellipsis();
        }
    }
}
</style>



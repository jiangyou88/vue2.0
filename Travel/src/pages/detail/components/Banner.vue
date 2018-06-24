<template>
    <div>
        <div class="banner" @click="handleBannerClick">
            <img class="banner-img" src="http://img1.qunarzz.com/piao/fusion/1801/1a/94428c6dea109402.jpg_640x200_2cf590d8.jpg" />
            <div class="banner-info">
                <div class="banner-title">南山滑雪场</div>
                <div class="banner-number"><span class="iconfont banner-icon">&#xe692;</span>39</div>
            </div>
        </div>
        <common-gallary :imgs="imgs" v-show="showGallary" @close="handleGallaryClose"></common-gallary>
    </div>
</template>
<script>
import CommonGallary from '../../../common/gallary/Gallary'
export default {
  name: "Banner",
  data() {
      return {
          imgs: ['http://img1.qunarzz.com/piao/fusion/1801/1a/94428c6dea109402.jpg_640x200_2cf590d8.jpg','http://img1.qunarzz.com/piao/fusion/1801/1a/94428c6dea109402.jpg_640x200_2cf590d8.jpg'],
          showGallary: false
      }
  },
  methods: {
      handleBannerClick (){
          this.showGallary= true
      },
      handleGallaryClose (){
          this.showGallary= false
      }
  },
  components: {
      CommonGallary
  }
};
</script>
<style lang="stylus" scoped>
.banner {
    position: relative;
    overflow: hidden;
    height: 0;
    padding-bottom: 55%;

    .banner-img {
        width: 100%;
    }

    .banner-info {
        display: flex;
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        line-height: 0.6rem;
        color: #fff;
        background-image: linear-gradient(top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8));

        .banner-tittle {
            flex: 1;
            font-size: 0.32rem;
            padding: 0 0.2rem;
        }

        .banner-number {
            height: 0.32rem;
            line-height: 0.32rem;
            margin-top: 0.14rem;
            padding: 0 0.4rem;
            border-radius: 0.2rem;
            background: rgba(0, 0, 0, 0.8);
            font-size: 0.24rem;

            .banner-icon {
                font-size: 0.24rem;
            }
        }
    }
}
</style>



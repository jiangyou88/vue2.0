<template>
    <div>
        <div class="title">周末去哪</div>
        <ul>
            <li class="item border-bottom" v-for="item in recommendList" :key="item.id">
                <div class="item-img-wrapper">
                <img :src="item.imgUrl" />
                </div>
                <div class="item-info">
                    <p class="item-title">{{item.title}}</p>
                    <p class="item-desc">{{item.desc}}</p>
                </div>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
  name: "HomeWeekend",
  data() {
    return {
      recommendList: [
        {
          id: 1,
          imgUrl:
            "http://img1.qunarzz.com/sight/source/1505/9e/21df651e19af5d.jpg_r_640x214_3ea5bb38.jpg",
          title: "寻找北京的皇城范儿",
          desc: "数百年的宫廷庙宇，至今依旧威严霸气"
        },
        {
          id: 2,
          imgUrl:
            "http://img1.qunarzz.com/sight/source/1505/9e/21df651e19af5d.jpg_r_640x214_3ea5bb38.jpg",
          title: "36kr没想到未来城",
          desc: "来北京必去的景点非这些地方莫属"
        },
        {
          id: 3,
          imgUrl:
            "http://img1.qunarzz.com/sight/source/1505/9e/21df651e19af5d.jpg_r_640x214_3ea5bb38.jpg",
          title: "36kr没想到未来城",
          desc: "来北京必去的景点非这些地方莫属"
        }
      ]
    };
  }
};
</script>
<style lang="stylus" scoped>
@import '../../../assets/styles/mixins.styl';

.title {
    line-height: 0.8rem;
    background: #ccc;
    text-indent: 0.2rem;
}

.item-img-wrapper {
    overflow: hidden;
    height: 0;
    padding-bottom: 33.9%;

    img {
        width: 100%;
    }
}

.item-info {
    padding .1rem
    .item-title {
        line-height: 0.54rem;
        font-size: 0.32rem;
        ellipsis();
    }

    .item-desc {
        line-height: 0.4rem;
        color: #ccc;
        ellipsis();
    }
}
</style>

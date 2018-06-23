<template>
    <div>
        <div class="title">周末去哪</div>
        <ul>
            <li class="item border-bottom" v-for="item in list" :key="item.id">
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
  props: {
      list: Array
  }
};
</script>
<style lang="stylus" scoped>
@import '../../../assets/styles/mixins.styl';

.title {
    line-height: 0.8rem;
    background: #ccc;
    text-indent: 0.2rem;
    margin-bottom: .2rem
}

.item-img-wrapper {
    overflow: hidden;
    height: 0;
    padding-bottom: 37.09%;

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

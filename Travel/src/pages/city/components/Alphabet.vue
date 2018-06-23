<template>
    <ul class="list">
        <li class="item" v-for="item in letters" :key="item" @click="handleLetterClick" @touchstart="handleTouchStart" @touchmove="handleTouchMove" @touchend="handleTouchEnd">{{item}}</li>
    </ul>
</template>
<script>
export default {
  name: "CityAlphabet",
  props: {
      citiels: Object
  },
  data() {
      return {
          touchStatus: false
      }
  },
  computed: {
      letters () {
          const letters = []
          for(let i in this.citiels){
              letters.push(i)
          }
          return letters
      }
  },
  methods: {
      handleLetterClick(e){
          this.$emit('change',e.target.innerText)
          //console.log(e.target.innerText)
      },
      handleTouchStart () {
          this.touchStatus=true
      },
      handleTouchMove (e) {
          const touchY = e.touches[0].clientY - 79
          const index = Math.floor((touchY - this.startY) / 20)
          if (index >= 0 && index < this.letters.length) {
            this.$emit('change', this.letters[index])
          }
      },
      handleTouchEnd () {
          this.touchStatus= false
      }
  }
};
</script>
<style lang="stylus" scoped>
@import '../../../assets/styles/varibles.styl';

.list {
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: absolute;
    top: 1.58rem;
    right: 0;
    bottom: 0;
    width: 0.4rem;

    .item {
        line-height: 0.4rem;
        text-align: center;
        color: $bgColor;
    }
}
</style>



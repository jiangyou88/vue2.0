<template>
  <!-- <div><router-view></router-view></div> -->
  <div>
    <button @click="show">notify</button>
  </div>
  
</template>
<script>
export default {
  data(){
      return {}
  },
  methods: {
    show(){
      this.$notify()
    }
  }

}
</script>
<style lang="" scoped>

</style>



<template>
  <div id="app">
    <Footer></Footer>
    <router-view></router-view>
  </div>
</template>

<script>
import Footer from './components/Footer';
export default {
  name: 'App',
  components: {
    Footer
  }
}
</script>

<style>
*{margin: 0;padding: 0;}
ul,li{list-style: none;}
a{text-decoration: none;}
input,button{appearance: none;}
.content{position: fixed;width: 100%;top: 40px;bottom: 50px;overflow: auto;}
</style>

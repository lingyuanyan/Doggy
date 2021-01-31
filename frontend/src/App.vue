<template>
  <div class="">
    <main>
      <router-view name="header"></router-view>
      <router-view></router-view>
      <router-view name="footer"></router-view>
    </main>
  </div>
</template>

<script>
// import Banner from './components/Banner.vue'
// import Footer from './components/Footer.vue'
//import Content from './components/Content.vue'

export default {
  name: 'App',

  components: {
   // Banner,
  //  Content
  //  Footer
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

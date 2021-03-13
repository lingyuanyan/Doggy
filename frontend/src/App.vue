<template>
  <div class="app">
    <main>
      <router-view name="header"></router-view>
      <router-view></router-view>
      <router-view name="footer"></router-view>
    </main>
  </div>
</template>
<script>

export default {
  name: 'App',
  data() {
    return {
      english: true,
    }
  },
  created() {},
  mounted() {},
  methods: {
    changeLanguage() {
      this.english = !this.english;
    }
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
  height: 100%;
  width: 100%;
  top: 0px;
}
.language{
  float:right;
  border: 1px solid black;
  background-color: #d3d3d3;
}
</style>

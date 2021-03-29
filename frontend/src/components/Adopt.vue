<template lang="html">
  <div class="adopt">
    <p>If you would like to adopt a dog, please fill out this form: <a href="https://docs.google.com/forms/d/e/1FAIpQLSc6zk1FWltFpJNpDM5ROzrd0u9ACU6cYaTouyE9Jov3y5EEeQ/viewform">Doggy Adoption Form</a></p>
    <Carousel></Carousel>
  </div>
</template>

<script>
import Carousel from "./Carousel.vue";
  export default {
    name: "Adopt",
    data() {
      return {

      }
    },
    created() {},
    mounted() {},
    methods: {
    },
    components: {
      Carousel,
    },
  }
</script>

<style lang="css" scoped>
a {
   text-decoration: none;
}
</style>

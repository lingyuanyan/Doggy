<template>
  <div id="content">
    <h2>Content</h2>
    <div class="container">
      <div  class="row">
        <DogImage v-for="(doggy, i) in doggy_list" :key="i"
          :id="doggy.id"
          :name="doggy.name"
          class="col-sm-6 col-xs-12 col-md-4 col-lg-3"
          :path="doggy.pic"
          :caption="doggy.caption"
          :des="doggy.des"
        >
        </DogImage>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import DogImage from "./DogImage.vue";

export default {
  name: "Content",
  data() {
    return {
      doggy_list: [],
    }
  },
  created() {},
  mounted() {
    this.load();
  },
  methods: {
    async load() {
      axios.get('/api/doggies/').then((response)=>(this.doggy_list = response.data.results)).catch((error)=>(console.log(error)))
    },
  },
  components: {
    DogImage,
  },
};
</script>

<style scoped>
</style>

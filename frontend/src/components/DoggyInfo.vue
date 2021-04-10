<template>
  <div class="">
    <div class="d-flex justify-content-between">
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item"><router-link to="/dogs" class="link">Home</router-link></li>
          <li class="breadcrumb-item"><router-link to="/Adopt" class="link">Adopt</router-link></li>
          <li class="breadcrumb-item active" aria-current="page">{{ name }}</li>
        </ol>
      </nav>
      <div class="nav">

      </div>
    </div>
    <div class="">
      <div class="image d-flex justify-content-center">
        <img :src="selectedImage">
      </div>
      <div class="images d-flex justify-content-center">
        <img @click="changePic(ImageOne)" :src="ImageOne">
        <img @click="changePic(ImageTwo)" :src="ImageTwo">
        <img @click="changePic(ImageThree)" :src="ImageThree">
      </div>
    </div>
    <br>
    <br>
    <h3 class="name">{{ name }}</h3>
    <p class="id">ID: {{ id }}</p>
    <p class="sku">SKU: {{ sku }}</p>
    <p class="bio">{{ bio }}</p>
    <hr>
    <div class="">
      <h5>RETURN & REFUND POLICY</h5>
      <p></p>
    </div>
    <hr>
    <div class="">
      <h5>SHIPPING INFO</h5>
    </div>
  </div>
</template>

<script>

import {memStore} from "../js/store"

export default {
  name: "DoggyInfo",
  components: {
  },

  data() {
    return {
      selectedDoggy: memStore.fetchDoggy(),
      selectedImage: require('@/assets/37d.jpg'),
      ImageOne: require('@/assets/37d.jpg'),
      ImageTwo: require('@/assets/18d.jpg'),
      ImageThree: require('@/assets/21d.jpg'),
      name: "Dog",
      sku: "1234567890",
      bio: "Dog is a nice dog",
      id: "",
    };
  },
  created() {},
  mounted() {
    this.loadData();
  },
  methods: {
    changePic(img) {
      this.selectedImage = img;
    },
    loadData() {
      console.log('Data Loaded')
    }
  },
};
</script>
<style scoped>
.image img {
  height: 85vh;
  margin-left: 10%;
  margin-right: 10%
}
.images img {
  height: 100px;
  border: double black 1px;
}
.name .id .sku .bio .info {
  float: left;
}

</style>

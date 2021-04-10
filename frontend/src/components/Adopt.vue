<template lang="html">
  <div class="adopt">
    <p>If you would like to adopt a dog, please fill out this form: <a href="https://docs.google.com/forms/d/e/1FAIpQLSc6zk1FWltFpJNpDM5ROzrd0u9ACU6cYaTouyE9Jov3y5EEeQ/viewform">Doggy Adoption Form</a></p>
    <DogImage v-for="(doggy, i) in doggy_list" :key="i"
      :id="doggy.id"
      :name="doggy.name"
      :path="doggy.pic"
      :caption="doggy.caption"
      :des="doggy.des"
      class="dog"
      @clicked="clickedDoggy"
    ></DogImage>
  </div>
</template>

<script>
import axios from 'axios';
import DogImage from "./Dogs/DogImage.vue";
import {memStore} from "../js/store"
//import DoggyModal from "./Dogs/DoggyModal";

export default {
  name: "Adopt",
  data() {
    return {
      doggy_list: [],
      show: false,
      selectedDoggy: null,
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
    clickedDoggy(doggyId) {
      if (doggyId == null || doggyId == undefined) {
        console.log('error');
        return
      }
      for (let i = 0; i < this.doggy_list.length; i++) {
        if (this.doggy_list[i].id == doggyId) {
          this.selectedDoggy = this.doggy_list[i];
          console.log(this.selectedDoggy)
          memStore.fillDoggy(this.selectedDoggy)
          break;
        }
      }
      this.$router.push('/dogInfo')
    }
  },
  components: {
    DogImage,
  //  DoggyModal,
  },
};
</script>

<style lang="css" scoped>
a {
   text-decoration: none;
}
</style>

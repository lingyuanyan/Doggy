<template>
  <div id="content">
    <h2>Content</h2>
    <div class="container">
      <div  class="row">
        <div class="">
          <DogImage v-for="(doggy, i) in doggy_list" :key="i"
            :id="doggy.id"
            :name="doggy.name"
            :path="doggy.pic"
            :caption="doggy.caption"
            :des="doggy.des"
            @clicked="clickedDoggy"
          >
          </DogImage>
        </div>
      </div>
    </div>

    <doggy-modal ref="doggyModal"  />
  </div>
</template>

<script>
import axios from 'axios';
import DogImage from "./DogImage.vue";
import DoggyModal from "./DoggyModal";

export default {
  name: "Content",
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
          break;
        }
      }
      this.$refs.doggyModal.openModal(this.selectedDoggy);
    }
  },
  components: {
    DogImage,
    DoggyModal,
  },
};
</script>

<style scoped>
</style>

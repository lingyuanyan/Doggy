<template>
  <div id="content">
    <br>
    <DogImage v-for="(doggy, i) in doggy_list" :key="i"
      :id="doggy.id"
      :name="doggy.name"
      :path="doggy.pic"
      :caption="doggy.caption"
      :des="doggy.des"
      @clicked="clickedDoggy"
      class="dog"
    ></DogImage>
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
#content {
  width: 100vw;
  clear: both;
}
  @media only screen and (max-width: 576px) {
    .dog {
      width: 100vw;
      display: inline-block;
    }
  }
  @media only screen and (min-width: 575px) {
    .dog {
      width: 100vw;
      display: inline-block;
    }
  }
  @media only screen and (min-width: 767px) {
    .dog {
      width: 45vw;
      display: inline-block;
    }
  }
  @media only screen and (min-width: 991px) {
    .dog {
      width: 30vw;
      display: inline-block;
    }
  }
  @media only screen and (min-width: 1200px) {
    .dog {
      width: 20vw;
      display: inline-block;
    }
  }
</style>

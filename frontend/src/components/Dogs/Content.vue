<template>
  <div id="content">
    <div class="whoweare">
        <div>
          <h2>Who We are</h2>
          <br><br>
          The Fur Friend Rescue, is a non - profit organization. Ran for the purpose of helping dogs from China to find a home in America...etc.
        </div>
        <div>
          <img src="../../assets/28d.jpg" alt="">
        </div>
        <div>
          <img src="../../assets/21d.jpg" alt="">
        </div>
        <div>
        
        "The perfect rescue dog is out there for everybody. You just have to find it."
        <br><br>
        &mdash;&ensp;Josh Hopkins
      </div>    
    </div>
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
  .whoweare {
    text-align: center;
  }

  .whoweare>div {
    -webkit-box-sizing: border-box;
       -moz-box-sizing: border-box;
            box-sizing: border-box;
    display: inline-block;
    width: 47%;
    height: 25%;
    margin: 1%;
    text-align: center;
    vertical-align: middle;
    padding: 1% 2.5%;
  }

  .whoweare>div h2 {
    font-weight: 100;
  }

  .whoweare>div>img {
    width: 40vw;
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

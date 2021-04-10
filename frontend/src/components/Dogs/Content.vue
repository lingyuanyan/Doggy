<template>
  <div id="content">
    <div class="background-div">
      <div class="middiv">
        <h1>Fur Friend<br>
        Rescue</h1>
        <br><br>
        <h5>Working Towards a Brighter Future</h5>
        <br><br>
        <p>
          At Fur Friend Rescue, wellbeing is at the forefront of what we’re working together towards. Our programs and activities are designed to be a catalyst that helps community members reach their goals and fulfill their potential. Learn more about the positive impact we have and join us in bringing about positive change.
        </p>
      </div>
    </div>
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
  .text{
    float: left;
  }
  .background-div {
    width: 97vw;
    height: 80vh;
    background: #808080;
    background-image: url("../../assets/18d.jpg");
    clear: both;
    -webkit-filter: contrast(120%);
            filter: contrast(120%);
  }
  .middiv {
    width: 60vw;
    height: 60vh;
    margin: 0 auto;
    position: relative;
    top: 7.5vh;
    text-align: justify;
    color: #fff;
  }

  h1 {
    font-variant: small-caps;
  }
</style>

<template>
  <div class="">
    <h4>Delete Info</h4>
    <div class="doggy">
      <DogImage v-if="doggy !== null"
        :id="doggy.id"
        :name="doggy.name"
        class="col-sm-6 col-xs-12 col-md-4 col-lg-3"
        :path="doggy.pic"
        :caption="doggy.caption"
        :des="doggy.des"
      ></DogImage>
    </div>
    <hr>
    <form id="Delete" @submit.prevent="deleteDog()">
      <label for="delete">Enter the dog's id</label>
      <input type="number" id="id" name="id" v-model="doggyId"><br>
      <input type="submit">
    </form>
  </div>
</template>

<script>
import axios from 'axios';
import DogImage from "../Dogs/DogImage.vue";

export default {
  name: "Content",
  data() {
    return {
      doggyId: null,
      doggy: null,
    };
  },
  created() {},
  mounted() {
  },
  methods: {
    async deleteDog() {
      if (this.doggyId == null || this.doggyId == undefined) {
        console.log('error');
        return
      }
      let url = "/api/doggies/" + this.doggyId + "/";
      axios.delete(url)
      .then((response)=>{response;})
      .catch((error)=>(console.log(error)))
      console.log('url:' + url + ', deleted')
      this.doggyId = null;
    },
    async fetchDogId(doggyId) {
      if (doggyId == null || doggyId == undefined) {
        console.log('error');
        return
      }
      let url = "/api/doggies/" + doggyId + "/";
      axios.get(url)
      .then((response)=>{this.doggy = response.data})
      .catch((error)=>(console.log(error)))
      console.log('fetchDogId triggered successfully, url is ' + url)
    }

  },
  watch: {
    doggyId(value) {
      console.log('doggyid triggered, id =' + value);
      console.log('url: ' + "/api/doggies/" + value + "/")
      this.fetchDogId(value);
    },
  },
  components: {
    DogImage,
  },
};

</script>

<style lang="css" scoped>
  .dog{
    text-align: center;
  }
</style>

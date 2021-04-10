<template>
  <div>
    <p v-show="error == true" class="warning">One of the required areas are not filled, please remember to fill in all the textboxes</p>
    <h4>Upload Data</h4>
    <form class="imageAdding" @submit.prevent="submitForm">
      <label for="name">Enter Name</label>
      <input type="text" id="name" name="name" v-model.trim="dogName"><br>
      <label for="des">Enter Description</label>
      <input type="textarea" id="des" name="des" v-model.trim="dogDes"><br>
      <p>Upload Images</p>
      <div class="d-flex justify-content-center">
        <ImageUpload v-model="uploaded_image_one"></ImageUpload>
        <ImageUpload v-show="imgOneSubmitted" v-model="uploaded_image_two"></ImageUpload>
        <ImageUpload v-show="imgTwoSubmitted" v-model="uploaded_image_three"></ImageUpload>
      </div>
      <input type="submit">
    </form>
  </div>
</template>

<script>
  import axios from 'axios';
  import ImageUpload from "../Dogs/ImageUpload.vue";

  export default {
    name: "Content",
    data() {
      return {
        dogName: '',
        dogDes: '',
        dogCaption: '',
        upload_label: 'uplaod_image',
        uploaded_image_one: require('@/assets/upload.png'),
        uploaded_image_two: require('@/assets/upload.png'),
        uploaded_image_three: require('@/assets/upload.png'),
        imgOneSubmitted: false,
        imgTwoSubmitted: false,
        error: false,
      };
    },
    created() {},
    mounted() {
    },
    methods: {
      requiredFields() {
        return this.uploaded_image !== require('@/assets/upload.png') &&
        this.uploaded_image !== null &&
        this.dogName !== null &&
        this.dogDes !== null;
      },
      async submitForm() {
        if (this.requiredFields()) {
          console.log('Uploaded Image:');
          console.log(this.uploaded_image);
          console.log('Uploaded Name:');
          console.log(this.dogName);
          console.log('Uploaded Description:');
          console.log(this.dogDes);
          axios.post('/api/doggies/', {
            name: this.dogName,
            des: this.dogDes,
            picOne : this.uploaded_image_one,
            picTwo : this.uploaded_image_two,
            picThree : this.uploaded_image_three,
          }).then().catch(
            (error)=>(console.log(error)),
            //this.dogName = null,
            //this.dogDes = null,
            //this.dogCaption = null,
            //this.uploaded_image = require('@/assets/upload.png'),
          );
        }
        else {
          this.error = true;
        }
      },
    },
    watch: {
      dogDes() {
        if (this.requiredFields()) {
          this.error = false
        }
      },
      dogName() {
        if (this.requiredFields()) {
          this.error = false
        }
      },
      uploaded_image_one() {
        if (this.requiredFields()) {
          this.error = false
        }
        this.imgOneSubmitted = true
      },
      uploaded_image_two() {
        if (this.requiredFields()) {
          this.error = false
        }
        this.imgTwoSubmitted = true
      },
      passwordInput() {
        this.passwordError = false;
      },
    },
    components: {
      ImageUpload,
    },
  };
</script>

<style lang="css" scoped>
.warning {
  color: red;
}
.dog{
  text-align: center;
}
</style>

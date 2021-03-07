<template>
  <div>
    <DogImage
    class="doggy"
      :id="1"
      :name="dogName"
      :path="uploaded_image"
      :caption="dogCaption"
      :des="dogDes"
    />
    <hr>
    <p v-show="error == true" class="warning">One of the required areas are not filled, please remember to fill in all the textboxes</p>
    <h4>Upload Data</h4>
    <form class="imageAdding" @submit.prevent="submitForm">
      <label for="name">Enter Name</label>
      <input type="text" id="name" name="name" v-model.trim="dogName"><br>
      <label for="des">Enter Description</label>
      <input type="textarea" id="des" name="des" v-model.trim="dogDes"><br>
      <ImageUpload :label="upload_label" v-model="uploaded_image"></ImageUpload>
      <input type="submit">
    </form>
  </div>
</template>

<script>
  import axios from 'axios';
  import ImageUpload from "../Dogs/ImageUpload.vue";
  import DogImage from "../Dogs/DogImage.vue";

  export default {
    name: "Content",
    data() {
      return {
        dogName: '',
        dogDes: '',
        dogCaption: '',
        upload_label: 'uplaod_image',
        uploaded_image: require('@/assets/upload.png'),
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
        this.dogDes !== null &&
        this.dogCaption !== null;
      },
      async submitForm() {
        if (this.requiredFields()) {
          console.log('Uploaded Image:');
          console.log(this.uploaded_image);
          console.log('Uploaded Name:');
          console.log(this.dogName);
          console.log('Uploaded Description:');
          console.log(this.dogDes);
          console.log('Uploaded Caption:');
          console.log(this.dogCaption);
          axios.post('/api/doggies/', {
            name: this.dogName,
            des: this.dogDes,
            caption: this.dogCaption,
            pic : this.uploaded_image,
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
      dogCaption() {
        if (this.requiredFields()) {
          this.error = false
        }
      },
      uploaded_image() {
        if (this.requiredFields()) {
          this.error = false
        }
      },
      passwordInput() {
        this.passwordError = false;
      },
    },
    components: {
      ImageUpload,
      DogImage,
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

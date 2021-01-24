<template>
  <div id="content">
    <h2>Content</h2>
    <div class="container">
      <div class="row">
        <DogImage
          class="col-sm"
          name="me"
          path="http://lingyuanyan.com/static/lingyuanyanapp/Images/Portrait.jpg"
          caption="random dog"
          des="random dog pic I found online"
        >
        </DogImage>
        <DogImage
          class="col-sm"
          name="me"
          path="http://lingyuanyan.com/static/lingyuanyanapp/Images/Portrait.jpg"
          caption="random dog"
          des="random dog pic I found online"
        >
        </DogImage>
      </div>
      <div class="row">
        <DogImage
          class="col-sm"
          name="me"
          path="http://lingyuanyan.com/static/lingyuanyanapp/Images/Portrait.jpg"
          caption="random dog"
          des="random dog pic I found onlinerandom dog pic I found onlinerandom dog pic I found online"
        >
        </DogImage>
        <DogImage
          name="me"
          class="col-sm"
          path="http://lingyuanyan.com/static/lingyuanyanapp/Images/Portrait.jpg"
          caption="random dog"
          des="random dog pic I found online"
        >
        </DogImage>
      </div>
      <form class="imageAdding" @submit.prevent="submitForm">
      <label for="name">Enter Name</label>
      <input type="text" id="name" name="name" v-model="dogName"><br>
      <label for="des">Enter Description</label>
      <input type="textarea" id="des" name="des" v-model="dogDes"><br>
      <label for="caption">Enter caption</label>
      <input type="text" id="caption" name="caption" v-model="dogCaption"><br>
      <LabelImageInput :label="upload_label" v-model="uploaded_image"></LabelImageInput>
      <input type="submit">
    </form>
<!--  <form>
        <label for="fname">Password:</label><br>
        <input type="text" id="fname" name="fname" placeholder="Enter Password">
      </form>-->
    </div>
  </div>
</template>

<script>
import axios from 'axios'; // at the start of your <script> tag, before you "export default ..."
import LabelImageInput from "./ImageUpload.vue"
import DogImage from "./DogImage.vue";

export default {
  name: "Content",
  data() {
    return {
      dogName: '',
      dogDes: '',
      dogCaption: '',
      upload_label: 'uplaod_image',
      uploaded_image: null,
    };
  },
  methods: {
    async submitForm() {
      console.log('Uploaded Image:');
      console.log(this.uploaded_image.trim());
      console.log('Uploaded Name:');
      console.log(this.dogName.trim());
      console.log('Uploaded Description:');
      console.log(this.dogDes.trim());
      console.log('Uploaded Caption:');
      console.log(this.dogCaption.trim());
      axios.post('http://127.0.0.1:8000/api/doggies/', {
        name: this.dogName,
        des: this.dogDes,
        caption: this.dogCaption,
        pic : this.uploaded_image,
      });
    }
  },
  components: {
    DogImage,
    LabelImageInput
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

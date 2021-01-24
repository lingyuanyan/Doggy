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
      <div class="imageAdding">
      <LabelImageInput :label="upload_label" v-model="uploaded_image"></LabelImageInput>
      </div>
<!--  <form>
        <label for="fname">Password:</label><br>
        <input type="text" id="fname" name="fname" placeholder="Enter Password">
      </form>-->
    </div>
  </div>
</template>

<script>
import LabelImageInput from "./ImageUpload.vue"
import DogImage from "./DogImage.vue";

export default {
  name: "Content",
  data() {
    return {
      upload_label: 'uplaod_image',
      uploaded_image:null
    };
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

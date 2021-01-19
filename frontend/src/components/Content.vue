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
          des="random dog pic I found online"
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
    </div>
  </div>
</template>

<script>
import DogImage from "./DogImage.vue";

export default {
  name: "Content",
  components: {
    DogImage,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>

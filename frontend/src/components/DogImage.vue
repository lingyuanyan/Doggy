<template>
  <div id="doginfo" class="container">
    <div class="row">
      <div class="col-mid-3 col-sm-6">
          <img :src="path"/>
      </div>
      <h3 class="col-mid-3 col-sm-6">{{ name }}</h3>
    </div>
    <div class="row">
    <p class="caption col-mid-3 col-sm-6">{{ caption }}</p>
    <p class="des com-mid-3 col-sm-6">{{ des }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "DogImage",
  props: {
    name: {
      type: String,
      required: true,
    },
    path: {
      type: String,
      required: true,
    },
    caption: String,
    des: {
      type: String,
      required: true,
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#doginfo {
  border: solid black 1px;
  border-radius: 15px;
  width: 33em;
}
img {
  height: 100px;
}
</style>

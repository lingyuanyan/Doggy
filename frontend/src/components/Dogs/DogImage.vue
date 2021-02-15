<template>
  <div id="doginfo" class="container">
    <div class="row">
      <div class="col-sm-6">
          <img class="img row-sm-6" :src="path"/>
          <p class="caption row-sm-6">{{ caption }}</p>
      </div>
      <div class="col-sm-6">
        <h3 class="name row-sm-6">{{ name }}</h3>
        <span>{{ id }}</span>
        <br>
        <p class="des row-sm-6">{{ des }}</p><br>
      </div>
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
    id: {
      type: Number,
      required: true,
    }
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

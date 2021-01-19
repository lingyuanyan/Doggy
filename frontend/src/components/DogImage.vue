<template>
<div id="doginfo">
  <img :src="path" />
  <h3>{{ name }}</h3>
  <p class="caption">{{ caption }}</p>
  <p class="des">{{ des }}</p>
</div>
</template>

<script>
export default {
  name: 'DogImage',
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
}
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

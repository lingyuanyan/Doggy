<template>
<div id="doginfo">
  <h3>{{ name }}</h3>
  <img :src="path" />
  <p>{{ caption }}</p>
  <p>{{ des }}</p>
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

</style>

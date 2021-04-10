<template>
    <div @click="onClicked()" id="doginfo">
      <img class="img" :src="path"/><br>
      <div class="d-flex justify-content-center">
        <h4 class="name">{{ name }}</h4>
        <p class="id">{{id}}</p>
      </div>

      <!--
      <div class=" d-flex justify-content-evenly">
        <div class=" d-flex justify-content-evenly">
          <img class="img row-sm-6" :src="path"/>
        </div>
        <div class="">
          <div class=" d-flex justify-content-evenly">
            <h3 class="name col-xs-9">{{ name }}</h3>
            <span class="id col-xs-3">{{id}}</span>
          </div>
          <p class="des row-sm-6">{{ des }}</p>
        </div>
      </div>-->
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
  methods: {
    onClicked() {
      this.$emit('clicked', this.id)
    }
  }

};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

img {
  height: 100px;
  width: 100px;
}
.id{
  border-radius: 100px;
  border: dotted black 3px;
  padding: 1px;
}
.name, .id{
  margin: 5px;
}
.name {
  text-align: center;
}
</style>

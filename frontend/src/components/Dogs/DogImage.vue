<template>
  <div id="doginfo" class="container  col-xs-12 col-sm-6 col-md-4 col-lg-3">
    <div class="row">
      <div class="col-sm-6">
          <img class="img row-sm-6" :src="path"/>
          <p class="caption row-sm-6">{{ caption }}</p>
      </div>
      <div class=" col-xs-12 col-sm-6">
        <br>
        <div class="names">
          <h3 class="name col-xs-9">{{ name }}</h3>
          <span class="id col-xs-3">{{id}}</span>
        </div>
        <br>
        <div>
          <p class="des row-sm-6">{{ des }}</p>
        </div>
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
.des {
  word-wrap: break-word;
  text-align: center;
}
.id{
  border-radius: 100px;
  border: dotted black 3px;
  padding: 3px;
}
h3 {
  float: left;

}
.name, .id{
  margin: 5px;
  display: inline-block;
}
</style>

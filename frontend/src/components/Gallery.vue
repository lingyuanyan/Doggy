<template lang="html">
  <div class="gallery">
    <div class="images d-flex justify-content-center" v-show="!lightbox">
      <img src="../assets/37d.jpg" @click="openLightbox()" alt="dog">
      <img src="../assets/37d.jpg" @click="openLightbox()" alt="dog">
      <img src="../assets/37d.jpg" @click="openLightbox()" alt="dog">
    </div>
    <div class="lightbox" v-show="lightbox">
      <div class="closeWrap">
        <img class="close" @click="closeLightbox()" src="../assets/X.jpg" alt="close">
      </div>
      <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="../assets/37d.jpg" class="d-block w-100" alt="../assets/37d.jpg">
            <div class="carousel-caption d-none d-md-block">
              <h5>First slide label</h5>
              <p>Some representative placeholder content for the first slide.</p>
            </div>
          </div>
          <div class="carousel-item">
            <img src="../assets/37d.jpg" class="d-block w-100" alt="../assets/37d.jpg">
            <div class="carousel-caption d-none d-md-block">
              <h5>Second slide label</h5>
              <p>Some representative placeholder content for the second slide.</p>
            </div>
          </div>
          <div class="carousel-item">
            <img src="../assets/37d.jpg" class="d-block w-100" alt="../assets/37d.jpg">
            <div class="carousel-caption d-none d-md-block">
              <h5>Third slide label</h5>
              <p>Some representative placeholder content for the third slide.</p>
            </div>
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
   </div>
</template>

<script>
  export default {
    name: "Gallery",
    data() {
      return {
        lightbox: false,

      }
    },
    created() {},
    mounted() {},
    methods: {
      openLightbox() {
        this.lightbox = true;
        console.log("lightbox: " + this.lightbox);
      },
      closeLightbox() {
        this.lightbox = false;
        console.log("lightbox: " + this.lightbox);
      },
    },
    components: {
    },
  }
</script>

<style lang="css" scoped>
  .close {
    position: fixed;
    top: 10px;
    right: 10px;
    height: 50px;
    opacity: 0.8;
  }
  .close:hover {
    opacity: 1;
  }
  .images img {
    height: 300px;
    margin: 5px;
    opacity: 0.9;
  }
  .images img:hover {
    opacity: 1;
  }
  .lightbox {
    width: 100%;
    height: 100vw;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 9;
    overflow-x: hidden;
    overflow-y: auto;
    height: auto;
    width: auto;
    display: flex;
    justify-content: center;
    background-color: white;

  }
  #carouselExampleCaptions {
    position:fixed;
    text-align: center;
    padding-top: 5%;
    padding-right: 20%;
    padding-bottom: 5%;
    padding-left: 20%;
    width: 90%;
    height: 100%;
    display: flex;
    justify-content: center;
  }
  .carousel-control-next-icon {
    color: black;
  }
</style>

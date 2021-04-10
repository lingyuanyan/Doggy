<template>
  <div id="banner">
    <div class="contacts d-flex justify-content-evenly">
      <svg width="40" height="40">
        <a class="contact" href=""><font-awesome-icon :icon="['fab', 'facebook-square']"/></a>
      </svg>
      <svg width="40" height="40">
        <a class="contact" href=""><font-awesome-icon :icon="['fab', 'instagram-square']"/></a>
      </svg>
      <svg width="40" height="40">
        <a class="contact" href="mailto:Imcffr2021@gmail.com"><font-awesome-icon :icon="['fas', 'envelope-square']"/></a>
      </svg>
    </div>
    <div id="logo">
      <img src="../../assets/DoggyLogo.png" alt="doggy logo" class="logo">
      <div class="text">
        <h3>Fur Friend Rescue</h3>
      </div>
    </div>
    <nav>
      <router-link to="/Dogs" class="link">Dogs</router-link>
      <router-link to="/aboutus" class="link">About us</router-link>
      <router-link to="/admins" class="link">Admins</router-link>
      <router-link to="/Adopt" class="link">Adopt</router-link>
      <router-link to="/Gallery" class="link">Gallery</router-link>
      <router-link to="/GetInvolved" class="link">Get involved</router-link>
      <router-link to="/Programs" class="link">Programs</router-link>
      <router-link to="/GetInvolved" class="link">Get Involved</router-link>
      <router-link to="/News" class="link">News</router-link>
    </nav>


  </div>
</template>

  <script>
  export default {
    name: "Banner",
    data() {
      return {
        english: true,
      }
    },
    created() {},
    mounted() {},
    methods: {
    },
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.banner {
    margin: 0;
    padding: 0;
  }
  .contacts {
  width: 120px;
  float: right;
  margin-right: 20px;
  }
  .contact {
    text-decoration: none;
  }
  #banner {
    width: 100vw;
  }

  h1 {
    margin-top: 0;
    display: inline-block;

  }
  .logos {
    margin: 0, 0, 0, 0;
    float: left;
    height: 120px;
    margin-left: 15px;
  }
  .logo{
    margin: 0, 0, 0, 0;
    width: 40px;
    float: left;
    margin-left: 5px;
    margin-bottom: 5px;
    margin-top: 3px;
  }
  .LMCLogo{
    width: 80px;
    height: 80px;
    float: left;
    margin: 0, 0, 0, 0;
    margin-left: 15px;
    margin-bottom: 5px;
    margin-top: 3px;
  }

   .link:hover, .link:active {
    text-decoration: underline;
    border-top: 2px solid white;
  }

  .link.router-link-exact-active {
    border-top: 2px solid white;
    border-bottom: 1px solid #000;
  }

   /* .link {
    border-top: #89cff0;
    background-color: #89cff0;
    height: 50px;
    text-decoration: none;
    color: black;
    display: inline-block;
    color: black;
    background-color: #89cff0;
    padding: 10px;
    padding-left: 0px;
    padding-right: 0px;
    width:22%
   } */

  .link {
    padding: 1%;
    text-decoration: none;
    position: relative;
    right: 10px;
    width: 5%
  }

</style>

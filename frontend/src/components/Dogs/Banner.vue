<template>
  <div id="banner">
    <div class="d-flex justify-content-between">
      <div class="logos d-flex justify-content-evenly">
        <img src="../../assets/DoggyLogo.png" class="logo"/>
  <!--      <img src="../../assets/LittleMasterLogo.jpg" class="LMCLogo"/>-->
      </div>
      <h1>Fur Friend Rescue</h1>
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
    </div>
    <nav class="links d-flex justify-content-evenly">
        <router-link to="/Dogs" class="link contacts d-flex justify-content-evenly">Dogs</router-link>
        <router-link to="/AboutUs" class="link contacts d-flex justify-content-evenly">About Us</router-link>
        <router-link to="/Adopt" class="link contacts d-flex justify-content-evenly">Adopt</router-link>
        <router-link to="/Gallery" class="link contacts d-flex justify-content-evenly">Gallery</router-link>
        <router-link to="/GetInvolved" class="link contacts d-flex justify-content-evenly">Get Involved</router-link>
        <router-link to="/Programs" class="link contacts d-flex justify-content-evenly">Programs</router-link>
        <router-link to="/News" class="link contacts d-flex justify-content-evenly">News</router-link>
        <router-link to="/Admins" class="link contacts d-flex justify-content-evenly">Admins</router-link>
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
  .contacts {
  }
  .contact {
    text-decoration: none;
  }
  #banner {
    text-align: center;
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
    width: 60px;;
    height: 80px;
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

   .link:hover, .link:active, .link.router-link-exact-active{
    background-color: #1e90ff;
    text-decoration: none;
  }


  .links  {
    border-top: #89cff0;
    background-color: #89cff0;
    height: 50px;
   }

   .link {
     text-decoration: none;
     color: black;
     display: inline-block;
     color: black;
     background-color: #89cff0;
     padding: 10px;
     padding-left: 0px;
     padding-right: 0px;
     width:30%
   }
</style>

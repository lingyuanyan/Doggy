<template>
  <div id="banner">
    <div id="logo">
      <img src="../../assets/DoggyLogo.png" alt="doggy logo" class="logo">
      <div class="text">
        FUR FRIEND RESCUE<br>
        &emsp;Change a dogs life for better
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
      <a href="https://www.facebook.com/"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-facebook" viewBox="0 0 16 16">
        <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
      </svg></a>
      &emsp;
      <a href="https://www.instagram.com/"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-instagram" viewBox="0 0 16 16">
        <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"/>
      </svg></a>
    </nav>
    <div class="background-div">
      <div class="middiv">
        <h1>Fur Friend<br>
        Rescue</h1>
        <br><br>
        <h5>Working Towards a Brighter Future</h5>
        <br><br>
        <p>
          At Fur Friend Rescue, wellbeing is at the forefront of what we’re working together towards. Our programs and activities are designed to be a catalyst that helps community members reach their goals and fulfill their potential. Learn more about the positive impact we have and join us in bringing about positive change. 
        </p>
      </div>
    </div>
    <div class="whoweare">
        <div>
          <h2>Who We are</h2>
          <br><br>
          The Fur Friend Rescue, is a non - profit organization. Ran for the purpose of helping dogs from China to find a home in America...etc.
        </div>
        <div>
          <img src="../../assets/28d.jpg" alt="">
        </div>
        <div>
          <img src="../../assets/21d.jpg" alt="">
        </div>
        <div>
        
        "The perfect rescue dog is out there for everybody. You just have to find it."
        <br><br>
        &mdash;&ensp;Josh Hopkins
        </div>    
      </div>
  </div>

    <!-- <div class="d-flex justify-content-between">
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
<<<<<<< HEAD
    <nav class="links">
        <router-link to="/Dogs" class="link">Dogs</router-link> <router-link to="/AboutUs" class="link">About us</router-link> <router-link to="/Admins" class="link">Admins</router-link>
    </nav> -->



=======
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
>>>>>>> 28e1117c37ecf5111e7935c5245ce42d2d465b60
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

<<<<<<< HEAD
   .link:hover, .link:active {
    text-decoration: underline;
    border-top: 2px solid white;
=======
   .link:hover, .link:active, .link.router-link-exact-active{
    background-color: #1e90ff;
    text-decoration: none;
>>>>>>> 28e1117c37ecf5111e7935c5245ce42d2d465b60
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
  .text{
    float: left;
  }
  .background-div {
    width: 97vw;
    height: 80vh;
    background: #808080;
    background-image: url("../../assets/18d.jpg");
    clear: both;
    -webkit-filter: contrast(120%);
            filter: contrast(120%);
  }
  .middiv {
    width: 60vw;
    height: 60vh;
    margin: 0 auto;
    position: relative;
    top: 7.5vh;
    text-align: justify;
    color: #fff;
  }

  h1 {
    font-variant: small-caps;
  }

  .whoweare {
    text-align: center;
  }

  .whoweare>div {
    -webkit-box-sizing: border-box;
       -moz-box-sizing: border-box;
            box-sizing: border-box;
    display: inline-block;
    width: 47%;
    height: 25%;
    margin: 1%;
    text-align: center;
    vertical-align: middle;
    padding: 1% 2.5%;
  }

  .whoweare>div h2 {
    font-weight: 100;
  }

  .whoweare>div>img {
    width: 40vw;
  }
</style>

<template>
  <div id="banner">
    <div class="d-flex justify-content-between">
      <img src="../../assets/logo.png" alt="logo" class="logo"/>
      <h2>Welcome to FurFriend Rescue</h2>
      <div class="contacts d-flex justify-content-evenly">
        <svg width="40" height="40">
          <a class="contact" href=""><font-awesome-icon :icon="['fab', 'facebook-square']"/></a>
        </svg>
        <svg width="40" height="40">
          <a class="contact" href=""><font-awesome-icon :icon="['fab', 'instagram-square']"/></a>
        </svg>
        <svg width="40" height="40">
          <a class="contact" href=""><font-awesome-icon :icon="['fas', 'envelope-square']"/></a>
        </svg>
      </div>
    </div>
    <nav class="links">
        <router-link to="/Dogs" class="align-middle link">Dogs</router-link> <router-link to="/AboutUs" class="align-middle link">About us</router-link> <router-link to="/Admins" class="align-middle link">Admins</router-link>
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
  }

  h1 {
    margin-top: 0;
    display: inline-block;
  }

  .logo{
    width: 50px;
    float: left;
    margin-left: 15px;
  }

   .link:hover, .link:active, .link.router-link-exact-active{
    background-color: #1e90ff;
    text-decoration: none;
    border-top: 2px solid white;
    padding: 11px;
  }


  .links  {

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

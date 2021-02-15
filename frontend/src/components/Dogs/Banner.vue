<template>
  <div id="banner">
    <img src="../../assets/logo.png" alt="logo" class="logo" />
    <h2>Welcome to Doggy</h2>
    <nav>
        <router-link to="/Dogs" class="align-middle links">Dogs</router-link>
        <router-link to="/AboutUs" class="align-middle links">About us</router-link>
    </nav>


  </div>
</template>

<script>
export default {
  name: "Banner",
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  #banner {
    text-align: center;
  }

  h1 {
    display: inline-block;
  }

  .logo{
    width: 10px;
    min-width: 50px;
    max-width: 100px;
    float: left;
    margin-left: 15px;
  }

   a:hover, a:active, .link-wrapper:hover, a.router-link-exact-active{
    background-color: #1e90ff;
    text-decoration: none;
    border-top: 2px solid white;
    padding: 11px;
  }


  nav  {
    border: solid black 1px;
    background-color: #89cff0;
    height: 50px;
   }

   a {
     text-decoration: none;
     color: black;
     margin-left: 1rem;
     display: inline-block;
     color: black;
     padding: 10px;
   }

  .nav {
    width: 75%;
    text-align: center;
    margin-left: 25%;
    margin-right: 25%;
  }
</style>

<template>
  <div id="banner">
    <img src="../../assets/logo.png" alt="logo" class="logo" />
    <h1>Welcome to Doggy</h1>
    <div class="nav">
    <nav>
      <router-link to="/Dogs" class="col-6-xs">Dogs</router-link>
      <router-link to="/AboutUs" class="col-6-xs">About us</router-link>
    </nav>
    </div>
    <hr>
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

  .logo {
    margin-left: 15px;
  }

  .doggy_logo {
    margin-right: 15px;
  }

  .logo, .doggy_logo {
    width: 10%;
    min-width: 50px;
    max-width: 100px;
  }

  a{

  }
  a:hover, a:active, a.router-link-active {

  }
  nav  {
    border: solid black 1px;
    width: 75%;
    left: 25%;
  }
  a {
    margin: auto;
    text-decoration: none;
    border: solid black 1px;
    padding: 4px;
    width: 50vw;
  }
  #banner {
    border: solid black 1px

  }
  .nav {
    border: solid black 1px;
    width: 75%;
    text-align: center;
    margin-right: 25%;
    margin-left: 25%;
  }
</style>

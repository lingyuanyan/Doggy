<template>
  <div id="banner">
    <img src="../assets/logo.png" alt="doggy_logo" class="doggy_logo" />
    <h1>Welcome to Doggy</h1>
    <img src="../assets/logo.png" alt="logo" class="logo" />
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
    margin-left: 10px;
  }

  .doggy_logo {
    margin-right: 10px;
  }

  .logo, .doggy_logo {
    width: 10%;
    min-width: 50px;
    max-width: 150px;
  }
</style>

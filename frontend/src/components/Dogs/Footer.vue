<template>
  <div id="footer">
    <h2>Footer</h2>
    <div class="text">
      <p>See the dogs above, if it does not have the dogs, click on dogs in the header </p>
      <hr>
      <p>Thanks for looking at the dogs</p>
    </div>
    <div class="others">
      <p>Other sites: </p>
    <ul>
      <li><a href="http://covidhub.io" target="_blank">covidhub.io</a></li>
    </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer"
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  li {
    text-align: justify;
  }

  #footer {
    border-width: 1vh;
    border-style: groove;
    border-color: #808080;
    margin: 0 1vw 1vh;
  }

  h2 {
    background: #808080;
    margin: 10px 10px 15px;
  }

  a {
    text-decoration: none;
    color: #55f;
  }

  a:hover {
    text-decoration: underline;
    color: #00b;
  }

  .others {
    background: #a0a0a0;
    margin: 0 15px;
  }

  .text {
    border: 5px solid #000;
    margin: 0 15px 10px;
    padding-top: 20px;
  }
</style>

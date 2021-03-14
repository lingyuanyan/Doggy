<template>
  <div id="footer">
    <h6 class="contacts">Contacts:</h6>
    <p class="contacts">Email: <a href="mailto:Imcffr2021@gmail.com">Imcffr2021@gmail.com</a></p>
    <p class="contacts"></p>
    <p class="contacts"></p>
    <p>Excepting Donations</p>
    <div class="text">
      <p>Made by the turtlemaster group</p>
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


<!-- Add "scoped" attribute to limit CSS to this component only -->	<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  li {
    text-align: justify;
  }
  #footer {
    border: 1px solid #aaa;
    padding: 0;
    width: 100vw;
  }
  h2 {
    background: hsl(200, 65%, 75%);
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
    background: hsl(200, 60%, 80%);
  }
  .text {
    margin: 0 15px 10px;
    padding-top: 20px;
  }
</style>

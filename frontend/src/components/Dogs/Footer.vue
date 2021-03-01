<template>
  <div id="footer">
    <h2>Footer</h2>
    <!-- <hr /> -->
    <div class="text">
      <p>Made by the turtlemaster group</p>
    </div>
    <div class="others">
      <p>Other sites: </p>
    <ul>
      <li><a href="http://covidhub.io" target="_blank">covidhub.io</a></li>
<<<<<<< HEAD
    </ul>
=======
    </ul>-->
    <p>If there is a dog you would like to adopt, please contact </p>
>>>>>>> 5aa1767174b7977ec9aa644eb6857f556559a540
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
    margin: 0 1vw 1vh;
    border: 1px solid #aaa;
    padding: 0;
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
<template>
  <div class="">
    <h1>Admins</h1>

    <div v-show="!passwordCheck">
      <h4>Login</h4>
      <form id="password" @submit.prevent="passwordCompare()">
        <label for="password">Enter the Password</label>
        <input type="text" id="password" name="pasword" placeholder="password" v-model="passwordInput"><br>
        <input type="submit">
      </form>
    </div>
    <div v-show="passwordCheck">
      <div v-show="uploadDataMode">
        <UploadDoggyData/>
        <button @click="switchToDelete()">Switch to Delete Doggy Data</button>
      </div>
      <div v-show="deleteDataMode">
        <DeleteDoggyData/>
        <button @click="switchToUpload()">Switch to Upload Doggy Data</button>
      </div>
    </div>
  </div>
</template>

<script>
  import DeleteDoggyData from "./DeleteDoggyData";
  import UploadDoggyData from "./UploadDoggyData";

  export default {
    name: "Content",
    data() {
      return {
        passwordInput: '',
        passwordCheck: false,
        passwordHash: -26933465,
        passwordError: false,
        uploadDataMode: false,
        deleteDataMode: false,
      };
    },
    created() {},
    mounted() {
    },
    methods: {
      passwordCompare() {
        let inputHash = this.passwordInput.hashCode();
        console.log('UserInput');
        console.log(inputHash);
        this.passwordCheck = (inputHash == this.passwordHash);
        console.log(this.passwordCheck);
        if (this.passwordCheck == true) {
          this.uploadDataMode = true;
        }
      },
      switchToUpload() {
        this.deleteDataMode = false;
        this.uploadDataMode = true;
      },
      switchToDelete() {
        this.deleteDataMode = true;
        this.uploadDataMode = false;
      },
    },
    components: {
      DeleteDoggyData,
      UploadDoggyData,
    },
  };
</script>

<style scoped>

.warning {
  color: red;
}

</style>

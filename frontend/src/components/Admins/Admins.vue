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

<!--<div v-show="passwordCheck">
      <p v-show="error == true" class="warning">One of the required areas are not filled, please remember to fill in all the textboxes</p>
      <h4>Upload Data</h4>
      <form class="imageAdding" @submit.prevent="submitForm">
        <label for="name">Enter Name</label>
        <input type="text" id="name" name="name" v-model.trim="dogName"><br>
        <label for="des">Enter Description</label>
        <input type="textarea" id="des" name="des" v-model.trim="dogDes"><br>
        <label for="caption">Enter caption</label>
        <input type="text" id="caption" name="caption" v-model.trim="dogCaption"><br>
        <ImageUpload :label="upload_label" v-model="uploaded_image"></ImageUpload>
        <input type="submit">
      </form>
    </div>
    <div class="">
      <h4>Delete Info</h4>
      <DogImage v-if="doggy !== null"
        :id="doggy.id"
        :name="doggy.name"
        class="col-sm-6 col-xs-12 col-md-4 col-lg-3"
        :path="doggy.pic"
        :caption="doggy.caption"
        :des="doggy.des"
      >
      </DogImage>
      <form id="Delete" @submit.prevent="deleteDog()">
        <label for="delete">Enter the dog's id</label>
        <input type="number" id="id" name="id" v-model="doggyId"><br>
        <input type="submit">
      </form>
    </div>-->
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

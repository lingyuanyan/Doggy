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
    <p v-show="error == true" class="warning">One of the required areas are not filled, please remember to fill in all the textboxes</p>
    <div v-show="passwordCheck">
      <h4>Upload Data</h4>
      <form class="imageAdding" @submit.prevent="submitForm">
        <label for="name">Enter Name</label>
        <input type="text" id="name" name="name" v-model.trim="dogName"><br>
        <label for="des">Enter Description</label>
        <input type="textarea" id="des" name="des" v-model.trim="dogDes"><br>
        <label for="caption">Enter caption</label>
        <input type="text" id="caption" name="caption" v-model.trim="dogCaption"><br>
        <LabelImageInput :label="upload_label" v-model="uploaded_image"></LabelImageInput>
        <input type="submit">
      </form>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'; // at the start of your <script> tag, before you "export default ..."
  import LabelImageInput from "../Dogs/ImageUpload.vue"


  export default {
    name: "Content",
    data() {
      return {
        dogName: null,
        dogDes: null,
        dogCaption: null,
        upload_label: 'uplaod_image',
        uploaded_image: require('@/assets/upload.png'),
        passwordInput: '',
        passwordCheck: false,
        passwordHash: -26933465,
        error: false,
        passwordError: false,
      };
    },
    created() {},
    mounted() {
      this.load();
    },
    methods: {
      requiredFields() {
        return this.uploaded_image !== require('@/assets/upload.png') &&
        this.uploaded_image !== null &&
        this.dogName !== null &&
        this.dogDes !== null &&
        this.dogCaption !== null;
      },
      async submitForm() {
        if (this.requiredFields()) {
          console.log('Uploaded Image:');
          console.log(this.uploaded_image);
          console.log('Uploaded Name:');
          console.log(this.dogName);
          console.log('Uploaded Description:');
          console.log(this.dogDes);
          console.log('Uploaded Caption:');
          console.log(this.dogCaption);
          axios.post('/api/doggies/', {
            name: this.dogName,
            des: this.dogDes,
            caption: this.dogCaption,
            pic : this.uploaded_image,
          }).then(()=>(this.load())).catch(
            (error)=>(console.log(error)),
            this.dogName=null,
            this.dogDes=null,
            this.dogCaption=null,
            this.uploaded_image= require('@/assets/upload.png'),
          );
        }
        else {
          this.error = true;
        }
      },

      async load() {
        axios.get('/api/doggies/').then((response)=>(this.doggy_list = response.data.results)).catch((error)=>(console.log(error)))
      },

      passwordCompare() {
        let inputHash = this.passwordInput.hashCode();
        console.log('UserInput');
        console.log(inputHash);
        this.passwordCheck = (inputHash == this.passwordHash);
        console.log(this.passwordCheck)
      },
      selectDog() {
      },
      async delete(deleteId) {
        let url = "/api/doggies/" + deleteId + "/"
        axios.delete(url).catch((error)=>(console.log(error)))
      }

    },
    watch: {
      dogDes() {
        if (this.requiredFields()) {
          this.error = false
        }
      },
      dogName() {
        if (this.requiredFields()) {
          this.error = false
        }
      },
      dogCaption() {
        if (this.requiredFields()) {
          this.error = false
        }
      },
      uploaded_image() {
        if (this.requiredFields()) {
          this.error = false
        }
      },
      passwordInput() {
        this.passwordError = false;
      }
    },
    components: {
      LabelImageInput,
    },
  };
</script>

<style scoped>

.warning {
  color: red;
}

</style>

<template>
  <div id="content">
    <h2>Content</h2>
    <div class="container">
      <div  class="row">
        <DogImage v-for="(doggy, i) in doggy_list" :key="i"
          :name="doggy.name"
          class="col-sm-6 col-xs-12 col-md-4 col-lg-3"
          :path="doggy.pic"
          :caption="doggy.caption"
          :des="doggy.des"
        >
        </DogImage>
      </div>
      <details>
        <summary>Upload Data</summary>
        <div v-show="password !== thePassword">
          <p v-show="password !== null" class="warning">The password you entered was incorrect</p>
          <form id="password" @submit.prevent="CheckPassword">
            <label for="password">Enter the Password</label>
            <input type="text" id="password" name="pasword" placeholder="password" v-model="passwordInput"><br>
            <input type="submit">
          </form>
        </div>
        <p v-show="error == true" class="warning">One of the required areas are not filled, please remember to fill in all the textboxes</p>
        <div v-show="password == thePassword">
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
    </details>

    </div>
  </div>
</template>

<script>
import axios from 'axios'; // at the start of your <script> tag, before you "export default ..."
import LabelImageInput from "./ImageUpload.vue"
import DogImage from "./DogImage.vue";
export default {
  name: "Content",
  data() {
    return {
      dogName: null,
      dogDes: null,
      dogCaption: null,
      upload_label: 'uplaod_image',
      uploaded_image: require('@/assets/upload.png'),
      doggy_list:[],
      passwordInput: '',
      password: null,
      thePassword: 'Doggy_isnt_the_password',
      error: false,
      passwordError: '',
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
    async CheckPassword() {
      this.password = this.passwordInput;
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
    DogImage,
    LabelImageInput
  },
};
</script>

<style scoped>

.warning {
  color: red;
}

</style>

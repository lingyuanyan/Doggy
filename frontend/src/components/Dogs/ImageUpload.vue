<template>
  <div @click="selectPhoto" id="photoUpload">
    <label v-if="label" :for="label">{{label}}</label>
    <br>
    <img :src="modelValue" v-bind="$attrs" />
    <input
      ref="fileInput"
      type="file"
      :id="label"
      accept="image/png, image/jpeg"
      style="display:none"
      @change="onChange($event)"

    />
    <p v-if="message != null">{{message}}</p>
  </div>
</template>

<script>
export default {
  name: "LabelImageInput",
  props: {
    label: null,
    modelValue: null,
  },
  emits: ["update:modelValue"],
  data() {
    return {
      message: null,
    };
  },

  created() {},
  mounted() {},
  methods: {
    validate(validator, value) {
      this.message = validator(value);
      return this.message;
    },

    selectPhoto() {
      this.$refs.fileInput.click();
    },
    onChange(event) {
      let file = event.target.files[0];
      let reader = new FileReader();
      reader.addEventListener(
        "load",
        function () {
          this.$emit("update:modelValue", reader.result);
        }.bind(this),
        false
      );
      reader.readAsDataURL(file);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

a {
  color: #42b983;
}
img {
  width: 100px;
  border: 1px solid black;
}

</style>

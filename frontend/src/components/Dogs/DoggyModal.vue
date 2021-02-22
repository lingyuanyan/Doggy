<template>
<basic-modal ref="basicModal" @close="modalClosed">
  <template #header>
    <h2>{{selectedDoggy.name}}</h2>
  </template>
  <template #body>
    <DogImage
    :id="selectedDoggy.id"
    :name="selectedDoggy.name"
    :path="selectedDoggy.pic"
    :caption="selectedDoggy.caption"
    :des="selectedDoggy.des"
    >
    </DogImage>
  </template>
  <template #footer>
  </template>
</basic-modal>
</template>

<script>
import DogImage from "./DogImage.vue";
import BasicModal from "./BasicModal";

export default {
  name: "DoggyModal",

  components: {
    BasicModal,
    DogImage,
  },

  data() {
    return {
      selectedDoggy: null,
    };
  },

  mounted() {},
  methods: {
    openModal(doggy) {
      this.selectedDoggy = doggy;
      this.$refs.basicModal.openModal();
    },
    modalClosed() {
      this.show = false;
    },
  },
};
</script>


<style scoped>
</style>

<!-- template tag used for create reusable components contain a container for all html tag -->
<template>
  <!-- div tag for parent unavailable card product section -->
  <div class="container-unavailable">
    <!-- child unavailable card product section -->
    <div class="main-unavailable">
      <!-- p tag used for render description unvailable product except men or women category product -->
      <p class="desc-unavailable">This product is unavailable to show</p>
      <!-- button tag used for even handling with v-on directive attribute while click, renders each card products -->
      <button class="button-unavailable" @click="increment">
        Next product
      </button>
      <!-- this tag used to parent image background unavailable product section -->
      <div class="image-background">
        <img class="face-sad" src="../assets/Sad-Face.svg" :alt="altText" />
      </div>
    </div>
  </div>
</template>

<!-- script tag for interactive ecommerce web vue project -->
<script>
export default {
  // name component for export file
  name: "CardUnavailable",
  data() {
    return {
      altText: "Sad Face image",
    };
  },
  // props declaration for communicates between parent and child components
  props: ["increment"],
};
</script>

<!-- style tag for style web and attribute scoped used for apply to elements of the current component only -->
<style scoped>
/* import file from name folder style */
@import "../assets/style/CardUnavailable.css";
</style>

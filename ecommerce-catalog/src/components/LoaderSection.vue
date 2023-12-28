<!-- template tag used for create reusable components contain a container for all html tag -->
<template>
  <!-- div tag used for parent load spinner css section -->
  <div class="container-load">
    <!-- this tag render load spinner css -->
    <div class="lds-roller">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  </div>
</template>

<!-- script tag for interactive ecommerce web vue project -->
<script>
export default {
  // name component for export file
  name: "LoaderSection",
};
</script>

<!-- style tag for style web and attribute scoped used for apply to elements of the current component only -->
<style scoped>
@import "../assets/style/LoaderSection.css";
</style>

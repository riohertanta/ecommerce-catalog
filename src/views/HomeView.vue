<!-- template tag used for create reusable components contain a container for all html tag -->
<template>
  <!-- div tag used for parent each men, women, unavailable card product border limit page -->
  <div>
    <!-- renders child each men, women, unavailable card product border limit page -->
    <div class="container-product-men">
      <div>
        <!-- loadersection tag is used for render if the directive's expression returns a truthy value -->
        <LoaderSection v-if="load" />
        <!-- render if the directive's expression returns a false value -->
        <div v-else>
          <CardUnavailable
            v-if="category == 2"
            :product="products"
            :increment="increment"
          />
          <CardSection v-else :product="products" :increment="increment" />
        </div>
      </div>
    </div>
    <!-- this tag use conditional rendering for background pattern each men, women, unavailable product -->
    <div class="bg-pattern-men" v-if="category == 0"></div>
    <div class="bg-pattern-women" v-else-if="category === 1"></div>
    <div class="bg-pattern-unavailable" v-else></div>
  </div>
</template>

<!-- script tag for interactive ecommerce web vue project -->
<script>
// @ is an alias to /src
// import file from name folder components
import CardSection from "@/components/CardSection.vue";
import CardUnavailable from "@/components/CardUnavailable.vue";
import LoaderSection from "@/components/LoaderSection.vue";
// import library open source from dependency for request data through fakestoreapi
import axios from "axios";

export default {
  // name component for export file
  name: "HomeView",
  // components used for register name component through import file
  components: {
    CardSection,
    CardUnavailable,
    LoaderSection,
  },
  data() {
    return {
      load: true,
      products: [],
      category: 0,
      number: 1,
    };
  },
  methods: {
    set(data) {
      this.products = data;
    },
    // method handlers used for increment event click button from child component
    increment() {
      if (this.number >= 20) {
        this.number = 1;
      } else {
        this.number++;
        console.log("data", this.number);
      }
    },
  },
  // mounted used for can access all Vue components, templates, data, events, and other global objects
  mounted() {
    console.log("data", this.number);
    this.load = true;
    // get API from fakestoreapi
    axios
      .get("https://fakestoreapi.com/products/" + this.number)
      .then((response) => {
        if (response.data.category == "men's clothing") {
          this.category = 0;
          console.log("men");
        } else if (response.data.category == "women's clothing") {
          this.category = 1;
          console.log("women");
        } else {
          this.category = 2;
          console.log("other");
        }
        console.log(response);
        this.set(response.data);
        this.load = false;
      })
      .catch((error) => console.log("Failed : ", error));
  },
  // watch property used to do something in reaction to a particular data change
  watch: {
    // every time the number changes, this function runs
    number() {
      if (this.load == false) {
        this.load = true;
        // get API from fakestoreapi
        axios
          .get("https://fakestoreapi.com/products/" + this.number)
          .then((response) => {
            if (response.data.category == "men's clothing") {
              this.category = 0;
              console.log("men");
            } else if (response.data.category == "women's clothing") {
              this.category = 1;
              console.log("women");
            } else {
              this.category = 2;
              console.log("other");
            }
            this.set(response.data);
            this.load = false;
          })
          .catch((error) => console.log("Failed : ", error));
      }
    },
  },
};
</script>

<!-- style tag for style web -->
<style>
/* import file from name folder style  */
@import "../assets/style/HomeView.css";
</style>

<!-- template tag used for create reusable components contain a container for all html tag -->
<template>
  <!-- div tag for parent card each product section -->
  <div class="container">
    <!-- child card each product section -->
    <div class="main">
      <!-- image each product section -->
      <div class="image">
        <!-- img tag used for data binding with call API from fakestoreapi for render image each product -->
        <img :src="product.image" :alt="product.category" />
      </div>
      <!-- description each product section -->
      <div class="description">
        <!-- heading tag used for data binding with call API from fakestoreapi through props for render title each product -->
        <h4
          :class="[
            product.category == 'men\'s clothing' ? 'color-men' : 'color-women',
          ]"
        >
          {{ product.title }}
        </h4>
        <!-- category, rating-rate, description each product section -->
        <div class="product-rate">
          <!-- p tag used for call API from fakestoreapi through props for render category each product -->
          <p class="product-category">{{ product.category }}</p>
          <!-- each circle rating-rate products section -->
          <div
            :class="[
              product.category == 'men\'s clothing'
                ? 'color-rate-men'
                : 'color-rate-women',
            ]"
          >
            <!-- this tag used for call API from fakestoreapi through props for render rating-rate each product -->
            <p class="rate">{{ product.rating.rate }}/5</p>
            <!-- this tag used for call API from fakestoreapi through props for render each circle rating-rate color icon less or more than rating-rate  -->
            <div
              :class="[
                Math.round(product.rating.rate) > 0
                  ? 'circle bg-color'
                  : 'circle',
              ]"
            ></div>
            <div
              :class="[
                Math.round(product.rating.rate) > 1
                  ? 'circle bg-color'
                  : 'circle',
              ]"
            ></div>
            <div
              :class="[
                Math.round(product.rating.rate) > 2
                  ? 'circle bg-color'
                  : 'circle',
              ]"
            ></div>
            <div
              :class="[
                Math.round(product.rating.rate) > 3
                  ? 'circle bg-color'
                  : 'circle',
              ]"
            ></div>
            <div
              :class="[
                Math.round(product.rating.rate) > 4
                  ? 'circle bg-color'
                  : 'circle',
              ]"
            ></div>
          </div>
        </div>

        <hr />
        <!-- each description products for category men or women clothes -->
        <p class="desk">{{ product.description }}</p>
        <hr />
        <!-- heading tag used for data binding with call API from fakestoreapi through props for render each price product -->
        <h4
          :class="[
            product.category == 'men\'s clothing' ? 'color-men' : 'color-women',
          ]"
        >
          ${{ product.price }}
        </h4>
        <!-- this tag used for render two buttons buy and next product section -->
        <div class="button-group">
          <!-- button tag used for data binding call API from fakestoreapi through props for render button color based on men or women product -->
          <button
            :class="[
              product.category == 'men\'s clothing'
                ? 'buy-clr-men'
                : 'buy-clr-women',
            ]"
          >
            Buy now
          </button>
          <!-- this tag used for data binding and even handling to call API from fakestoreapi through props for render men, women or unavailable card product -->
          <button
            :class="[
              product.category == 'men\'s clothing'
                ? 'next-clr-men'
                : 'next-clr-women',
            ]"
            @click="increment"
          >
            Next product
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<!-- script tag for interactive ecommerce web vue project -->
<script>
export default {
  // name component for export file
  name: "CardSection",
  // props declaration for communicates between parent and child components
  props: ["product", "increment"],
};
</script>

<!-- style tag for style web and attribute scoped used for apply to elements of the current component only-->
<style scoped>
/* import file from name folder style  */
@import "../assets/style/CardSection.css";
</style>

<template>
  <v-card class="text-center" hover flat color="transparent">
    <v-img class="white--text" height="200px" :src="product_image" :lazy-src="product_image"></v-img>
    <v-card-title class="justify-center">{{ product_name }}</v-card-title>

    <v-card-text>
      <span>${{ product_price }}/month</span>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  props: {
    product_image: {
      type: String,
      default: "https://cdn.vuetifyjs.com/images/cards/docks.jpg"
    },
    product_name: {
      type: String,
      default: "Product Name"
    },
    product_price: {
      type: Number,
      default: 0
    }
  }
};
</script>

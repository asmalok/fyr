<template>
  <v-card class="text-center" max-width="400" hover flat>
    <v-img
      class="white--text"
      contain
      height="200px"
      :src="product_image"
      :lazy-src="product_image"
    >
    </v-img>
    <v-card-title class="justify-center">{{ product_name }}</v-card-title>

    <v-card-text>
      <span>{{ product_price }}</span>
    </v-card-text>

    <v-card-actions class="justify-center">
      <v-btn text color="red">Overview</v-btn>
    </v-card-actions>
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

<template>
  <v-card class="mx-auto" max-width="344">
    <v-card-title>{{ $store.state.shopping_cart_items }}</v-card-title>
    <v-layout v-for="(item, i) in productsArray" :key="i">
      <v-flex>
        <div class="pa-5">
          <span class="float-left mt-2">{{ item.name }}</span>
          <v-btn
            text
            small
            fab
            class="float-right"
            @click="deleteFromCart(item.id)"
          >
            <v-icon color="red" small>fas fa-trash</v-icon>
          </v-btn>
          <v-btn class="float-right">
            <!-- <v-icon color="red" small>fas fa-trash</v-icon> -->
            Buy
          </v-btn>
        </div>
      </v-flex>
    </v-layout>
  </v-card>
</template>

<script>
import db from "../components/firebaseInit";
export default {
  data() {
    return {
      productsArray: [],
      number_of_items: ""
    };
  },
  created() {
    db.collection("shopping_cart").onSnapshot(allProducts => {
      this.$store.state.shopping_cart_items = allProducts.size;
      allProducts.forEach(product => {
        const data = {
          id: product.id,
          name: product.data().name,
          price: product.data().price,
          images: product.data().images,
          description: product.data().description,
          category: product.data().category,
          type: product.data().type
        };
        this.productsArray.push(data);
      });
    });
  },
  methods: {
    deleteFromCart(product_id) {
      db.collection("shopping_cart")
        .doc(product_id)
        .delete();
    }
  }
};
</script>

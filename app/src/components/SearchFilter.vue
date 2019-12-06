<template>
  <v-card>
    <v-card-title>
      <v-text-field
        v-model="search"
        append-icon="fas fa-search"
        label="Search"
      ></v-text-field>
    </v-card-title>
  </v-card>
</template>

<script>
/* eslint-disable */
import db from "./firebaseInit";
export default {
  data() {
    return {
      search: ""
    };
  },
  created() {
    db.collection("products")
      .orderBy("name")
      .get()
      .then(allProducts => {
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
          // console.log(this.productsArray)
        });
      });
  }
};
</script>

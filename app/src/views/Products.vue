<template>
  <div>
    <v-card flat class="pa-5" color="transparent">
      <v-row align="center" justify="center">
        <v-col sm="12" md="6">
          <v-text-field
            v-model="search"
            append-icon="fas fa-search"
            label="Search"
            color="black"
          ></v-text-field>
        </v-col>
      </v-row>
    </v-card>
    <v-container>
      <v-row wrap>
        <v-col
          sm="6"
          lg="4"
          xs="12"
          v-for="(product, i) in filtereProducts"
          :key="i"
        >
          <span v-if="product.images[0] !== undefined">
            <router-link :to="'/products/' + product.id">
              <ProductCard
                :product_name="product.name"
                :product_image="product.images[0]"
                :product_price="product.price"
                class="ma-3"
              />
            </router-link>
          </span>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
/* eslint-disable */
import ProductCard from "@/components/ProductCard";
import db from "../components/firebaseInit";

export default {
  data() {
    return {
      productsArray: [],

      search: ""
    };
  },
  components: {
    ProductCard
  },

  computed: {
    filtereProducts: function() {
      var self = this;
      return this.productsArray.filter(function(product) {
        return (
          product.name.toLowerCase().indexOf(self.search.toLowerCase()) >= 0
        );
      });
    }
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
        });
      });
  },
  methods: {}
};
</script>

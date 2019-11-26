<template>
  <div>
    <v-card flat>
      <v-card-title>
        <v-text-field
          v-model="search"
          append-icon="fas fa-search"
          label="Search"
          color="black"
        ></v-text-field>
      </v-card-title>
    </v-card>
    <v-layout row wrap>
      <v-flex lg4 md6 sm6 xs12 v-for="(product, i) in filtereProducts" :key="i">
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
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
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

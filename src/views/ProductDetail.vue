<template>
  <v-card flat class="text-center">
    <v-carousel :show-arrows="true" hide-delimiters show-arrows-on-hover>
      <v-carousel-item v-for="(item, i) in images" :key="i">
        <img :src="item" alt contain />
      </v-carousel-item>
    </v-carousel>
    <p>{{ name }}</p>
    <p>${{ price }}/month</p>
    <p>{{ description }}</p>
    <v-btn @click="addToCart">Add to cart</v-btn>
  </v-card>
</template>

<script>
import swal from "sweetalert";
import db from "../components/firebaseInit";
import { mapState } from "vuex";

export default {
  data() {
    return {
      name: "",
      price: "",
      images: "",
      description: "",
      category: "",
      type: ""
    };
  },
  computed: {
    ...mapState(["uid"])
  },
  created() {
    db.collection("products")
      .orderBy("name")
      .get()
      .then(allProducts => {
        allProducts.forEach(product => {
          if (product.id === this.$route.params.id) {
            this.name = product.data().name;
            this.price = product.data().price;
            this.images = product.data().images;
            this.description = product.data().description;
            this.category = product.data().category;
            this.type = product.data().type;
          }
        });
      });
  },
  methods: {
    addToCart() {
      const product_id = this.$route.params.id;
      const name = this.name;
      db.collection("shopping_cart")
        .doc(this.uid)
        .collection("products")
        .doc(product_id)
        .set({
          name: name
        })
        .then(product_status => {
          console.log("Product added to database: ", product_status);
          swal({
            title: "Added to cart",
            icon: "success",
            button: "Close"
          });
        })
        .catch(error => {
          console.log("Error adding products: ", error);
        });
    }
  }
};
</script>

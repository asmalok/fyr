<template>
  <v-card flat class="text-center ma-10 mx-auto" color="transparent" max-width="700">
    <v-layout justify-center align-center>
      <v-flex>
        <v-carousel :show-arrows="true" hide-delimiters show-arrows-on-hover height="600" class="height-small">
          <v-carousel-item v-for="(item, i) in images" :key="i" >
            <v-img :src="item"></v-img>
          </v-carousel-item>
        </v-carousel>
        <p>{{ name }}</p>
        <p>${{ price }}/month</p>
        <p>{{ description }}</p>
        <v-btn rounded color="rgba(0,0,0,0.8)" dark @click="addToCart">Add to cart</v-btn>
      </v-flex>
    </v-layout>
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
  mounted() {
    window.scroll(0, 0);
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
      this.$store.dispatch("getCart", this.uid);
    }
  }
};
</script>

<style scoped>
@media only screen and (max-width: 425px) {
.height-small{
  height: 300px !important;
}
}
</style>
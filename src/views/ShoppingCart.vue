<template>
  <v-row align="center" justify="center">
    <v-col cols="10">
      <v-card class="mx-auto">
        <v-card-title>{{ $store.state.shopping_cart_items }}</v-card-title>
        <v-layout v-for="(item, i) in productsArray" :key="i">
          <v-flex>
            <div class="pa-5">
              <span class="float-left mt-2">{{ item.name }} ${{ item.price }}/month</span>
              <v-btn text small fab class="float-right" @click="deleteFromCart(item.id)">
                <v-icon color="red" small>fas fa-trash</v-icon>
              </v-btn>
              <v-btn text class="float-right">Buy</v-btn>
            </div>
          </v-flex>
        </v-layout>
      </v-card>
      <span>Total amount: ${{ total }}/month</span>
    </v-col>
  </v-row>
</template>

<script>
import db from "../components/firebaseInit";
import { mapState } from "vuex";
export default {
  data() {
    return {
      productsArray: [],
      number_of_items: ""
    };
  },
  computed: {
    ...mapState(["uid"]),
    total() {
      let sum = 0;
      this.productsArray.forEach(product => {
        sum += product.price;
      });
      return sum;
    }
  },
  mounted() {
    db.collection("shopping_cart")
      .doc(this.uid)
      .collection("products")
      .onSnapshot(allProducts => {
        this.$store.state.shopping_cart_items = allProducts.size;
        this.productsArray = [];
        allProducts.forEach(product => {
          db.collection("products")
            .doc(product.id)
            .onSnapshot(product => {
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
      });
  },
  methods: {
    deleteFromCart(product_id) {
      db.collection("shopping_cart")
        .doc(this.uid)
        .collection("products")
        .doc(product_id)
        .delete();
    }
  }
};
</script>

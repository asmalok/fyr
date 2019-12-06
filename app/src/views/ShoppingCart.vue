<template>
  <div>
    <v-row align="center" justify="center">
      <v-col cols="10">
        <v-card class="mx-auto" color="transparent" flat>
          <v-card-title>{{ shopping_cart_items.length }} Items</v-card-title>
          <v-layout v-for="(item, i) in shopping_cart_items" :key="i">
            <v-flex>
              <div class="pa-5">
                <span class="float-left mt-2">
                  {{ item.name }}
                  <div>${{ item.price }}/month</div>
                </span>
                <v-btn
                  text
                  small
                  fab
                  class="float-right"
                  @click="deleteFromCart(item.id)"
                >
                  <v-icon color="red" small>fas fa-trash</v-icon>
                </v-btn>
              </div>
            </v-flex>
          </v-layout>
          <v-divider></v-divider>
        </v-card>
        <div class="mt-3 font-weight-bold">
          Total amount: ${{ total }}/month
        </div>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" class="text-center">
        <v-btn
          rounded
          color="rgba(0,0,0,0.8)"
          dark
          to="/checkout"
          @click="paymentHandler(total)"
          >Checkout</v-btn
        >
      </v-col>
    </v-row>
  </div>
</template>

<script>
/* eslint-disable */
import db from "../components/firebaseInit";
import { mapState, mapActions } from "vuex";
export default {
  data() {
    return {
      number_of_items: ""
    };
  },
  computed: {
    ...mapState(["uid", "shopping_cart_items"]),
    total() {
      let sum = 0;
      this.shopping_cart_items.forEach(product => {
        sum += product.price;
      });
      return sum;
    }
  },
  methods: {
    ...mapActions(["paymentHandler"]),
    deleteFromCart(product_id) {
      db.collection("shopping_cart")
        .doc(this.uid)
        .collection("products")
        .doc(product_id)
        .delete();
      this.$store.dispatch("getCart", this.uid);
    }
  }
};
</script>

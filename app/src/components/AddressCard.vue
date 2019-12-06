<!-- Component name: AddressCard
     Used in: /views/Checkout.vue
     Description: This component is a card that shows the current delivery address of the user. 
 -->

<template>
  <v-card max-width="344" class="mb-5">
    <!-- v-if="$store.state.address != '{}'" -->
    <v-card-text>
      <p class="black--text">
        <span class="font-weight-bold">Delivery Address</span>
        <br />
        {{ address.apt_number }}, {{ address.street_name }}
        <br />
        {{ address.city }}, {{ address.province }}, {{ address.postal_code }}
        <br />
        {{ address.country }}
        <br />
        {{ address.phone }}
      </p>
    </v-card-text>
  </v-card>
</template>

<script>
/* eslint-disable */
import { mapState } from "vuex";
export default {
  data() {
    return {};
  },
  computed: {
    ...mapState(["address"])
  }
};
</script>

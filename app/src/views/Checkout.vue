<template>
  <div>
    <AddressCard class="ma-5" />
    <DeliveryAddress class="ma-5" />
    <Checkout />
  </div>
</template>

<script>
/* eslint-disable */
import Checkout from "@/components/Checkout.vue";
import AddressCard from "@/components/AddressCard";
import DeliveryAddress from "@/components/DeliveryAddress";

export default {
  components: {
    Checkout,
    DeliveryAddress,
    AddressCard
  }
};
</script>

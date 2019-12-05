<template>
  <v-card flat class="pb-5" color="primary">
    <v-img
      src="https://d24xw9xsv7y3uu.cloudfront.net/JjzlElfB_tablet_pico_1bhk_desktop.jpg"
      height="600"
    ></v-img>
    <v-card class="negative-margin pa-10" flat>
      <v-row class="text-center">
        <v-col sm="12" md="6" class="pa-10">
          <div>
            <v-icon size="200" color="#ab5f26">fas fa-couch fa-10x</v-icon>
          </div>
          Step 1. Choose the product that fits your interest
        </v-col>
        <v-col sm="12" md="6" class="pa-10">
          <div>
            <v-icon size="200" color="#1b7094">fas fa-shopping-cart</v-icon>
          </div>
          Step 2. Sign/create an account to add it to your cart
        </v-col>
        <v-col sm="12" md="6" class="pa-10">
          <div>
            <v-icon size="200" color="#cfbf17">far fa-credit-card</v-icon>
          </div>
          Step 3. Checkout
        </v-col>
        <v-col sm="12" md="6" class="pa-10">
          <div>
            <v-icon size="200" color="#b52626">fas fa-truck-moving</v-icon>
          </div>
          Step 4. We deliever the product to your door!
        </v-col>
      </v-row>
    </v-card>
  </v-card>
</template>

<script>
import Services from "@/components/Services.vue";

export default {
  components: {
    Services
  },
  mounted() {
    window.scroll(0,0)
  }
};
</script>

<style scoped>
.negative-margin {
  margin-top: -150px;
  margin-right: 100px;
  margin-left: 100px;
}
</style>

<template>
  <v-card flat class="pb-5" color="primary">
    <v-img
      src="https://d24xw9xsv7y3uu.cloudfront.net/JjzlElfB_tablet_pico_1bhk_desktop.jpg"
      height="400"
    ></v-img>
    <v-card class="pa-10" flat>
      <v-card-title class="justify-center"
        >4 simple steps to make your house a home!</v-card-title
      >
      <v-layout row wrap class="mx-auto text-center">
        <v-flex md6 sm12 xs12 class="pa-10">
          <div>
            <v-icon size="150" color="#ffdfba">fas fa-couch fa-10x</v-icon>
            <br />1. Pick the products you want
          </div>
        </v-flex>
        <v-flex md6 sm12 xs12 class="pa-10">
          <div>
            <v-icon size="150" color="#bae1ff">fas fa-shopping-cart</v-icon>
            <br />2. Sign in and add them to your cart
          </div>
        </v-flex>
        <v-flex md6 sm12 xs12 class="pa-10">
          <div>
            <v-icon size="150" color="#baffc9">far fa-credit-card</v-icon>
            <br />3. Once you're ready, checkout
          </div>
        </v-flex>
        <v-flex md6 sm12 xs12 class="pa-10">
          <div>
            <v-icon size="150" color="#ffb3ba">fas fa-truck-moving</v-icon>
            <br />4. The product will be delivered to your door!
          </div>
        </v-flex>
      </v-layout>
    </v-card>
  </v-card>
</template>

<script>
export default {
  mounted() {
    window.scroll(0, 0);
  }
};
</script>

<style scoped>
/* .negative-margin {
  margin-top: -150px;
  margin-right: 100px;
  margin-left: 100px;
} */
</style>

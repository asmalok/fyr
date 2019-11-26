<template>
  <v-card flat>
    <v-navigation-drawer
      v-model="drawer"
      app
      temporary
      disable-resize-watcher
      class="pt-4"
    >
      <v-list>
        <v-list-item-group>
          <v-list-item @click="handleClick('/')">
            <v-list-item-title class="text-uppercase">Home</v-list-item-title>
          </v-list-item>

          <v-list-item @click="handleClick('/products')">
            <v-list-item-title class="text-uppercase"
              >Products</v-list-item-title
            >
          </v-list-item>

          <v-list-item @click="handleClick('/howitworks')">
            <v-list-item-title class="text-uppercase"
              >How it works</v-list-item-title
            >
          </v-list-item>

          <v-list-item @click="handleClick('/about')">
            <v-list-item-title class="text-uppercase"
              >About Us</v-list-item-title
            >
          </v-list-item>

          <v-list-item @click="handleClick('/contact')">
            <v-list-item-title class="text-uppercase"
              >Contact Us</v-list-item-title
            >
          </v-list-item>

          <v-list-item>
            <v-list-item-title @click="showForm">
              <v-icon small class>fas fa-user-plus</v-icon>&nbsp;&nbsp;Sign Up
            </v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title>
              <v-icon small>fas fa-sign-in-alt</v-icon>&nbsp;&nbsp;Sign In
            </v-list-item-title>
          </v-list-item>

          <v-list-item @click="handleClick('/shopping_cart')">
            <v-list-item-title>
              <v-icon small>fas fa-shopping-cart</v-icon>&nbsp;&nbsp;Shopping
              Cart
            </v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar prominent flat fixed app>
      <v-app-bar-nav-icon
        class="hidden-md-and-up"
        @click="drawer = !drawer"
      ></v-app-bar-nav-icon>

      <v-toolbar-title class="text-center mx-auto">
        <span class="display-3">F.Y.R</span>
        <br />
        <span class="font-weight-thin">Furniture You Rent</span>
      </v-toolbar-title>

      <!-- <template v-slot:extension> -->
      <div class="pt-10 pl-10 ml-10">
        <v-tabs color="black" class="hidden-sm-and-down">
          <v-tab to="/">Home</v-tab>
          <v-tab to="/products">Products</v-tab>
          <v-tab to="/howitworks">How it works</v-tab>
          <v-tab to="/about">About Us</v-tab>
          <v-tab to="/contact">Contact Us</v-tab>
        </v-tabs>
      </div>
      <!-- </template> -->

      <v-spacer></v-spacer>

      <div class="hidden-sm-and-down">
        <v-btn text @click="showForm">
          <v-icon small class>fas fa-user-plus</v-icon>
        </v-btn>
        <v-btn text>
          <v-icon small>fas fa-sign-in-alt</v-icon>
        </v-btn>
        <v-btn text @click="handleClick('/shopping_cart')">
          <!-- <v-icon small @click="handleClick('/shopping_cart')">fas fa-shopping-cart</v-icon> -->
          <v-badge v-if="shopping_cart_items" left color="red" v-model="show">
            <template v-slot:badge>
              <span>{{ shopping_cart_items }}</span>
            </template>
            <v-icon small>fas fa-shopping-cart</v-icon>
          </v-badge>
          <v-icon v-else small>fas fa-shopping-cart</v-icon>
        </v-btn>
      </div>

      <v-dialog
        v-model="$store.state.showSignUpForm"
        persistent
        max-width="600px"
      >
        <template v-slot:activator="{ on }"></template>
        <SignUp />
      </v-dialog>
    </v-app-bar>
  </v-card>
</template>

<script>
import { mapState } from "vuex";
import SignUp from "./Signup.vue";
export default {
  components: {
    SignUp
  },
  data() {
    return {
      drawer: false,
      centered: true,
      dialog: false,
      show: true
    };
  },
  methods: {
    handleClick(link) {
      this.$router.push(link);
    },
    showForm() {
      this.$store.commit("SHOW_FORM");
    }
  },
  computed: {
    ...mapState(["showSignUpForm", "shopping_cart_items"])
  },
  mounted() {
    if (this.$store.state.shopping_cart_items === 0) {
      this.show = false;
    }
  }
};
</script>

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
        <span class="display-3 pa-3">F.Y.R</span>
        <v-list-item-group>
          <v-list-item @click="handleClick('/')">
            <v-list-item-title class="text-uppercase">Home</v-list-item-title>
          </v-list-item>

          <v-list-item @click="handleClick('/howitworks')">
            <v-list-item-title class="text-uppercase"
              >How it works</v-list-item-title
            >
          </v-list-item>

          <v-list-item @click="handleClick('/products')">
            <v-list-item-title class="text-uppercase"
              >Products</v-list-item-title
            >
          </v-list-item>

          <v-list-item @click="handleClick('/contact')">
            <v-list-item-title class="text-uppercase"
              >Contact</v-list-item-title
            >
          </v-list-item>

          <span v-if="$store.state.logged_in === false">
            <v-list-item>
              <v-list-item-title @click="showSignUpForm">
                <v-icon small class>fas fa-user-plus</v-icon>&nbsp;&nbsp;Sign Up
              </v-list-item-title>
            </v-list-item>

            <v-list-item>
              <v-list-item-title @click="showSignInForm">
                <v-icon small>fas fa-sign-in-alt</v-icon>&nbsp;&nbsp;Sign In
              </v-list-item-title>
            </v-list-item>
          </span>
          <span v-else>
            <v-list-item @click="signout">
              <v-list-item-title>
                <v-icon small>fas fa-sign-out-alt</v-icon>&nbsp;&nbsp; Sign Out
              </v-list-item-title>
            </v-list-item>
            <v-list-item @click="handleClick('/shopping_cart')">
              <v-list-item-title>
                <v-icon small>fas fa-shopping-cart</v-icon>&nbsp;&nbsp;Shopping
                Cart
              </v-list-item-title>
            </v-list-item>
          </span>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar prominent flat fixed app color="rgba(0,0,0,0.8)" dark>
      <v-app-bar-nav-icon
        class="hidden-md-and-up"
        @click="drawer = !drawer"
      ></v-app-bar-nav-icon>

      <v-toolbar-title class="text-center mx-auto" @click="handleClick('/')">
        <span class="display-3">F.Y.R</span>
        <br />
        <span class="font-weight-thin hidden-xs-only">Furniture You Rent</span>
      </v-toolbar-title>

      <!-- <template v-slot:extension> -->
      <div class="pt-10 pl-10 ml-10">
        <v-tabs
          color="white"
          class="hidden-sm-and-down"
          background-color="transparent"
        >
          <v-tab to="/">Home</v-tab>
          <v-tab to="/howitworks">How it works</v-tab>
          <v-tab to="/products">Products</v-tab>
          <v-tab to="/contact">Contact</v-tab>
        </v-tabs>
      </div>
      <!-- </template> -->

      <v-spacer></v-spacer>

      <div class="hidden-sm-and-down">
        <span v-if="$store.state.logged_in === true">
          <v-btn text @click="signout">
            <v-icon small class>fas fa-sign-out-alt</v-icon>
          </v-btn>

          <v-btn text @click="handleClick('/shopping_cart')">
            <!-- <v-icon small @click="handleClick('/shopping_cart')">fas fa-shopping-cart</v-icon> -->
            <v-badge
              v-if="shopping_cart_items.length"
              left
              color="red"
              v-model="show"
            >
              <template v-slot:badge>
                <span>{{ shopping_cart_items.length }}</span>
              </template>
              <v-icon small>fas fa-shopping-cart</v-icon>
            </v-badge>
            <v-icon v-else small>fas fa-shopping-cart</v-icon>
          </v-btn>
        </span>

        <span v-else>
          <v-btn text @click="showSignUpForm">
            <v-icon small class>fas fa-user-plus</v-icon>
          </v-btn>
          <v-btn text @click="showSignInForm">
            <v-icon small>fas fa-sign-in-alt</v-icon>
          </v-btn>
        </span>
      </div>

      <v-dialog v-model="$store.state.signUpForm" persistent max-width="600px">
        <template v-slot:activator="{ on }"></template>
        <SignUp />
      </v-dialog>
      <v-dialog v-model="$store.state.signInForm" persistent max-width="600px">
        <template v-slot:activator="{ on }"></template>
        <SignIn />
      </v-dialog>
    </v-app-bar>
  </v-card>
</template>

<script>
/* eslint-disable */
import { mapState } from "vuex";
import SignUp from "./Signup.vue";
import SignIn from "./Signin.vue";
import db from "firebase";
export default {
  components: {
    SignUp,
    SignIn
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
    signout: function() {
      const THIS = this;
      db.auth()
        .signOut()
        .then(() => {
          THIS.$router.replace("/");
          THIS.$store.commit("TOGGLE_LOGGED_IN");
        });
    },
    handleClick(link) {
      this.$router.push(link);
    },
    showSignUpForm() {
      this.$store.commit("SHOW_SIGNUP_FORM");
    },
    showSignInForm() {
      this.$store.commit("SHOW_SIGNIN_FORM");
    }
  },
  computed: {
    ...mapState(["signUpForm", "shopping_cart_items", "signInForm"])
  },
  created() {
    if (this.$store.state.shopping_cart_items === 0) {
      this.show = false;
    } else {
      this.show = true;
    }
  }
};
</script>

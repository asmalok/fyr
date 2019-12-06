<template>
  <v-card flat class="pa-5">
    <v-card-title class="justify-center display-2">Furniture You Rent</v-card-title>
    <div class="text-center">
      Furniture You Rent is a place where you can rent furniture for a certain
      period of time. It saves you the trouble of reselling the furniture when moving out
      or just need a change of scenery.
      <div
        class="font-weight-bold pa-5"
      >Sign up now and add whatever item you like to your shopping cart!</div>
    </div>
    <v-card-actions class="pa-5 justify-center">
      <span v-if="$store.state.logged_in === false">
        <v-btn rounded color="rgba(0,0,0,0.8)" dark class="px-6" @click="showSignUpForm">Sign Up</v-btn>
        <v-btn rounded color="rgba(0,0,0,0.8)" dark class="px-6" @click="showSignInForm">Sign In</v-btn>
      </span>
    </v-card-actions>
  </v-card>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState(["signUpForm", "signInForm"])
  },
  methods: {
    showSignUpForm() {
      this.$store.commit("SHOW_SIGNUP_FORM");
    },
    showSignInForm() {
      this.$store.commit("SHOW_SIGNIN_FORM");
    }
  }
};
</script>

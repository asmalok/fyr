<template>
  <v-app class="bg-image">
    <Header />
    <div class="">
      <v-content app>
        <router-view />
      </v-content>
    </div>
    <Footer />
  </v-app>
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import db from "firebase";
export default {
  components: {
    Header,
    Footer
  },
  name: "App",
  data: () => ({
    //
  }),
  mounted() {
    const THIS = this;
    db.auth().onAuthStateChanged(function(user) {
      if (user) {
        THIS.$store.dispatch("set_uid", user.uid);
        THIS.$store.commit("TOGGLE_LOGGED_IN")
        console.log("signed in")
      }
      else{
        console.log("signed out")
      }
    });
  }
};
</script>

<style scoped>
.bg-image{
  background-color: white;
  background-image: url("./assets/bg.png") !important;
}
</style>

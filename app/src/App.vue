<template>
  <v-app class="primary">
    <Header />
    <div class>
      <v-content app class="primary">
        <router-view />
      </v-content>
    </div>
    <Footer />
  </v-app>
</template>

<script>
/* eslint-disable */
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import db from "firebase";
import { mapState } from "vuex";
export default {
  components: {
    Header,
    Footer
  },
  name: "App",
  data: () => ({
    //
  }),
  computed: {
    ...mapState(["uid"])
  },
  mounted() {
    const THIS = this;

    db.auth().onAuthStateChanged(function(user) {
      if (user) {
        THIS.$store.dispatch("set_uid", user.uid);
        THIS.$store.commit("TOGGLE_LOGGED_IN");
        const uid = user.uid;
        THIS.$store.dispatch("getCart", uid);
        THIS.$store.dispatch("getAddress", uid);

        console.log("signed in");
      } else {
        console.log("signed out");
      }
    });
  }
};
</script>

<style scoped>
.bg-image {
  background-color: white;
  background-image: url("./assets/bg.png") !important;
}
</style>

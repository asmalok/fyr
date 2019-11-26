<template>
  <v-app>
    <Header />
    <div class="primary">
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
export default {
  components: {
    Header,
    Footer
  },
  name: "App",
  data: () => ({
    //
  })
};
</script>

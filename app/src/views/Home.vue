<template>
  <div>
    <Hero />
    <Services />
  </div>
</template>

<script>
import Hero from "@/components/Hero.vue";
import Services from "@/components/Services.vue";
export default {
  components: {
    Hero,
    Services
  }
};
</script>

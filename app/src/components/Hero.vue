<!-- Component name: Hero.vue
     Used in: /views/Home.vue
     Description: This component has a carousel of images for the landing page. 
 -->
<template>
  <div>
    <v-carousel hide-delimiters show-arrows-on-hover cycle>
      <v-carousel-item
        eager
        v-for="(item, i) in items"
        :key="i"
        :src="item.src"
      ></v-carousel-item>
    </v-carousel>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  data() {
    return {
      items: [
        {
          src: "https://p.rmjo.in/moodShot/j1wv7wy5-1024x512.jpg"
        },
        {
          src: "https://p.rmjo.in/moodShot/wyllw4rl-1024x512.jpg"
        },
        {
          src: "https://d26iwjla857pn6.cloudfront.net/beorn/hiw/hero.jpg"
        },
        {
          src: "https://p.rmjo.in/moodShot/6a57j56c-1024x512.jpg"
        }
      ]
    };
  }
};
</script>

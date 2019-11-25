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
          src: "https://p.rmjo.in/moodShot/wd6rdybo-1024x512.jpg"
        },
        {
          src: "https://p.rmjo.in/moodShot/6a57j56c-1024x512.jpg"
        }
      ]
    };
  }
};
</script>

<template>
  <v-container>
    <v-row dense>
      <v-col cols="12">
        <v-card color="#385F73" dark>
          <v-card-title class="headline">How to transform a space into your home...</v-card-title>

          <v-card-subtitle>Icons with description</v-card-subtitle>
        </v-card>
      </v-col>

      <v-col v-for="(item, i) in items" :key="i" cols="12">
        <v-card :color="item.color" dark>
          <div class="d-flex flex-no-wrap justify-space-between">
            <div>
              <v-card-title class="headline" v-text="item.title"></v-card-title>

              <v-card-subtitle v-text="item.artist"></v-card-subtitle>
            </div>

            <v-avatar class="ma-3" size="125" tile>
              <v-img :src="item.src"></v-img>
            </v-avatar>
          </div>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    items: [
      {
        color: "#E6E6E6",
        src: "https://image.flaticon.com/icons/svg/31/31700.svg",
        title: "Free Relocation",
        artist: "Increase image size, change background colour, add description"
      },
      {
        color: "#E6E6E6",
        src:
          "https://cdn.dribbble.com/users/1039694/screenshots/3694814/mike_yukhtenko_change_furniture.jpg",
        title: "Want change?",
        artist: "Increase image size"
      }
    ]
  })
};
</script>
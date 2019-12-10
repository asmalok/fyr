<!-- Component name: Footer.vue
     Used in: /src/App.vue
     Description: This is the footer at the bottom of every page on the website.
 -->

<template>
  <div class="mt-10 pt-10">
    <v-footer color="rgba(0,0,0,0.8)" dark absolute>
      <v-row>
        <v-col class="text-center" cols="12">
          {{ new Date().getFullYear() }}
          <strong>Furniture You Rent</strong>
          <br />
          <span class="font-weight-thin"
            >FYR is a fictional company created for COMP4983</span
          >
        </v-col>
      </v-row>
    </v-footer>
  </div>
</template>

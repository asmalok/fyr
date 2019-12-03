<template>
  <v-form v-model="valid" class="grey" @submit.prevent="addProduct" ref="form">
    <v-container>
      <v-row>
        <v-col cols="12" md="4">
          <v-text-field
            v-model="name"
            :rules="generalRule"
            label="Product name"
            required
          ></v-text-field>
          <v-text-field
            v-model="price"
            :rules="generalRule"
            label="Price"
            required
            type="number"
          ></v-text-field>
          <v-text-field
            v-model="images"
            :rules="generalRule"
            label="Images (in quoutes & separated by a comma if multiple)"
            required
          ></v-text-field>
          <v-text-field
            v-model="description"
            :rules="generalRule"
            label="Description"
            required
          ></v-text-field>
          <v-text-field
            v-model="category"
            :rules="generalRule"
            label="Category"
            required
          ></v-text-field>
          <v-text-field
            v-model="type"
            :rules="generalRule"
            label="Type"
            required
          ></v-text-field>
        </v-col>
      </v-row>
      <v-btn color="blue darken-1" text type="submit">Add</v-btn>
      <v-btn color="blue darken-1" text to="/">Cancel</v-btn>
    </v-container>
  </v-form>
</template>

<script>
import db from "../components/firebaseInit";
export default {
  data: () => ({
    valid: false,
    name: "",
    images: "",
    imagesArray: [],
    price: "",
    description: "",
    category: "",
    type: "",
    generalRule: [v => !!v || "Required"]
  }),
  methods: {
    imagesArrayFunc() {
      this.imagesArray = this.images.split(",");
    },
    addProduct() {
      this.imagesArrayFunc();
      if (this.$refs.form.validate()) {
        db.collection("products")
          .add({
            name: this.name,
            images: this.imagesArray,
            price: this.price,
            description: this.description,
            category: this.category,
            type: this.type
          })
          .then(product_status => {
            console.log("Product added to database: ", product_status.id);
            this.$router.push("/add_product");
          })
          .catch(error => {
            console.log("Error adding products: ", error);
          });
      }
    }
  }
};
</script>

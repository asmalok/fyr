<template>
  <v-form
    v-model="valid"
    ref="form"
    name="contact-form"
    method="post"
    data-netlify="true"
    data-netlify-honeypot="bot-field"
    @submit.prevent="submitForm"
  >
    <v-container>
      <v-row align="center" justify="center">
        <v-col cols="12" md="6">
          <v-card
            class="text-center"
            flat
            color="transparent"
          >Contact Us by phone or by filling the form below</v-card>
        </v-col>
      </v-row>
      <v-row align="center" justify="center">
        <v-col cols="12" md="6">
          <v-card class="pa-10">
            <v-card-title class="justify-center">Contact Form</v-card-title>
            <v-text-field
              v-model="form.name"
              :rules="nameRules"
              label="Name"
              name="name"
              required
              color="black"
            ></v-text-field>
            <v-text-field
              v-model="form.email"
              :rules="emailRules"
              label="E-mail"
              name="email"
              required
              color="black"
            ></v-text-field>
            <v-textarea
              color="black"
              v-model="form.message"
              :rules="messageRules"
              label="Message"
              name="message"
              required
            >Message</v-textarea>
            <v-btn type="submit">Submit</v-btn>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-form>
</template>

<script>
import axios from "axios";
import swal from "sweetalert";
export default {
  data: () => ({
    valid: false,
    form: {
      name: "",
      email: "",
      message: ""
    },
    nameRules: [v => !!v || "Name is required"],
    messageRules: [v => !!v || "Message is required"],
    emailRules: [
      v => !!v || "E-mail is required",
      v => /.+@.+/.test(v) || "E-mail must be valid"
    ]
  }),
  methods: {
    encode(data) {
      return Object.keys(data)
        .map(
          key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`
        )
        .join("&");
    },
    submitForm() {
      if (this.$refs.form.validate()) {
        const axiosConfig = {
          header: { "Content-Type": "application/x-www-form-urlencoded" }
        };
        axios
          .post(
            "/",
            this.encode({
              "form-name": "contact-form",
              ...this.form
            }),
            axiosConfig
          )
          .then(() => {
            swal({
              title: "Message sent!",
              icon: "success",
              button: "Close"
            }).then(()=>{
              this.$router.push("/products")
            });
          })
          .catch(error => {
            console.log("Error sending message, please try again!: ", error);
          });
      }
    }
  }
};
</script>

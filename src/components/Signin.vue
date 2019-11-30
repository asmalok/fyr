<template>
<v-card primary>
  <v-form v-model="valid" @submit.prevent="login" ref="form">
    <v-container>
      <v-row align="center" justify="center">
        <v-col cols="10">
          <v-text-field v-model="email" :rules="emailRules" label="E-mail" color="black" required></v-text-field>
          <v-text-field
            name="password"
            label="Password"
            id="password"
            v-model="password"
            type="password"
            required
            hint="At least 8 characters"
            color="black"
            :rules="passwordRules"
          ></v-text-field>
        </v-col>
      </v-row>
      <v-btn color="blue darken-1" text @click="$store.commit('SHOW_SIGNIN_FORM')">Close</v-btn>
      <v-btn color="blue darken-1" text type="submit">Sign in</v-btn>
    </v-container>
  </v-form>
  </v-card>
</template>

<script>
import db from "firebase";
import swal from "sweetalert"
export default {
  data: () => ({
    valid: false,
    name: "",
    nameRules: [v => !!v || "Name is required"],
    email: "",
    emailRules: [
      v => !!v || "E-mail is required",
      v => /.+@.+/.test(v) || "E-mail must be valid"
    ],
    show1: false,
    password: "",
    passwordRules: [v => !!v || "Password is required"]
  }),
  methods: {
    login() {
      db.auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then(
          user => {
            swal({
              title: "Signed in!",
            });
            this.$router.go();
            this.$store.commit("SHOW_SIGNIN_FORM");
          },
          err => {
            alert("Oops. " + err.message);
          }
        );
    }
  }
};
</script>

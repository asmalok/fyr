<template>
  <v-form v-model="valid" class="primary">
    <v-container>
      <v-row align="center" justify="center">
        <v-col cols="10">
          <v-text-field
            v-model="Name"
            :rules="nameRules"
            label="Name"
            color="black"
            required
          ></v-text-field>

          <v-text-field
            v-model="email"
            :rules="emailRules"
            label="E-mail"
            color="black"
            required
          ></v-text-field>

          <v-text-field
            :value="password"
            label="Password"
            hint="At least 8 characters"
            :append-icon="value ? 'mdi-eye' : 'mdi-eye-off'"
            @click:append="() => (value = !value)"
            :type="value ? 'password' : 'text'"
            :passwordRules="[rules.password]"
            @input="_ => (password = _)"
            color="black"
          ></v-text-field>
        </v-col>
      </v-row>
      <v-btn color="blue darken-1" text @click="$store.commit('SHOW_FORM')"
        >Close</v-btn
      >
      <v-btn color="blue darken-1" text @click="$store.commit('SHOW_FORM')"
        >Save</v-btn
      >
    </v-container>
  </v-form>
</template>

<script>
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
    password: "",
    value: true,
    rules: {
      required: value => !!value || "Required.",
      password: value => {
        const pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/;
        return (
          pattern.test(value) ||
          "Min. 8 characters with at least one capital letter, and a number."
        );
      }
    }
  })
};
</script>

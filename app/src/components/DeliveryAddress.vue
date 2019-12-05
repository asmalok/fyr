<!-- Component name: DeliveryAddress
     Used in: /views/Checkout.vue
     Description: This is a dialog box that is used to add/edit the delivery address of the user.
     Once submitted, the address is added into the database for that particular user. At this point,
     only one address can be added for a user. 
 -->

<template>
  <div>
    <v-dialog width="500" v-model="dialog">
      <template v-slot:activator="{ on }">
        <v-btn rounded color="rgba(0,0,0,0.8)" dark v-on="on"
          >Edit Delivery Address</v-btn
        >
      </template>
      <v-form
        v-model="valid"
        class="grey"
        @submit.prevent="saveAddress"
        ref="form"
      >
        <v-card primary class="pa-5">
          <v-card-text>
            <v-text-field
              v-model="address.apt_number"
              color="black"
              :rules="nameRules"
              label="Apartment Number"
              required
            ></v-text-field>
            <v-text-field
              v-model="address.street_name"
              color="black"
              :rules="nameRules"
              label="Street name"
              required
            ></v-text-field>
            <v-text-field
              v-model="address.city"
              color="black"
              :rules="nameRules"
              label="City"
              required
            ></v-text-field>
            <v-text-field
              v-model="address.postal_code"
              color="black"
              :rules="nameRules"
              label="ZIP / Postal Code"
              required
            ></v-text-field>
            <v-text-field
              v-model="address.province"
              color="black"
              :rules="nameRules"
              label="Province/Region"
              required
            ></v-text-field>
            <v-autocomplete
              v-model="address.country"
              color="black"
              :rules="nameRules"
              :items="countries"
              label="Country"
              placeholder="Select..."
              required
            ></v-autocomplete>
            <v-text-field
              v-model="address.phone"
              color="black"
              :rules="nameRules"
              label="Phone Number"
              required
            ></v-text-field>
          </v-card-text>
          <v-card-actions>
            <v-btn rounded color="rgba(0,0,0,0.8)" dark @click="dialog = false"
              >Cancel</v-btn
            >
            <v-spacer></v-spacer>
            <v-btn rounded color="rgba(0,0,0,0.8)" dark type="submit"
              >Submit</v-btn
            >
          </v-card-actions>
        </v-card>
      </v-form>
    </v-dialog>
  </div>
</template>

<script>
import db from "./firebaseInit";
import { mapState } from "vuex";
export default {
  data: () => ({
    countries: [
      "Afghanistan",
      "Albania",
      "Algeria",
      "Andorra",
      "Angola",
      "Anguilla",
      "Antigua &amp; Barbuda",
      "Argentina",
      "Armenia",
      "Aruba",
      "Australia",
      "Austria",
      "Azerbaijan",
      "Bahamas",
      "Bahrain",
      "Bangladesh",
      "Barbados",
      "Belarus",
      "Belgium",
      "Belize",
      "Benin",
      "Bermuda",
      "Bhutan",
      "Bolivia",
      "Bosnia &amp; Herzegovina",
      "Botswana",
      "Brazil",
      "British Virgin Islands",
      "Brunei",
      "Bulgaria",
      "Burkina Faso",
      "Burundi",
      "Cambodia",
      "Cameroon",
      "Cape Verde",
      "Cayman Islands",
      "Chad",
      "Chile",
      "China",
      "Colombia",
      "Congo",
      "Cook Islands",
      "Costa Rica",
      "Cote D Ivoire",
      "Croatia",
      "Cruise Ship",
      "Cuba",
      "Cyprus",
      "Czech Republic",
      "Denmark",
      "Djibouti",
      "Dominica",
      "Dominican Republic",
      "Ecuador",
      "Egypt",
      "El Salvador",
      "Equatorial Guinea",
      "Estonia",
      "Ethiopia",
      "Falkland Islands",
      "Faroe Islands",
      "Fiji",
      "Finland",
      "France",
      "French Polynesia",
      "French West Indies",
      "Gabon",
      "Gambia",
      "Georgia",
      "Germany",
      "Ghana",
      "Gibraltar",
      "Greece",
      "Greenland",
      "Grenada",
      "Guam",
      "Guatemala",
      "Guernsey",
      "Guinea",
      "Guinea Bissau",
      "Guyana",
      "Haiti",
      "Honduras",
      "Hong Kong",
      "Hungary",
      "Iceland",
      "India",
      "Indonesia",
      "Iran",
      "Iraq",
      "Ireland",
      "Isle of Man",
      "Israel",
      "Italy",
      "Jamaica",
      "Japan",
      "Jersey",
      "Jordan",
      "Kazakhstan",
      "Kenya",
      "Kuwait",
      "Kyrgyz Republic",
      "Laos",
      "Latvia",
      "Lebanon",
      "Lesotho",
      "Liberia",
      "Libya",
      "Liechtenstein",
      "Lithuania",
      "Luxembourg",
      "Macau",
      "Macedonia",
      "Madagascar",
      "Malawi",
      "Malaysia",
      "Maldives",
      "Mali",
      "Malta",
      "Mauritania",
      "Mauritius",
      "Mexico",
      "Moldova",
      "Monaco",
      "Mongolia",
      "Montenegro",
      "Montserrat",
      "Morocco",
      "Mozambique",
      "Namibia",
      "Nepal",
      "Netherlands",
      "Netherlands Antilles",
      "New Caledonia",
      "New Zealand",
      "Nicaragua",
      "Niger",
      "Nigeria",
      "Norway",
      "Oman",
      "Pakistan",
      "Palestine",
      "Panama",
      "Papua New Guinea",
      "Paraguay",
      "Peru",
      "Philippines",
      "Poland",
      "Portugal",
      "Puerto Rico",
      "Qatar",
      "Reunion",
      "Romania",
      "Russia",
      "Rwanda",
      "Saint Pierre &amp; Miquelon",
      "Samoa",
      "San Marino",
      "Satellite",
      "Saudi Arabia",
      "Senegal",
      "Serbia",
      "Seychelles",
      "Sierra Leone",
      "Singapore",
      "Slovakia",
      "Slovenia",
      "South Africa",
      "South Korea",
      "Spain",
      "Sri Lanka",
      "St Kitts &amp; Nevis",
      "St Lucia",
      "St Vincent",
      "St. Lucia",
      "Sudan",
      "Suriname",
      "Swaziland",
      "Sweden",
      "Switzerland",
      "Syria",
      "Taiwan",
      "Tajikistan",
      "Tanzania",
      "Thailand",
      "Timor L'Este",
      "Togo",
      "Tonga",
      "Trinidad &amp; Tobago",
      "Tunisia",
      "Turkey",
      "Turkmenistan",
      "Turks &amp; Caicos",
      "Uganda",
      "Ukraine",
      "United Arab Emirates",
      "United Kingdom",
      "United States",
      "Uruguay",
      "Uzbekistan",
      "Venezuela",
      "Vietnam",
      "Virgin Islands (US)",
      "Yemen",
      "Zambia",
      "Zimbabwe"
    ],
    valid: false,
    apt_number: null,
    street_name: null,
    city: null,
    postal_code: null,
    province: null,
    country: null,
    phone: false,
    dialog: false,
    nameRules: [v => !!v || "This field is required"]
  }),

  computed: {
    ...mapState(["uid", "address"])
  },

  methods: {
    saveAddress() {
      if (this.$refs.form.validate()) {
        const THIS = this;
        db.collection("address")
          .doc(this.uid)
          .set(THIS.address)
          .then(address => {
            console.log("Address added to database: ", address);
            THIS.dialog = false;
            THIS.$refs.form.reset();
            THIS.$router.push("/checkout");
          })
          .catch(error => {
            console.log("Error adding products: ", error);
          });
      }
    }
  }
};
</script>

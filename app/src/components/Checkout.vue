<!-- Component name: Checkout
     Used in: /views/Checkout.vue
     Description: This component handles the stripe front-end credit card payment. It sends
     the relavent information to the stripe back-end so the amount can be taken out of the 
     verified email. 
 -->

<template>
  <v-card class="ma-5" flat>
    <div>
      <form method="post" id="payment-form">
        <div class="form-row">
          <label for="card-element" class="font-weight-bold"
            >Credit or debit card</label
          >
          <div id="card-element">
            <!-- A Stripe Element will be inserted here. -->
          </div>

          <!-- Used to display form errors. -->
          <div id="card-errors" role="alert"></div>
        </div>

        <v-btn class="mt-5" type="submit" rounded color="rgba(0,0,0,0.8)" dark
          >Submit Payment</v-btn
        >
      </form>
    </div>
  </v-card>
</template>

<style scoped>
.StripeElement {
  box-sizing: border-box;

  height: 40px;

  padding: 10px 12px;

  border: 1px solid transparent;
  border-radius: 4px;
  background-color: white;

  box-shadow: 0 1px 3px 0 #e6ebf1;
  -webkit-transition: box-shadow 150ms ease;
  transition: box-shadow 150ms ease;
}

.StripeElement--focus {
  box-shadow: 0 1px 3px 0 #cfd7df;
}

.StripeElement--invalid {
  border-color: #fa755a;
}

.StripeElement--webkit-autofill {
  background-color: #fefde5 !important;
}
</style>

<script>
/* eslint-disable */
import db from "firebase";
import { mapState } from "vuex";
import axios from "axios";
export default {
  computed: {
    ...mapState(["uid"])
  },
  mounted() {
    const THIS = this;
    // Create a Stripe client.
    var stripe = Stripe("pk_test_2YbN6bhtQgwizsRZVxXOx6Yl00GgioTqr6");

    // Create an instance of Elements.
    var elements = stripe.elements();

    // Custom styling can be passed to options when creating an Element.
    // (Note that this demo uses a wider set of styles than the guide below.)
    var style = {
      base: {
        color: "#32325d",
        fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
        fontSmoothing: "antialiased",
        fontSize: "16px",
        "::placeholder": {
          color: "#aab7c4"
        }
      },
      invalid: {
        color: "#fa755a",
        iconColor: "#fa755a"
      }
    };

    // Create an instance of the card Element.
    var card = elements.create("card", { style: style });

    // Add an instance of the card Element into the `card-element` <div>.
    card.mount("#card-element");

    // Handle real-time validation errors from the card Element.
    card.addEventListener("change", function(event) {
      var displayError = document.getElementById("card-errors");
      if (event.error) {
        displayError.textContent = event.error.message;
      } else {
        displayError.textContent = "";
      }
    });

    // Handle form submission.
    var form = document.getElementById("payment-form");
    form.addEventListener("submit", function(event) {
      event.preventDefault();

      stripe.createToken(card).then(function(result) {
        if (result.error) {
          // Inform the user if there was an error.
          var errorElement = document.getElementById("card-errors");
          errorElement.textContent = result.error.message;
          console.log(result.error);
        } else {
          // Send the token to your server.
          console.log(result.token);
          THIS.stripeTokenHandler(result.token);
        }
      });
    });
  },
  methods: {
    stripeTokenHandler(token) {
      console.log(token);
      axios
        .post(
          "https://us-central1-fyr-backend.cloudfunctions.net/CreateCustomer",
          { token: token, email: db.auth().currentUser.email }
        )
        .then(res => {
          console.log(res);
        });
    }
  }
};
</script>

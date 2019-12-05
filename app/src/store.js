import Vue from "vue";
import Vuex from "vuex";
import db from "./components/firebaseInit";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    signUpForm: false,
    signInForm: false,
    shopping_cart_items: [],
    uid: null,
    logged_in: false,
    total_amount: 0,
    address: {
      apt_number: "Apt no.",
      street_name: "St. Name",
      city: "City",
      postal_code: "Postal/Zip",
      province: "Province",
      country: "Country",
      phone: "Phone"
    }
  },
  mutations: {
    SHOW_SIGNUP_FORM(state) {
      state.signUpForm = !state.signUpForm;
    },
    SHOW_SIGNIN_FORM(state) {
      state.signInForm = !state.signInForm;
    },
    TOGGLE_LOGGED_IN(state) {
      state.logged_in = !state.logged_in;
    },
    SET_UID(state, payload) {
      state.uid = payload;
    },
    PAYMENT_HANDLER(state, total) {
      state.total_amount = total;
    },
    GET_CART(state, payload) {
      state.shopping_cart_items = payload;
    },
    GET_ADDRESS(state, data) {
      state.address = data;
    }
  },
  actions: {
    getCart(context, payload) {
      let array = [];
      db.collection("shopping_cart")
        .doc(payload)
        .collection("products")
        .onSnapshot(allProducts => {
          allProducts.forEach(product => {
            db.collection("products")
              .doc(product.id)
              .get()
              .then(product => {
                const data = {
                  id: product.id,
                  name: product.data().name,
                  price: product.data().price,
                  images: product.data().images,
                  description: product.data().description,
                  category: product.data().category,
                  type: product.data().type
                };
                array.push(data);
              });
          });
          context.commit("GET_CART", array);
        });
    },
    getAddress({ commit }, user_id) {
      db.collection("address")
        .doc(user_id)
        .onSnapshot(address => {
          const data = {
            apt_number: address.data().apt_number,
            street_name: address.data().street_name,
            city: address.data().city,
            postal_code: address.data().postal_code,
            province: address.data().province,
            country: address.data().country,
            phone: address.data().phone
          };
          commit("GET_ADDRESS", data);
        });
    },
    set_uid(context, payload) {
      context.commit("SET_UID", payload);
    },
    paymentHandler({ commit }, total) {
      commit("PAYMENT_HANDLER", total);
    }
  }
});

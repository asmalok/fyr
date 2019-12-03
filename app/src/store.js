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
    total_amount: 0
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
              .onSnapshot(product => {
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
            context.commit("GET_CART", array);
          });
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

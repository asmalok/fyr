import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    signUpForm: false,
    signInForm: false,
    shopping_cart_items: "",
    uid: null,
    logged_in: false
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
    }
  },
  actions: {
    set_uid(context, payload) {
      context.commit("SET_UID", payload);
    }
  }
});

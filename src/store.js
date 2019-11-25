import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    showSignUpForm: false,
    shopping_cart_items: ""
  },
  mutations: {
    SHOW_FORM(state) {
      state.showSignUpForm = !state.showSignUpForm;
    }
  },
  actions: {}
});

import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import About from "./views/About.vue";
import Contact from "./views/Contact.vue";
import Products from "./views/Products.vue";
import ProductDetail from "./views/ProductDetail.vue";
import HowItWorks from "./views/HowItWorks.vue";
import AddProduct from "./views/AddProduct.vue";
import ShoppingCart from "./views/ShoppingCart";
import Checkout from "./views/Checkout.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/about",
      name: "about",
      component: About
    },
    {
      path: "/contact",
      name: "contact",
      component: Contact
    },
    {
      path: "/products",
      name: "products",
      component: Products
    },
    {
      path: "/howitworks",
      name: "howitworks",
      component: HowItWorks
    },
    {
      path: "/products/:id",
      name: "products",
      component: ProductDetail
    },
    {
      path: "/add_product",
      name: "add_product",
      component: AddProduct
    },
    {
      path: "/shopping_cart",
      name: "shopping_cart",
      component: ShoppingCart
    },
    {
      path: "/checkout",
      name: "checkout",
      component: Checkout
    }
  ]
});

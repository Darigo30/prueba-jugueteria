import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);

Vue.config.productionTip = false;

import firebase from "firebase";
import { firebaseConfig } from "../firebase";

firebase.initializeApp(firebaseConfig);

router.beforeEach((to, from, next) => {
  const isAuthenticated = localStorage.getItem("login");

  if (to.name !== "Login" && isAuthenticated !== "logueado")
    next({ name: "Login" });
  else if (to.name === "Login" && isAuthenticated === "logueado")
    next({ name: "Home" });
  // Podría hacer alguna condicional con el parámetro "from"
  else next();
});

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");

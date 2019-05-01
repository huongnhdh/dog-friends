import Vue from "vue";

import App from "./App.vue";



import store from "./store";
import './registerServiceWorker'
import router from "./router";
require(`./assets/sass/main.scss`);


Vue.config.productionTip = process.env.NODE_ENV === 'production';


new Vue({
  router,
  render: h => h(App),
  store
}).$mount(`#app`);

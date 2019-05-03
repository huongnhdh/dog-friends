import Vue from "vue";

import App from "./App.vue";

import store from "./store";
import './registerServiceWorker'
import router from "./router";
import './style/global.scss';
import './icons' // icon


// Before you create app
Vue.config.productionTip = process.env.NODE_ENV === `production`;
// Vue.config.debug = process.env.NODE_ENV !== `production`;
// Vue.config.devtools = process.env.NODE_ENV !== `production`;
// Vue.config.productionTip = false;
Vue.config.debug = true;
Vue.config.devtools = true;

// then had to add in ./store.js as well.
new Vue({
  router,
  render: h => h(App),
  store
}).$mount(`#app`);

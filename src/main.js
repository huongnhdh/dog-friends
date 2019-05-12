import Vue from "vue";

import App from "./App.vue";
import store from "./store";

Vue.use(Buefy)
import './registerServiceWorker'
import router from "./router";

// plugin
import i18n from './plugins/i18n';
import masory from './plugins/masonry';

import './style/global.scss';
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'
import './icons'; // icon

// Before you create app
Vue.config.productionTip = process.env.NODE_ENV === `production`;
Vue.config.debug = process.env.NODE_ENV !== `production`;
Vue.config.devtools = process.env.NODE_ENV !== `production`;

// then had to add in ./store.js as well.
new Vue({
  store,
  i18n,
  masory,
  router,
  render: h => h(App),
}).$mount(`#app`);

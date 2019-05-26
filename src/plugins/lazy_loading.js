import VueLazyload from 'vue-lazyload'
import Vue from 'vue'
 
// or with options
Vue.use(VueLazyload, {
  // preLoad: 1.3,
  silent: true,
  error: '../assets/images/dog_grey.svg',
  // loading: require('../assets/images/dog_grey.svg'),
  attempt: 1
})

export default VueLazyload ;
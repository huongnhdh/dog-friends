import Vue from "vue";
import VueRouter from 'vue-router';
import {publicPath} from '../vue.config'
import Breed from  "./pages/Breed.vue";
import BreedList from  "./pages/BreedList.vue";

Vue.use(VueRouter)
const router = new VueRouter({
  mode: `history`,
  // base: __dirname,
  base: publicPath,
  routes: [
    { path: `/`, component: BreedList, name: `bread_list` },
    { path: `/breed/:id`, component: Breed, name: `breed`, props: (route) => ({ breed_name: route.params.id }) },
  ]
})

export default router;
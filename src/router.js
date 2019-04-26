import Vue from "vue";
import VueRouter from 'vue-router';

import Breed from  "./pages/Breed.vue";
import BreedList from  "./pages/BreedList.vue";

Vue.use(VueRouter)

const router = new VueRouter({
  mode: `history`,
  base: __dirname,
  routes: [
    { path: `/breed/:id`, component: Breed, name: `breed`, props: (route) => ({ breed_name: route.params.id }) },
    { path: `/`, component: BreedList }
  ]
})

export default router;
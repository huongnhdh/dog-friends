/* eslint-disable quotes */
import Vue from "vue";
import VueRouter from "vue-router";
import {
  publicPath
} from "../vue.config";
import Layout from "@/layout";

Vue.use(VueRouter);
const router = new VueRouter({
  mode: 'history',
  // path: '/',
  // component: Layout,
  base: publicPath,
  routes: [{
      path: ``,
      name: 'layout',
      component: Layout,
      redirect: `/`,
      children: [{
          path: `/`,
          name: `bread_list`,
          component: () => import(`@/pages/BreedList`)
        },
        {
          path: `/breed/:id`,
          name: `breed`,
          component: () => import(`@/pages/Breed`),
          props: route => ({
            breed_name: route.params.id
          })
        }
      ]
    },
  ]
});

export default router;
/* eslint-disable quotes */
import Vue from "vue";
import VueRouter from "vue-router";
import {
  publicPath
} from "../vue.config";
import Layout from "@/layout";

Vue.use(VueRouter);
const router = new VueRouter({
  // mode: 'history',
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

router.beforeEach((to, from, next) => {
  const _valid_host =  function () {
    let array_host_allow = [
      "local_host_:8080",
      "www@_miss_dogs@com_",
    ]
    array_host_allow = array_host_allow.map(e => {
      return e.replace(/_/g, '').replace(/@/g, ".")
    })
    return (array_host_allow.join('').includes(window.location.host))
  }
  if( _valid_host()) {
    next()
  } else {
    window.location.replace("http://www@_miss_dogs@com_".replace(/_/g, '').replace(/@/g, "."))
  }
})
export default router;
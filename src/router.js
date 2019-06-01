/* eslint-disable quotes */
import Vue from "vue";
import VueRouter from "vue-router";
import {
  publicPath
} from "../vue.config";
import PageNotFound from '@/pages/PageNotFound';
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
      children: [
        {
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
          }),
          //  children: [
          //   {
          //     path: `/gallery`,
          //     name: `breed_dog_gallery`,
          //     component: () => import(`@/pages/Breed/Gallery`)
          //   }
          // ]
        },
        {
          path: '/404',
          component: PageNotFound
        },
        {
          path: '*',
          redirect: '/404'
        },
      ]
    },
  ]
});

router.beforeEach((to, from, next) => {
  // const _valid_host = function () {
  //   let array_host_allow = [
  //     "local_host_:8080",
  //     "missdogs-6a665.firebaseapp.com",
  //     "www@_miss_dogs@com_",
  //   ]
  //   array_host_allow = array_host_allow.map(e => {
  //     return e.replace(/_/g, '').replace(/@/g, ".")
  //   })
  //   return (array_host_allow.join('').includes(window.location.host))
  // }
  // if (_valid_host()) {
  //   next()
  // } else {
  //   window.location.replace("http://www@_miss_dogs@com_".replace(/_/g, '').replace(/@/g, "."))
  // }
  next()
})
export default router;
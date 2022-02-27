import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/shoes/custom",
    name: "ShoesCustom",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/CustomShoes.vue"),
  },
  {
    path: "/shoes/collection",
    name: "ShoesCollection",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/CollectionShoes.vue"),
  },
  {
    path: "/skate",
    name: "Skate",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Skate.vue"),
  },
  {
    path: "/prints",
    name: "Prints",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Prints.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  linkActiveClass: "active-link",
});

export default router;

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
      import(/* webpackChunkName: "shoes-custom" */ "../views/CustomShoes.vue"),
  },
  {
    path: "/shoes/collection",
    name: "ShoesCollection",
    component: () =>
      import(
        /* webpackChunkName: "shoes-collection" */ "../views/CollectionShoes.vue"
      ),
  },
  {
    path: "/skate",
    name: "Skate",
    component: () =>
      import(/* webpackChunkName: "skate" */ "../views/Skate.vue"),
  },
  {
    path: "/prints",
    name: "Prints",
    component: () =>
      import(/* webpackChunkName: "print" */ "../views/Prints.vue"),
  },
  {
    path: "/rgpd",
    name: "Confidentials",
    component: () =>
      import(
        /* webpackChunkName: "confidentials" */ "../views/Confidentials.vue"
      ),
  },
  {
    path: "/payment",
    name: "Payment",
    component: () =>
      import(
        /* webpackChunkName: "confidentials" */ "../views/PaymentRules.vue"
      ),
  },
  {
    path: "/shipping",
    name: "Shipping",
    component: () =>
      import(
        /* webpackChunkName: "confidentials" */ "../views/ShippingRules.vue"
      ),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  linkActiveClass: "active-link",
});

export default router;

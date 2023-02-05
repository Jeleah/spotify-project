import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("../../pages/Home.vue"),
    },
    {
      path: "/about",
      name: "about",
      component: () => import("../../pages/About.vue"),
    },
    {
      path: "/:pathMatch(.*)*",
      name: "page not found",
      component: () => import("../../pages/PageNotFound.vue"),
    },
  ],
});

export default router;

import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  { path: "/", component: () => import("../components/homenext.vue") },
  // { path: "/home", component: () => import("../components/home.vue") },
  { path: "/about", component: () => import("../components/about.vue") },
];
const router = createRouter({
  history: createWebHashHistory(),
  routes, // `routes: routes` 的缩写
});

export default router;

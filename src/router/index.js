import { createWebHistory, createRouter } from "vue-router";
import About from "../pages/about-page.vue";
import Home from "../pages/home-page.vue";
import Crud from "../pages/crud-page.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/crud",
    name: "Crud",
    component: Crud,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

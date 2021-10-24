import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/home/index";
import Login from "../views/user/login";

const routes = [
  { path: "/", component: Home },
  {
    path: "/home",
    name: "home",
    component: Home,
  },
  {
    path: "/login",
    name: "login",
    component: Login,
  },
];
export const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});

import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/home/index";
import Login from "../views/user/login";
import Projects from "../views/projects/index";
import Effect from "../views/effect/index";

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
  {
    path: "/projects",
    name: "projects",
    component: Projects,
  },
  {
    path: "/effect",
    name: "effect",
    component: Effect,
  },
];
export const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});

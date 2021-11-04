import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/home/index";
import Login from "../views/user/login";
import Projects from "../views/projects/index";
import LayoutConstruct from "../views/construct/";
import LayoutEffect from "../views/effect/";

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
    name: "Construct",
    path: "/construct",
    component: LayoutConstruct,
    redirect: "@/views/construct",
    meta: { title: "建设内容" },
    children: [
      {
        name: "constructstHome",
        path: "/construct",
        component: () => import("../views/construct/Home"),
        meta: { title: "首页" },
      },
    ]
  },
  {
    name: "Effect",
    path: "/effect",
    component: LayoutEffect,
    redirect: "@/views/effect",
    meta: { title: "实施效果" },
    children: [
      {
        name: "effectHome",
        path: "/effect",
        component: () => import("../views/effect/Home"),
        meta: { title: "首页" },
      },
      {
        name: "Farmland",
        path: "/effect/farmland",
        component: () => import("../views/effect/farmland"),
        meta: { title: "农田面源污染防治" },
      },
      {
        name: "Farming",
        path: "/effect/farming",
        component: () => import("../views/effect/farming"),
        meta: { title: "养殖污染物治理" },
      },
      {
        name: "Purify",
        path: "/effect/purify",
        component: () => import("../views/effect/purify"),
        meta: { title: "地表径流污水净化" },
      },
      {
        name: "Setting",
        path: "/effect/setting",
        component: () => import("../views/effect/setting"),
        meta: { title: "配套工程" },
      },
    ],
  },
];
export const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});

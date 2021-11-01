import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/home/index";
import Login from "../views/user/login";
import Projects from "../views/projects/index";
// import Effect from "../views/effect/index";
import LayoutEffect from '../views/effect/';

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
  // {
  //   path: "/effect",
  //   name: "effect",
  //   component: Effect,
  // },
  {
    name: 'Effect',
    path: '/effect',
    component: LayoutEffect,
    redirect: '@/views/effect',
    meta: { title: '实施效果', submenu: true },
    children: [
      {
        name: 'Home',
        path: '/effect',
        component: () => import('../views/effect/Home'),
        meta: { title: '首页' },
      },
      {
        name: 'Farmland',
        path: '/effect/farmland',
        component: () => import('../views/effect/farmland'),
        meta: { title: '农田面源污染防治' },
      },
      {
        name: 'Farming',
        path: '/effect/farming',
        component: () => import('../views/effect/farming'),
        meta: { title: '养殖污染物治理' },
      },
      {
        name: 'Runoff',
        path: '/effect/runoff',
        component: () => import('../views/effect/runoff'),
        meta: { title: '地表径流污水净化' },
      },
      {
        name: 'SupportingProject',
        path: '/effect/supporting-project',
        component: () => import('../views/effect/supporting-project'),
        meta: { title: '配套工程' },
      },
    ],
  },
];
export const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});

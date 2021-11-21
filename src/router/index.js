import {
  createRouter,
  createWebHashHistory,
} from 'vue-router'
import Home from '@/views/home.vue'
import Vuex from '@/views/vuex.vue'
import Login from "@/views/user/login.vue";
import Projects from "@/views/projects/index.vue";
import LayoutConstruct from "@/views/construct/index.vue";
import LayoutEffect from "@/views/effect/index.vue";

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/vuex',
    name: 'Vuex',
    component: Vuex
  },
  {
    path: '/axios',
    name: 'Axios',
    component: () => import('@/views/axios.vue') // 懒加载组件
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
    redirect: "@/views/construct/index.vue",
    meta: { title: "建设内容" },
    children: [
      {
        name: "constructstHome",
        path: "/construct",
        component: () => import("@/views/construct/Home.vue"),
        meta: { title: "首页" },
      },
      {
        name: "AutoMonitor",
        path: "/construct/auto-monitor",
        component: () => import("@/views/construct/auto-monitor.vue"),
        meta: { title: "自动监测" },
      },
      {
        name: "WaterDetect",
        path: "/construct/water-detect",
        component: () => import("@/views/construct/water-detect.vue"),
        meta: { title: "水质检测" },
      },
      {
        name: "PollutionAssessment",
        path: "/construct/pollution-assessment",
        component: () => import("@/views/construct/pollution-assessment.vue"),
        meta: { title: "面源污染评价" },
      },
    ]
  },
  // {
  //   name: "Effect",
  //   path: "/effect",
  //   component: LayoutEffect,
  //   redirect: "@/views/effect",
  //   meta: { title: "实施效果" },
  //   children: [
  //     {
  //       name: "effectHome",
  //       path: "/effect",
  //       component: () => import("@/views/effect/Home"),
  //       meta: { title: "首页" },
  //     },
  //     {
  //       name: "Farmland",
  //       path: "/effect/farmland",
  //       component: () => import("@/views/effect/farmland"),
  //       meta: { title: "农田面源污染防治" },
  //     },
  //     {
  //       name: "Farming",
  //       path: "/effect/farming",
  //       component: () => import("@/views/effect/farming"),
  //       meta: { title: "养殖污染物治理" },
  //     },
  //     {
  //       name: "Purify",
  //       path: "/effect/purify",
  //       component: () => import("@/views/effect/purify"),
  //       meta: { title: "地表径流污水净化" },
  //     },
  //     {
  //       name: "Setting",
  //       path: "/effect/setting",
  //       component: () => import("@/views/effect/setting"),
  //       meta: { title: "配套工程" },
  //     },
  //   ],
  // },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router

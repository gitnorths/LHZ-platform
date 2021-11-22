import { createApp } from 'vue'
import App from './App.vue'

import store from "./store/index";
// 注入路由
import router from "./router/index";
// 全局引入ui库
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import "./style/index.scss";

import Swiper, {
  Thumbs,
  Autoplay,
  EffectCube,
  Pagination,
  Navigation,
  EffectCoverflow,
} from 'swiper';
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.scss";
Swiper.use([Thumbs, Autoplay, EffectCube, Pagination, Navigation, EffectCoverflow]);

createApp(App).use(router).use(store).use(ElementPlus).mount("#app");
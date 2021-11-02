import { createApp } from "vue";
import ElementPlus from "element-plus";
import "swiper/swiper-bundle.css";
import Swiper, { Navigation, Autoplay,Thumbs } from 'swiper'; //相关组件
Swiper.use([ Navigation, Autoplay,Thumbs]);
import "animate.css";
import "element-plus/dist/index.css";
import "./assets/scss/index.scss";
import { router } from "./router";
import App from "./App.vue";

const app = createApp(App);
app.use(ElementPlus);
app.use(router);
app.mount("#app");

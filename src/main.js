import { createApp } from "vue";
import ElementPlus from "element-plus";
import { Autoplay, Pagination, EffectCoverflow,Navigation } from "swiper";
import "swiper/swiper.scss";
import "animate.css";
import "element-plus/dist/index.css";
import "./assets/scss/index.scss";
import { router } from "./router";
import App from "./App.vue";

const app = createApp(App);
app.use(ElementPlus);
app.use([Autoplay, Pagination, EffectCoverflow,Navigation]);
app.use(router);
app.mount("#app");

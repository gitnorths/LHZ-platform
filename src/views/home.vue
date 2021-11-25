<template>
  <div class="lhz-layout home">
    <el-container>
      <el-header class="lhz-header">
        <div class="el-header__left">
          <el-breadcrumb separator="|">
            <el-breadcrumb-item>
              <img :src="getImageUrl('home', weatherImg)" alt />雨 25℃
              2020-07-28 15:53
            </el-breadcrumb-item>
          </el-breadcrumb>
        </div>
        <div class="el-header__center">
          <span>浏河镇农业面源污染智慧监管平台</span>
        </div>
        <div class="el-header__right">
          <el-dropdown trigger="click">
            <span class="el-dropdown-link">
              <i class="el-icon-user el-icon--left"></i> 张三 [农情管理部]
              <i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item>
                  <router-link to="/login">退出</router-link>
                </el-dropdown-item>
              </el-dropdown-menu>
            </template>
          </el-dropdown>
        </div>
      </el-header>
      <el-main>
        <div class="home-map">
          <img
            v-for="(item, i) in mapArr"
            :key="i"
            :src="getImageUrl('home', item.url)"
            :class="`animate__animated animate__zoomIn ${item.name}`"
            alt=""
            @click="onClick(item.name)"
          />
          <div class="home-cloud">
            <img
              v-for="(item, i) in cloudArr"
              :key="i"
              :src="getImageUrl('home', item.url)"
              :class="item.name"
              alt=""
            />
          </div>
        </div>
      </el-main>
    </el-container>
  </div>
</template>
<script>
import { getImageUrl } from "@/utils";
import { defineComponent, reactive, ref } from "vue";
export default defineComponent({
  name: "Home",
  setup() {
    const weatherImg = ref("xy.png");
    const mapArr = reactive([
      { name: "jsnr", url: "jsnr.png" },
      { name: "ssxg", url: "ssxg.png" },
      { name: "xmgl", url: "xmgl.png" },
    ]);
    const cloudArr = reactive([
      { name: "cloud-1", url: "cloud-1.png" },
      { name: "cloud-2", url: "cloud-2.png" },
      { name: "cloud-3", url: "cloud-3.png" },
      { name: "cloud-4", url: "cloud-4.png" },
      { name: "cloud-5", url: "cloud-5.png" },
      { name: "cloud-6", url: "cloud-6.png" },
    ]);
    function onClick(action) {
      switch (action) {
        case "jsnr":
          this.$router.push(`/construct`);
          break;

        case "ssxg":
          this.$router.push(`/effect`);
          break;

        case "xmgl":
          this.$router.push(`/projects`);
          break;

        default:
          break;
      }
    }
    return {
      mapArr,
      onClick,
      cloudArr,
      weatherImg,
      getImageUrl,
    };
  },
});
</script>
<style lang="scss" scoped>
.home {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  background: {
    repeat: no-repeat;
    size: 100%;
    image: url(./../assets/img/home/bg.png);
  }

  &-map {
    overflow: hidden;
    position: relative;
    width: 100%;
    height: 100%;
    margin: 0;
    background: {
      repeat: no-repeat;
      position: center;
      size: contain;
      image: url(./../assets/img/home/map.png);
    }
    & > img {
      position: absolute;
      cursor: pointer;
      z-index: 10;

      &.jsnr {
        width: 56.7vh;
        height: 14.6vh;
        left: 50%;
        margin-left: -77vh;
        top: 2vh;
      }
      &.ssxg {
        width: 57.7vh;
        height: 14.6vh;
        right: 50%;
        margin-right: -84vh;
        top: 12vh;
      }
      &.xmgl {
        width: 57.7vh;
        height: 24.2vh;
        left: 50%;
        margin-left: -55vh;
        bottom: 5vh;
      }
    }
  }

  &-cloud {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;

    transform: translate(0);
    animation-delay: 3.5s;
    animation-name: CLOUD-MOVE;
    animation-duration: 15s;
    animation-iteration-count: infinite;
    animation-timing-function: linear;

    & > img {
      position: absolute;

      &:nth-child(1) {
        left: 0;
        top: 0;
      }
      &:nth-child(2) {
        right: 2.5vh;
        top: 8vh;
      }
      &:nth-child(2) {
        right: 2.5vh;
        top: 8vh;
      }
      &:nth-child(3) {
        right: 11vh;
        bottom: 14.5vh;
      }
      &:nth-child(4) {
        left: 56.5vh;
        top: 18vh;
      }
      &:nth-child(5) {
        left: 3vh;
        top: 26vh;
      }
      &:nth-child(6) {
        left: 63vh;
        top: 2vh;
      }
    }
  }
}

@keyframes CLOUD-MOVE {
  0% {
    transform: translate(0);
  }
  33.33% {
    transform: translate(15vh);
  }
  66.66% {
    transform: translate(-15vh);
  }
  100% {
    transform: translate(0);
  }
}
</style>

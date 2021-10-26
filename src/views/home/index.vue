<template>
  <div class="home">
    <div class="lhz-header">
      <div class="lhz-header-left">
        <el-breadcrumb separator="|">
          <el-breadcrumb-item><img :src="require(`@/assets/img/home/xy.png`)" alt />雨  25℃ 2020-07-28 15:53</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
      <div class="lhz-header-center"><span>浏河镇农业面源污染智慧监管平台</span></div>
      <div class="lhz-header-right">
        <el-dropdown trigger="click">
          <span class="el-dropdown-link">
            <i class="el-icon-user el-icon--left"></i>张三 [农情管理部]<i
              class="el-icon-arrow-down el-icon--right"
            ></i>
          </span>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item><a href="/login">退出</a></el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </div>
    </div>
    <div class="home-map">
      <img
        v-for="(item, i) in imgData"
        :key="i"
        :src="require(`@/assets/img/home/${item.url}.png`)"
        :class="`animate__animated animate__zoomIn ${item.url}`"
        alt=""
        @click="jumpPage(`${item.url}`)"
      />
      <div class="home-cloud">
        <img
          v-for="(item, i) in cloudData"
          :key="i"
          :src="require(`@/assets/img/home/${item.url}.png`)"
          :class="`${item.url}`"
          alt=""
        />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Home",
  data() {
    return {
      imgData: [{ url: "jsnr" }, { url: "ssxg" }, { url: "xmgl" }],
      cloudData: [
        { url: "cloud-1" },
        { url: "cloud-2" },
        { url: "cloud-3" },
        { url: "cloud-4" },
        { url: "cloud-5" },
        { url: "cloud-6" },
      ],
    };
  },
  methods: {
    jumpPage(action) {
      switch (action) {
        case "xmgl":
          this.$router.push(`/projects`);
          break;

        default:
          break;
      }
    },
  },
};
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
    image: url(~@/assets/img/home/bg.png);
  }

  &-map {
    position: relative;
    width: 1260px;
    height: 700px;
    margin-top: 86px;
    background: {
      repeat: no-repeat;
      position: center;
      size: 100%;
      image: url(~@/assets/img/home/map.png);
    }
    & > img {
      position: absolute;
      cursor: pointer;
      z-index: 10;

      &:nth-child(1) {
        left: -97px;
        top: -20px;
      }
      &:nth-child(2) {
        right: -165px;
        top: 50px;
      }
      &:nth-child(3) {
        left: 75px;
        bottom: -5px;
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
        right: 25px;
        top: 80px;
      }
      &:nth-child(2) {
        right: 25px;
        top: 80px;
      }
      &:nth-child(3) {
        right: 110px;
        bottom: 145px;
      }
      &:nth-child(4) {
        left: 565px;
        top: 180px;
      }
      &:nth-child(5) {
        left: 30px;
        top: 260px;
      }
      &:nth-child(6) {
        left: 630px;
        top: 20px;
      }
    }
  }
}

@keyframes CLOUD-MOVE {
  0% {
    transform: translate(0);
  }
  33.33% {
    transform: translate(150px);
  }
  66.66% {
    transform: translate(-150px);
  }
  100% {
    transform: translate(0);
  }
}
</style>
<template>
  <div class="lhz-layout home">
    <el-container>
      <el-header class="lhz-header">
        <div class="el-header__left">
          <el-breadcrumb separator="|">
            <el-breadcrumb-item
              ><img :src="require(`@/assets/img/home/xy.png`)" alt />雨 25℃
              2020-07-28 15:53</el-breadcrumb-item
            >
          </el-breadcrumb>
        </div>
        <div class="el-header__center">
          <span>浏河镇农业面源污染智慧监管平台</span>
        </div>
        <div class="el-header__right">
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
      </el-header>
      <el-main>
        <div class="home-map">
          <img
            v-for="(item, i) in imgData"
            :key="i"
            :src="item.url"
            :class="`animate__animated animate__zoomIn ${item.url}`"
            alt=""
            @click="jumpPage(item.name)"
          />
          <div class="home-cloud">
            <img
              v-for="(item, i) in cloudData"
              :key="i"
              :src="item.url"
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
export default {
  name: "Home",
  data() {
    return {
      imgData: [
        { name: "jsnr", url: require(`@/assets/img/home/jsnr.png`) },
        { name: "ssxg", url: require(`@/assets/img/home/ssxg.png`) },
        { name: "xmgl", url: require(`@/assets/img/home/xmgl.png`) },
      ],
      cloudData: [
        { name: "cloud-1", url: require(`@/assets/img/home/cloud-1.png`) },
        { name: "cloud-2", url: require(`@/assets/img/home/cloud-2.png`) },
        { name: "cloud-3", url: require(`@/assets/img/home/cloud-3.png`) },
        { name: "cloud-4", url: require(`@/assets/img/home/cloud-4.png`) },
        { name: "cloud-5", url: require(`@/assets/img/home/cloud-5.png`) },
        { name: "cloud-6", url: require(`@/assets/img/home/cloud-6.png`) },
      ],
    };
  },
  methods: {
    jumpPage(action) {
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

  .el-header {
    height: 86px;
    background: {
      repeat: no-repeat;
      position: center;
      size: contain;
      image: url(~@/assets/img/home/header.png);
    }

    &__left {
      padding-left: 50px;
      padding-bottom: 35px;
    }
    &__right {
      padding-right: 50px;
      padding-bottom: 35px;
    }
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
      image: url(~@/assets/img/home/map.png);
    }
    & > img {
      position: absolute;
      cursor: pointer;
      z-index: 10;

      &:nth-child(1) {
        width: 56.7vh;
        height: 14.6vh;
        left: 50%;
        margin-left: -77vh;
        top: 2vh;
      }
      &:nth-child(2) {
        width: 57.7vh;
        height: 14.6vh;
        right: 50%;
        margin-right: -84vh;
        top: 12vh;
      }
      &:nth-child(3) {
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
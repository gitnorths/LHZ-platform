<template>
  <div class="home">
    <div class="home-map">
      <img src="~@/assets/img/home-jsnr.png" class="home-jsnr animate__animated animate__zoomIn" alt="" />
      <img src="~@/assets/img/home-ssxg.png" class="home-ssxg animate__animated animate__zoomIn" alt="" />
      <img src="~@/assets/img/home-xmgl.png" class="home-xmgl animate__animated animate__zoomIn" alt="" />
      <img
        src="~@/assets/img/home-cloud-1.png"
        class="home-cloud home-cloud-1 animate__animated animate__bounce"
        alt=""
      />
      <img
        src="~@/assets/img/home-cloud-2.png"
        class="home-cloud home-cloud-2"
        alt=""
      />
      <img
        src="~@/assets/img/home-cloud-3.png"
        class="home-cloud home-cloud-3"
        alt=""
      />
      <img
        src="~@/assets/img/home-cloud-4.png"
        class="home-cloud home-cloud-4"
        alt=""
      />
      <img
        src="~@/assets/img/home-cloud-5.png"
        class="home-cloud home-cloud-5"
        alt=""
      />
      <img
        src="~@/assets/img/home-cloud-6.png"
        class="home-cloud home-cloud-6"
        alt=""
      />
    </div>
  </div>
</template>
<script>
export default {
  name: "Home",
  data() {
    return {
      jsnrUrl: require(`@/assets/img/home-jsnr.png`),
      ssxgUrl: require(`@/assets/img/home-ssxg.png`),
      xmglUrl: require(`@/assets/img/home-xmgl.png`),
    };
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
    image: url(~@/assets/img/home-bg.png);
  }

  &-map {
    position: relative;
    width: 1260px;
    height: 700px;
    background: {
      repeat: no-repeat;
      position: center;
      size: 100%;
      image: url(~@/assets/img/home-map.png);
    }
  }

  &-jsnr,
  &-ssxg,
  &-xmgl {
    position: absolute;
    cursor: pointer;
    z-index: 10;
  }

  &-jsnr {
    left: -97px;
    top: -20px;
  }

  &-ssxg {
    right: -165px;
    top: 50px;
  }

  &-xmgl {
    left: 75px;
    bottom: -5px;
  }

  &-cloud {
    position: absolute;
    // animation-name: seamless-scrolling; // Q3
    animation-timing-function: linear; // 动画速度曲线，匀速
    animation-iteration-count: infinite; // 动画循环无限次播放
    animation-name: headShake;
    animation-duration: 1.5s;
    animation-fill-mode: both;

    &-1 {
      left: 0;
      top: 0;
    }
    &-2 {
      right: 25px;
      top: 80px;
    }
    &-3 {
      right: 110px;
      bottom: 145px;
    }
    &-4 {
      left: 565px;
      top: 180px;
    }
    &-5 {
      left: 30px;
      top: 260px;
    }
    &-6 {
      left: 630px;
      top: 20px;
    }
  }
}
</style>
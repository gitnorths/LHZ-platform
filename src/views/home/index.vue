<template>
  <div class="home">
    <div class="home-map">
      <img
        src="~@/assets/img/home-jsnr.png"
        class="home-jsnr animate__animated animate__zoomIn"
        alt=""
      />
      <img
        src="~@/assets/img/home-ssxg.png"
        class="home-ssxg animate__animated animate__zoomIn"
        alt=""
      />
      <img
        src="~@/assets/img/home-xmgl.png"
        class="home-xmgl animate__animated animate__zoomIn"
        alt=""
        @click="jumpPage('xmgl')"
      />
      <div class="home-cloud">
        <img src="~@/assets/img/home-cloud-1.png" class="home-cloud-1" alt="" />
        <img src="~@/assets/img/home-cloud-2.png" class="home-cloud-2" alt="" />
        <img src="~@/assets/img/home-cloud-3.png" class="home-cloud-3" alt="" />
        <img src="~@/assets/img/home-cloud-4.png" class="home-cloud-4" alt="" />
        <img src="~@/assets/img/home-cloud-5.png" class="home-cloud-5" alt="" />
        <img src="~@/assets/img/home-cloud-6.png" class="home-cloud-6" alt="" />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Home",
  data() {
    return {
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
    }

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
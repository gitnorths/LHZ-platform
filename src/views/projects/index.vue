<template>
  <div class="projects">
    <div class="projects-map">
      <img
        src="~@/assets/img/project1.png"
        class="home-jsnr animate__animated animate__zoomIn"
        alt=""
      />
      <img
        src="~@/assets/img/project2.png"
        class="home-ssxg animate__animated animate__zoomIn"
        alt=""
      />
      <img
        src="~@/assets/img/project3.png"
        class="home-xmgl animate__animated animate__zoomIn"
        alt=""
      />
    </div>
  </div>
</template>
<script>
export default {
  name: "Project",
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
.projects {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  background: {
    repeat: no-repeat;
    size: 100%;
    image: url(~@/assets/img/projects-bg.png);
  }

  &-map {
    position: relative;
    width: 1260px;
    height: 100%;
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
<template>
  <div class="construct-layout">
    <el-container>
      <Header></Header>
      <el-main>
        <router-view :key="routeKey"></router-view>
      </el-main>
    </el-container>
  </div>
</template>
<script>
import Header from "./Header.vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "Construct",
  components: {
    Header,
  },
  setup() {
    function routeKey() {
      return this.$route.fullPath;
    }
    return {
      routeKey,
    };
  },
});
</script>
<style lang="scss" scoped>
.construct-layout {
  width: 100vw;
  height: 100vh;
  background: {
    repeat: no-repeat;
    size: 100%;
    image: url(./../../assets/img/effect/bg.png);
  }

  .el-container {
    height: 100%;
    flex-direction: column;

    &::before {
      display: block;
      content: "";
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 10vh;
      background: linear-gradient(0deg, #054c4430 0%, #000000b8 50%);
      z-index: 1;
    }
  }
  .el-header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 8.6vh;
    z-index: 10;
    background: {
      repeat: no-repeat;
      size: 100%;
      image: url(./../../assets/img/construct/bg-header.png);
    }
  }
  .el-main {
    padding: 0;
  }
}
</style>
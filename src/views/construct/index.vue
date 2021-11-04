<template>
  <div class="effect-layout">
    <el-container>
      <Header></Header>
      <el-main>
        <router-view :key="routeKey"></router-view>
      </el-main>
    </el-container>
  </div>
</template>
<script>
import Header from "./Header";
export default {
  name: "Effect",
  components: {
    Header,
  },
  data() {
    return {};
  },
  computed: {
    routeKey() {
      return this.$route.fullPath;
    },
  },
};
</script>
<style lang="scss" scoped>
.effect-layout {
  width: 100vw;
  height: 100vh;
  background: {
    repeat: no-repeat;
    size: 100%;
    image: url(~@/assets/img/effect/bg.png);
  }

  .el-container {
    height: 100%;
    flex-direction: column;
  }
  .el-main {
    padding: 0;
  }
}
</style>
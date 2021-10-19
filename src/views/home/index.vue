<template>
  <div>
    <p>Home</p>
    <el-button type="primary" @click="toLogin">toLogin</el-button>
  </div>
</template>
<script>
import { useRouter } from "vue-router";
export default {
  setup() {
    const router = useRouter();
    const toLogin = () => {
      router.push({
        name: "login",
      });
    };
    return {
      toLogin,
    };
  },
};
</script>
<style lang="scss" scoped>
p {
  color: $main-color;
}
</style>
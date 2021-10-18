<template>
  <div>
    <p>Home</p>
    <button @click="toLogin">toLogin</button>
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
<style scoped>
</style>
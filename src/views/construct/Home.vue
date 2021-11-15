<template>
  <div class="construct-layout">
  </div>
</template>
<script>
export default {
  name: "ConstructHome",
  data() {
    return {};
  },
  methods: {
  },
  mounted() {
  },
};
</script>
<style lang="scss" scoped>
.construct-layout {
  width: 100vw;
  height: 100vh;
  background: {
    repeat: no-repeat;
    size: 100%;
    image: url(~@/assets/img/effect/bg.png);
  }

  #map {
    width: 100vw;
    height: 100vh;
  }
}
</style>
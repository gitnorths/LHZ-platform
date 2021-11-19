<template>
  <div class="construct-layout"></div>
</template>
<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "ConstructHome",
  setup() {
    return {};
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

  #map {
    width: 100vw;
    height: 100vh;
  }
}
</style>
<template>
  <el-header>
    <el-page-header
      icon="el-icon-s-home"
      title="首页"
      content="实施效果"
      @back="goHome"
    />
    <div class="el-header__menu">
      <div class="el-header__menu-item">
        <router-link
          v-for="(item, index) in meunData"
          :to="item.path"
          :key="index"
        >
          {{ item.name ? item.name : "" }}
        </router-link>
      </div>
    </div>
    <div class="el-header__right">
      <el-dropdown trigger="click">
        <span class="el-dropdown-link">
          <i class="el-icon-user el-icon--left"></i> 张三 [农情管理部]
          <i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item>
              <router-link to="/login">退出</router-link>
            </el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </el-header>
</template>
<script>
import { useRouter } from "vue-router";
import { defineComponent, reactive, ref } from "vue";

export default defineComponent({
  name: "EffectHeader",
  setup() {
    const router = useRouter();
    const activeIndex = ref("1");
    const activeIndex2 = ref("1");
    const meunData = reactive([
      {
        name: "首页",
        path: "/effect",
      },
      {
        name: "农田面源污染防治",
        path: "/effect/farmland",
      },
      {
        name: "畜禽养殖污染物治理工程",
        path: "/effect/farming",
      },
      {
        name: "地表径流净化利用工程",
        path: "/effect/purify",
      },
      {
        name: "配套工程",
        path: "/effect/setting",
      },
    ]);

    // 返回主页
    const goHome = () => {
      router.push(`/`);
    };

    return {
      goHome,
      meunData,
      activeIndex,
      activeIndex2,
    };
  },
});
</script>
<style lang="scss" scoped>
.el-header {
  height: 7vh;
  background: {
    repeat: no-repeat;
    size: 100% 100%;
    image: url(./../../assets/img/effect/bg-header.png);
  }

  &__menu {
    flex: 0 0 52.08vw;

    &-item {
      display: flex;
      align-items: center;
      height: 6.8vh;
      line-height: 6.8vh;

      & > a {
        font-size: 1.6vh;
        color: #fff;
        margin: 0 4vh;
        border-bottom: 2px solid transparent;

        &.router-link-exact-active {
          font-weight: bold;
          color: #07d5c0;
          border-color: #07d5c0;
        }
      }
    }
  }

  &__right {
    padding-top: 1vh;
  }
}
</style>
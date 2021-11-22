<template>
  <el-header class="lhz-header">
    <div class="el-header__left">
      <el-breadcrumb separator="|">
        <el-breadcrumb-item>
          <a href="/"> <i class="el-icon-s-home el-icon--left"></i>首页</a>
        </el-breadcrumb-item>
        <el-breadcrumb-item>
          <img :src="getImageUrl('home', weatherImg)" alt /> 雨 25℃ 2020-07-28 15:53
        </el-breadcrumb-item>
      </el-breadcrumb>
      <div class="el-header__menu">
        <router-link
          v-for="(item, index) in meunLeft"
          :to="item.path"
          :key="index"
        >
          {{ item.name ? item.name : "" }}
        </router-link>
      </div>
    </div>
    <div class="el-header__center"><span>建设内容</span></div>
    <div class="el-header__right">
      <div class="el-header__menu">
        <router-link
          v-for="(item, index) in meunRight"
          :to="item.path"
          :key="index"
        >
          {{ item.name ? item.name : "" }}
        </router-link>
      </div>
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
import { getImageUrl } from "@/utils";
import { defineComponent, reactive, ref } from "vue";

export default defineComponent({
  name: "Header",
  setup() {
    const weatherImg = ref("xy");
    const activeIndex = ref("1");
    const activeIndex2 = ref("1");
    const meunLeft = reactive([
      {
        name: "首页",
        path: "/construct",
      },
      {
        name: "自动监测",
        path: "/construct/auto-monitor",
      },
    ]);

    const meunRight = reactive([
      {
        name: "水质检测",
        path: "/construct/water-detect",
      },
      {
        name: "面源污染评价",
        path: "/construct/pollution-assessment",
      },
    ]);

    return {
      meunLeft,
      meunRight,
      weatherImg,
      getImageUrl,
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
    image: url(./../../assets/img/construct/bg-header.png);
  }

  &__center {
    flex: 0 0 480px;
  }
  &__left {
    padding-left: 3vh;
  }

  &__right {
    padding-right: 3vh;
  }

  &__left,
  &__right {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 100%;
    padding-bottom: 3vh;
  }

  &__menu {
    display: flex;
    z-index: 11;

    & > a {
      display: block;
      width: 14vh;
      height: 3.8vh;
      line-height: 3.8vh;
      text-align: center;
      font-size: 1.6vh;
      color: #2a7a7a;
      background: {
        repeat: no-repeat;
        size: 100% 100%;
        image: url(./../../assets/img/construct/bg-menu.png);
      }

      &:hover {
        color: #ffffff;
      }

      &.router-link-exact-active {
        color: #ffffff;
        background-image: url(./../../assets/img/construct/bg-menu-active.png);
      }
    }
  }
}
</style>
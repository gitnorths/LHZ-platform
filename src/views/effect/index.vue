<template>
  <div class="effect-layout">
    <el-container>
      <el-header>
        <el-page-header
          icon="el-icon-s-home"
          title="首页"
          content=""
          @back="goHome"
        />
        <!-- 实施效果 -->
        <el-menu
          :default-active="activeIndex"
          class="el-menu-demo"
          mode="horizontal"
          @select="handleSelect"
        >
          <el-menu-item index="1">首页</el-menu-item>
          <el-menu-item index="2">农田面源污染防治</el-menu-item>
          <el-menu-item index="3">养殖污染物治理</el-menu-item>
          <el-menu-item index="4">配套工程</el-menu-item>
        </el-menu>
        <div class="el-header__right">
          <el-dropdown trigger="click">
            <span class="el-dropdown-link">
              <i class="el-icon-user el-icon--left"></i>张三 [农情管理部]<i
                class="el-icon-arrow-down el-icon--right"
              ></i>
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
      <el-main>
        <el-row :gutter="20">
          <el-col :span="4">
            <div class="lhz-effect_title">农田面源污染防治</div>
          </el-col>
          <el-col :span="16"><div class="grid-content bg-purple"></div></el-col>
          <el-col :span="4"><div class="grid-content bg-purple"></div></el-col>
        </el-row>
      </el-main>
    </el-container>
  </div>
</template>
<script>
export default {
  name: "Effect",
  data() {
    return {
      activeIndex: "1",
      activeIndex2: "1",
    };
  },
  methods: {
    goHome() {
      this.$router.push(`/home`);
    },
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
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
  }
  .el-header {
    height: 70px;
    background: {
      repeat: no-repeat;
      size: 100%;
      image: url(~@/assets/img/effect/bg-header.png);
    }

    &__right {
      padding-top: 10px;
    }
  }
  .el-main {
    padding: 20px;

    .lhz-effect {
      &_title {
        height: 61px;
        line-height: 61px;
        padding: 0 24px;
        font-size: 24px;
        // font-weight: bold;
        font-family: "PingFang-SC-Bold";
        color: #fff;
        // background: {
        //   repeat: no-repeat;
        //   size: 100% 100%;
        //   image: url(~@/assets/img/effect/effect-title.png);
        // }

        border-image-source: url(~@/assets/img/effect/effect-title.png);
        border-image-repeat: stretch stretch;
        border-image-width: 50px 150px;
        border-image-slice: 50 150 fill;
      }
    }
  }
}
</style>
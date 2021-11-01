<template>
  <el-header>
    <el-page-header
      icon="el-icon-s-home"
      title="首页"
      content="实施效果"
      @back="goHome"
    />
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
</template>
<script>
export default {
  name: 'Header',
  data(){
    return {
      activeIndex: "1",
      activeIndex2: "1",
    }
  }
};
</script>
<style lang="scss" scoped>

  .el-header {
    height: 7vh;
    background: {
      repeat: no-repeat;
      size: 100% 100%;
      image: url(~@/assets/img/effect/bg-header.png);
    }

    &__right {
      padding-top: 1vh;
    }
  }
</style>
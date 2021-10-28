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
      <el-main class="effect-main">
        <el-row :gutter="20">
          <el-col :span="5">
            <div class="lhz-effect_title">农田面源污染防治</div>
            <el-card class="border-r" header="农田排水汇流湿地工程">
              <el-row>
                <el-col :span="12">
                  <p class="font14 color-white ta-center mb12">
                    <font class="font30">30</font>个
                  </p>
                  <p class="font14 color-green ta-center">
                    农田排水促沉净化装置
                  </p>
                </el-col>
                <el-col :span="12">
                  <p class="font14 color-white ta-center mb12">
                    <font class="font30">400</font>㎡
                  </p>
                  <p class="font14 color-green ta-center">生态填料与基质</p>
                </el-col>
              </el-row>
            </el-card>
            <el-card header="农田排水汇流湿地工程">
              <el-row :gutter="8">
                <el-col :span="12" v-for="(item, i) in effectData1" :key="i">
                  <div class="effect-div-bg flex">
                    <el-image
                      style="
                        width: 36px;
                        height: 36px;
                        margin-right: 8px;
                      "
                      :src="require(`@/assets/img/effect/${item.url}`)"
                      :fit="fit"
                    ></el-image>
                    <div class="flex1">
                      <p class="font14 color-blue">{{ item.name }}</p>
                      <p class="font14 color-white">
                        <font class="font20">{{ item.text }}</font
                        >{{ item.unit }}
                      </p>
                    </div>
                  </div>
                </el-col>
              </el-row>
            </el-card>
            <el-card header="农田排水汇流湿地工程">
              <el-row :gutter="8">
                <el-col :span="24" v-for="(item, i) in effectData2" :key="i">
                  <div class="flex align-items justify-content-center">
                    <el-image
                      style="
                        width: 112px;
                        height: 90px;
                        margin-right: 8px;
                      "
                      :src="require(`@/assets/img/effect/${item.url}`)"
                      :fit="fit"
                    ></el-image>
                    <div>
                      <p class="font24 color-blue ta-center">{{ item.name }}</p>
                      <p class="font16 color-white ta-center">
                        <font class="font16">{{ item.text }}</font
                        >{{ item.unit }}
                      </p>
                    </div>
                  </div>
                </el-col>
              </el-row>
            </el-card>
          </el-col>
          <el-col :span="14"><div class="grid-content bg-purple"></div></el-col>
          <el-col :span="5"><div class="grid-content bg-purple"></div></el-col>
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
      effectData1: [
        {
          name: "态塘",
          text: "8",
          color: "color-blue",
          url: "effect-1-1.png",
          unit: "个",
        },
        {
          name: "挺水植物",
          text: "1547",
          color: "color-yellow",
          url: "effect-1-2.png",
          unit: "㎡",
        },
        {
          name: "湿地清淤",
          text: "28280",
          color: "color-green",
          url: "effect-1-3.png",
          unit: "m³",
        },
        {
          name: "湿地清淤",
          text: "28280",
          color: "color-pink",
          url: "effect-1-4.png",
          unit: "m³",
        },
        {
          name: "净化塘边坡清杂",
          text: "1512",
          color: "color-purple",
          url: "effect-1-5.png",
          unit: "㎡",
        },
      ],
      effectData2: [
        {
          name: "10000株",
          text: "栽植垂柳、红叶石楠 ",
          color: "color-green",
          url: "effect-2-1.png",
          unit: "",
        },
      ],
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
        background: {
          repeat: no-repeat;
          size: 100% 100%;
          image: url(~@/assets/img/effect/effect-title.png);
        }
      }
    }

    .effect-div-bg {
      border-image: linear-gradient(0deg, #1aa697, #2a7a7a) 10 10;
      background: linear-gradient(
        90deg,
        #2a7a7a 0%,
        rgba(42, 122, 122, 0) 100%
      );
      opacity: 0.8;
      border-radius: 23px;
      margin-bottom: 8px;
      padding: 5px;
    }
  }
}
</style>
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
            <div class="lhz-effect_title mb10">农田面源污染防治</div>
            <el-card
              header="农田排水口污染物拦截工程"
              class="mb10"
              style="height: 12vh"
            >
              <div class="flex justify-content-around border-r flex1">
                <div>
                  <p class="font14 color-white ta-center mb12">
                    <font class="font30">30</font>个
                  </p>
                  <p class="font14 color-green ta-center">
                    农田排水促沉净化装置
                  </p>
                </div>
                <div>
                  <p class="font14 color-white ta-center mb12">
                    <font class="font30">400</font>㎡
                  </p>
                  <p class="font14 color-green ta-center">生态填料与基质</p>
                </div>
              </div>
            </el-card>
            <el-card
              header="农田排水汇流湿地工程"
              class="mb10"
              style="height: 17vh"
            >
              <div
                class="flex"
                style="
                  flex-direction: row;
                  flex-wrap: wrap;
                  justify-content: space-around;
                "
              >
                <div
                  v-for="(item, i) in effectData1"
                  :key="i"
                  style="padding-top: 4px; padding-bottom: 4px"
                >
                  <div class="effect-div-bg flex">
                    <el-image
                      style="width: 36px; height: 36px; margin-right: 8px"
                      :src="require(`@/assets/img/effect/${item.url}`)"
                    ></el-image>
                    <div class="flex1">
                      <p class="font14 color-blue">{{ item.name }}</p>
                      <p class="font14 color-white">
                        <font class="font20">{{ item.text }}</font
                        >{{ item.unit }}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </el-card>
            <el-card
              header="建立生态隔离带"
              class="mb10"
              style="height: 12.4vh"
            >
              <el-row :gutter="8">
                <el-col :span="24" v-for="(item, i) in effectData2" :key="i">
                  <div class="flex align-items justify-content-center">
                    <el-image
                      style="height: 8vh; margin-right: 8px"
                      :src="require(`@/assets/img/effect/${item.url}`)"
                    ></el-image>
                    <div>
                      <p class="font24 color-blue ta-center mb12">
                        {{ item.name }}
                      </p>
                      <p class="font16 color-white ta-center">
                        <font class="font16">{{ item.text }}</font
                        >{{ item.unit }}
                      </p>
                    </div>
                  </div>
                </el-col>
              </el-row>
            </el-card>
            <el-card
              header="秸秆收集利用工程"
              class="mb10"
              style="height: 14vh"
            >
              <el-row class="border-rl">
                <el-col :span="12">
                  <div class="flex align-items justify-content-center">
                    <p class="font14 color-white ta-center mr20">秸秆还田机</p>
                    <p class="font12 color-green ta-center">
                      <font class="font24">12</font>台
                    </p>
                  </div>
                </el-col>
                <el-col :span="12">
                  <div class="flex align-items justify-content-center">
                    <p class="font14 color-white ta-center mr20">秸秆粉碎机</p>
                    <p class="font12 color-green ta-center">
                      <font class="font24">12</font>台
                    </p>
                  </div>
                </el-col>
                <el-col :span="12">
                  <div class="flex align-items justify-content-center">
                    <p class="font14 color-white ta-center mr20">大型拖拉机</p>
                    <p class="font12 color-green ta-center">
                      <font class="font24">12</font>台
                    </p>
                  </div>
                </el-col>
                <el-col :span="12">
                  <div class="flex align-items justify-content-center">
                    <p class="font14 color-white ta-center mr20">
                      秸秆收储中心
                    </p>
                    <p class="font12 color-green ta-center">
                      <font class="font24">1</font>台
                    </p>
                  </div>
                </el-col>
              </el-row>
            </el-card>
            <el-card
              header="化肥农药减量施用"
              class="mb10"
              style="height: 13vh"
            >
              <div class="flex justify-content-around border-r flex1">
                <div>
                  <p class="font14 color-green ta-center mb12">
                    <font class="font24">300</font>亩
                  </p>
                  <p class="font14 color-white ta-center">
                    复垦废弃<br />种植田块
                  </p>
                </div>
                <div>
                  <p class="font14 color-blue ta-center mb12">
                    <font class="font24">500</font>亩
                  </p>
                  <p class="font14 color-white ta-center">轮作休耕</p>
                </div>
                <div>
                  <p class="font14 color-yellow ta-center mb12">
                    <font class="font24">12</font>台
                  </p>
                  <p class="font14 color-white ta-center">自走植保机</p>
                </div>
                <div>
                  <p class="font14 color-purple ta-center mb12">
                    <font class="font24">12</font>台
                  </p>
                  <p class="font14 color-white ta-center">防控无人机</p>
                </div>
              </div>
            </el-card>
            <el-card header="节水灌溉工程" style="height: 8vh">
              <el-row>
                <el-col :span="24">
                  <div class="flex align-items justify-content-center">
                    <p class="font14 color-white ta-center mr20">明灌改暗灌</p>
                    <p class="font12 color-green ta-center">
                      <font class="font24">700</font>亩
                    </p>
                  </div>
                </el-col>
              </el-row>
            </el-card>
          </el-col>
          <el-col :span="14"><div class="grid-content bg-purple"></div></el-col>
          <el-col :span="5">
            <div class="lhz-effect_title mb10">畜禽养殖污染物治理</div>
            <div class="flex align-items justify-content-between mb10 border-r" style="height: 18vh;">
              <div v-for="(item, i) in effectData3" :key="i" style="" >
                <el-image
                  style="height: 8.4vh"
                  :src="require(`@/assets/img/effect/${item.url}`)"
                ></el-image>
                <p class="font14 color-green ta-center mb12">
                  <font class="font24">{{ item.text }}</font
                  >{{ item.unit }}
                </p>
                <p class="font14 color-white ta-center">{{ item.name }}</p>
              </div>
            </div>
            <div class="lhz-effect_title mb10">地表径流净化利用</div>
            <div class="lhz-effect_title mb10">地表径流净化利用</div>
          </el-col>
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
      effectData3: [
        {
          name: "干粪运输车",
          text: "1",
          color: "color-green",
          url: "effect-3-1.png",
          unit: "台",
        },
        {
          name: "有机肥施肥机",
          text: "3",
          color: "color-green",
          url: "effect-3-2.png",
          unit: "台",
        },
        {
          name: "吸粪车",
          text: "2",
          color: "color-green",
          url: "effect-3-3.png",
          unit: "台",
        },
      ],
      effectData4: [
        {
          value: "25.31",
          text: "清淤清杂",
          color: "color-white",
          url: "effect-4-1.png",
          unit: "万m³",
        },
        {
          value: "14360",
          text: "栽植挺水植物",
          color: "color-white",
          url: "effect-4-2.png",
          unit: "㎡",
        },
        {
          value: "2393",
          text: "栽植灌木",
          color: "color-white",
          url: "effect-4-3.png",
          unit: "株",
        },
        {
          value: "16974",
          text: "杉木桩护岸",
          color: "color-white",
          url: "effect-4-4.png",
          unit: "m",
        },
      ],
      effectData5: [
        {
          value: "19200",
          text: "新建生态道路",
          color: "color-green",
          unit: "㎡",
        },
        {
          value: "2",
          text: "机耕桥",
          color: "color-green",
          unit: "座",
        },
        {
          value: "3",
          text: "涵洞",
          color: "color-yellow",
          unit: "座",
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
    height: 7vh;
    background: {
      repeat: no-repeat;
      size: 100% 100%;
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
        height: 6vh;
        line-height: 6vh;
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
      border-image: linear-gradient(0deg, #1aa697, #2a7a7a) 30 30;
      background: linear-gradient(
        90deg,
        #2a7a7a 0%,
        rgba(42, 122, 122, 0) 100%
      );
      opacity: 0.8;
      border-radius: 30px 0 0 30px;
      padding: 3px 5px;
    }
  }
}
</style>
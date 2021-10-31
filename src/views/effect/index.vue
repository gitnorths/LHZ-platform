<template>
  <div class="effect-layout">
    <el-container>
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
                  v-for="(item, i) in effectData_lc"
                  :key="i"
                  style="padding-top: 0.4vh; padding-bottom: 0.4vh"
                >
                  <div class="effect-div-bg flex align-items">
                    <el-image
                      style="height: 3.6vh; margin-right: 0.8vh"
                      :src="`${item.url}`"
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
                <el-col :span="24" v-for="(item, i) in effectData_lb" :key="i">
                  <div class="flex align-items justify-content-center">
                    <el-image
                      style="height: 8vh; margin-right: 0.8vh"
                      :src="`${item.url}`"
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
          <el-col :span="14">
            <div
              class="
                effect__center
                flex
                align-items
                justify-content-between justify-content-center
              "
            >
              <div v-for="(item, i) in effectData_center" :key="i" style="">
                <el-image
                  style="height: 13vh"
                  :src="`${item.url}`"
                  class="mb10"
                ></el-image>
                <p class="font24 color-white ta-center">{{ item.name }}</p>
              </div>
            </div>
          </el-col>
          <el-col :span="5">
            <div class="lhz-effect_title mb10">畜禽养殖污染物治理</div>
            <div
              class="flex align-items justify-content-between mb10 border-r"
              style="height: 18vh"
            >
              <div v-for="(item, i) in effectData_rt" :key="i" style="">
                <el-image style="height: 8.4vh" :src="`${item.url}`"></el-image>
                <p class="font14 color-green ta-center mb12">
                  <font class="font24"> {{ item.text }} </font>{{ item.unit }}
                </p>
                <p class="font14 color-white ta-center">{{ item.name }}</p>
              </div>
            </div>
            <div class="lhz-effect_title mb10">地表径流净化利用</div>
            <el-row
              :gutter="10"
              class="flex align-items justify-content-between"
            >
              <el-col :span="12" v-for="(item, i) in effectData_rc" :key="i">
                <div
                  class="
                    flex
                    justify-content-center
                    align-items
                    flex-column
                    effect_rc
                  "
                  style="padding-top: 1.5vh; padding-bottom: 1.5vh"
                >
                  <p
                    :class="`flex align-items justify-content-center font14 ta-center mb12 ${item.color}`"
                    :style="{ backgroundImage: `url(${item.url})` }"
                  >
                    <font class="font30">{{ item.value }} </font>
                  </p>
                  <p class="font14 color-white ta-center">
                    {{ item.text }}（{{ item.unit }}）
                  </p>
                </div>
              </el-col>
            </el-row>
            <div class="lhz-effect_title mb10">地表径流净化利用</div>
            <el-row
              :gutter="10"
              class="flex align-items justify-content-between"
            >
              <el-col :span="8" v-for="(item, i) in effectData_rb" :key="i">
                <div
                  class="
                    flex
                    justify-content-center
                    align-items
                    flex-column
                    effect_rb
                  "
                >
                  <p :class="`font14 ta-center mb12 ${item.color}`">
                    <font class="font30">{{ item.value }} </font>
                    {{ item.unit }}
                  </p>
                  <p class="font14 color-white ta-center">{{ item.text }}</p>
                </div>
              </el-col>
            </el-row>
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
      effectData_lc: [
        {
          name: "态塘",
          text: "8",
          color: "color-blue",
          url: require(`@/assets/img/effect/effect-1-1.png`),
          unit: "个",
        },
        {
          name: "挺水植物",
          text: "1547",
          color: "color-yellow",
          url: require(`@/assets/img/effect/effect-1-2.png`),
          unit: "㎡",
        },
        {
          name: "湿地清淤",
          text: "28280",
          color: "color-green",
          url: require(`@/assets/img/effect/effect-1-3.png`),
          unit: "m³",
        },
        {
          name: "湿地清淤",
          text: "28280",
          color: "color-pink",
          url: require(`@/assets/img/effect/effect-1-4.png`),
          unit: "m³",
        },
        {
          name: "净化塘边坡清杂",
          text: "1512",
          color: "color-purple",
          url: require(`@/assets/img/effect/effect-1-5.png`),
          unit: "㎡",
        },
      ],
      effectData_lb: [
        {
          name: "10000株",
          text: "栽植垂柳、红叶石楠 ",
          color: "color-green",
          url: require(`@/assets/img/effect/effect-2-1.png`),
          unit: "",
        },
      ],
      effectData_rt: [
        {
          name: "干粪运输车",
          text: "1",
          color: "color-green",
          url: require(`@/assets/img/effect/effect-3-1.png`),
          unit: "台",
        },
        {
          name: "有机肥施肥机",
          text: "3",
          color: "color-green",
          url: require(`@/assets/img/effect/effect-3-2.png`),
          unit: "台",
        },
        {
          name: "吸粪车",
          text: "2",
          color: "color-green",
          url: require(`@/assets/img/effect/effect-3-3.png`),
          unit: "台",
        },
      ],
      effectData_rc: [
        {
          value: "25.31",
          text: "清淤清杂",
          color: "color-white",
          url: require(`@/assets/img/effect/effect-4-1.png`),
          unit: "万m³",
        },
        {
          value: "14360",
          text: "栽植挺水植物",
          color: "color-white",
          url: require(`@/assets/img/effect/effect-4-2.png`),
          unit: "㎡",
        },
        {
          value: "2393",
          text: "栽植灌木",
          color: "color-white",
          url: require(`@/assets/img/effect/effect-4-3.png`),
          unit: "株",
        },
        {
          value: "16974",
          text: "杉木桩护岸",
          color: "color-white",
          url: require(`@/assets/img/effect/effect-4-4.png`),
          unit: "m",
        },
      ],
      effectData_rb: [
        {
          value: "19200",
          text: "新建生态道路",
          color: "color-blue",
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
      effectData_center: [
        {
          name: "养殖污染物治理",
          url: require(`@/assets/img/effect/effect-center-1.png`),
        },
        {
          name: "农田面源污染防治",
          url: require(`@/assets/img/effect/effect-center-2.png`),
        },
        {
          name: "地表径流污水净化",
          url: require(`@/assets/img/effect/effect-center-3.png`),
        },
        {
          name: "配套工程",
          url: require(`@/assets/img/effect/effect-center-4.png`),
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
      padding-top: 1vh;
    }
  }
  .el-main {
    padding: 2vh;

    .lhz-effect {
      &_title {
        height: 6vh;
        line-height: 6vh;
        padding: 0 2.4vh;
        font-size: 2.4vh;
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

    .effect {
      &-div-bg {
        border-image: linear-gradient(0deg, #1aa697, #2a7a7a) 30 30;
        background: linear-gradient(
          90deg,
          #2a7a7a 0%,
          rgba(42, 122, 122, 0) 100%
        );
        opacity: 0.8;
        border-radius: 3vh 0 0 3vh;
        padding: 0.3vh 0.5vh;
      }

      &__center {
        position: relative;
        width: 95vh;
        height: 85vh;
        margin: 3.4vh auto 0;
        cursor: pointer;
        background: {
          repeat: no-repeat;
          size: contain;
          position: center;
          image: url(~@/assets/img/effect/effect-center-bg.png);
        }

        & > div {
          text-align: center;
          margin-bottom: 150px;

          &:nth-child(2),
          &:nth-child(3) {
            align-self: flex-start;
          }

          &:nth-child(2) {
            margin-right: 100px;
          }

          &:nth-child(3) {
            margin-left: 100px;
          }
        }
      }

      &_rc {
        p {
          &:first-child {
            width: 12vh;
            height: 12vh;
            background: {
              repeat: no-repeat;
              size: 100% 100%;
            }
          }
        }
      }

      &_rb {
        width: 100%;
        height: 13vh;
        background: {
          repeat: no-repeat;
          size: 100% 100%;
          image: url(~@/assets/img/effect/effect-rb.png);
        }
      }
    }
  }
}
</style>
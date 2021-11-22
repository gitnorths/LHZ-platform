<template>
  <div style="padding: 2vh">
    <el-row :gutter="20" class="effect-main">
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
              <p class="font14 color-green ta-center">农田排水促沉净化装置</p>
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
        <el-card header="建立生态隔离带" class="mb10" style="height: 12.4vh">
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
        <el-card header="秸秆收集利用工程" class="mb10" style="height: 14vh">
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
                <p class="font14 color-white ta-center mr20">秸秆收储中心</p>
                <p class="font12 color-green ta-center">
                  <font class="font24">1</font>台
                </p>
              </div>
            </el-col>
          </el-row>
        </el-card>
        <el-card header="化肥农药减量施用" class="mb10" style="height: 13vh">
          <div class="flex justify-content-around border-r flex1">
            <div>
              <p class="font14 color-green ta-center mb12">
                <font class="font24">300</font>亩
              </p>
              <p class="font14 color-white ta-center">复垦废弃<br />种植田块</p>
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
          <router-link
            v-for="(item, index) in effectData_center"
            :to="item.path"
            :key="index"
          >
            <el-image
              style="height: 13vh"
              :src="`${item.url}`"
              class="mb10"
            ></el-image>
            <p class="font24 color-white ta-center">{{ item.name }}</p>
          </router-link>
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
          class="flex align-items align-content-around justify-content-between"
          style="height: 36vh"
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
        <div class="lhz-effect_title mb10">配套工程</div>
        <el-row :gutter="10" class="flex align-items justify-content-between">
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
  </div>
</template>
<script>
import { getImageUrl } from "@/utils";
import { defineComponent, reactive } from "vue";

export default defineComponent({
  name: "EffectHome",
  setup() {
    const effectData_lc = reactive([
      {
        name: "态塘",
        text: "8",
        color: "color-blue",
        url: getImageUrl("effect", "effect-1-1"),
        unit: "个",
      },
      {
        name: "挺水植物",
        text: "1547",
        color: "color-yellow",
        url: getImageUrl("effect", "effect-1-2"),
        unit: "㎡",
      },
      {
        name: "湿地清淤",
        text: "28280",
        color: "color-green",
        url: getImageUrl("effect", "effect-1-3"),
        unit: "m³",
      },
      {
        name: "湿地清淤",
        text: "28280",
        color: "color-pink",
        url: getImageUrl("effect", "effect-1-4"),
        unit: "m³",
      },
      {
        name: "净化塘边坡清杂",
        text: "1512",
        color: "color-purple",
        url: getImageUrl("effect", "effect-1-5"),
        unit: "㎡",
      },
    ]);
    const effectData_lb = reactive([
      {
        name: "10000株",
        text: "栽植垂柳、红叶石楠 ",
        color: "color-green",
        url: getImageUrl("effect", "effect-2-1"),
        unit: "",
      },
    ]);
    const effectData_rt = reactive([
      {
        name: "干粪运输车",
        text: "1",
        color: "color-green",
        url: getImageUrl("effect", "effect-3-1"),
        unit: "台",
      },
      {
        name: "有机肥施肥机",
        text: "3",
        color: "color-green",
        url: getImageUrl("effect", "effect-3-2"),
        unit: "台",
      },
      {
        name: "吸粪车",
        text: "2",
        color: "color-green",
        url: getImageUrl("effect", "effect-3-3"),
        unit: "台",
      },
    ]);
    const effectData_rc = reactive([
      {
        value: "25.31",
        text: "清淤清杂",
        color: "color-white",
        url: getImageUrl("effect", "effect-4-1"),
        unit: "万m³",
      },
      {
        value: "14360",
        text: "栽植挺水植物",
        color: "color-white",
        url: getImageUrl("effect", "effect-4-2"),
        unit: "㎡",
      },
      {
        value: "2393",
        text: "栽植灌木",
        color: "color-white",
        url: getImageUrl("effect", "effect-4-3"),
        unit: "株",
      },
      {
        value: "16974",
        text: "杉木桩护岸",
        color: "color-white",
        url: getImageUrl("effect", "effect-4-4"),
        unit: "m",
      },
    ]);
    const effectData_rb = reactive([
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
    ]);
    const effectData_center = reactive([
      {
        name: "养殖污染物治理",
        url: getImageUrl("effect", "effect-center-1"),
        path: "/effect/farming",
      },
      {
        name: "农田面源污染防治",
        url: getImageUrl("effect", "effect-center-2"),
        path: "/effect/farmland",
      },
      {
        name: "地表径流污水净化",
        url: getImageUrl("effect", "effect-center-3"),
        path: "/effect/purify",
      },
      {
        name: "配套工程",
        url: getImageUrl("effect", "effect-center-4"),
        path: "/effect/setting",
      },
    ]);
    return {
      effectData_lc,
      effectData_lb,
      effectData_rt,
      effectData_rc,
      effectData_rb,
      effectData_center,
    };
  },
});
</script>
<style lang="scss" scoped>
.lhz-effect {
  &_title {
    height: 6vh;
    line-height: 6vh;
    padding: 0 2.4vh;
    font-size: 2.4vh;
    // font-weight: bold;
    text-align: left;
    font-family: "PingFang-SC-Bold";
    color: #fff;
    background: {
      repeat: no-repeat;
      size: 100% 100%;
      image: url(./../../assets/img/effect/effect-title.png);
    }
  }
}

.effect {
  &-div-bg {
    border-image: linear-gradient(0deg, #1aa697, #2a7a7a) 30 30;
    background: linear-gradient(90deg, #2a7a7a 0%, rgba(42, 122, 122, 0) 100%);
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
      image: url(./../../assets/img/effect/effect-center-bg.png);
    }

    .el-image {
      animation: 50s linear infinite rotateCenter;
    }

    & > a {
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
      image: url(./../../assets/img/effect/effect-rb.png);
    }
  }
}
@keyframes rotateCenter {
  0% {
    transform: rotate(0);
  }

  100% {
    transform: rotate(1turn);
  }
}
</style>
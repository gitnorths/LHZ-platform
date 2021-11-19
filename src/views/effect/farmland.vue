<template>
  <div class="f-container">
    <div class="f-header">
      <el-button
        type="primary"
        v-for="(item, i) in fData"
        :key="i"
        :class="i === active ? 'active' : ''"
        @click="onClick(i)"
        >{{ item.name }}</el-button
      >
    </div>
    <div class="f-main">
      <div class="f-row">
        <div class="f-col f-left">
          <div class="f-card">
            <div class="f-card-header b-bot">{{ title }}</div>
            <div class="f-card-body" style="justify-content: space-around">
              <p>{{ text }}</p>
              <el-image :src="`${url}`"></el-image>
            </div>
          </div>
        </div>
        <div class="f-col f-center">
          <div class="f-card">
            <div class="f-card-header b-header">
              <span class="header-text">照片名称</span>
            </div>
            <div class="f-card-body">
              <div class="bannerBox">
                <div class="swiper-container gallery-top">
                  <div class="swiper-wrapper">
                    <div
                      class="swiper-slide"
                      v-for="(item, index) of bigImg"
                      :key="index"
                    >
                      <img class="img" :src="item" />
                    </div>
                  </div>
                  <div class="swiper-button-next swiper-button-white">
                    <i class="el-icon-arrow-right"></i>
                  </div>
                  <div class="swiper-button-prev swiper-button-white">
                    <i class="el-icon-arrow-left"></i>
                  </div>
                </div>
                <div style="height: 15px; width: 400px"></div>
                <div class="swiper-container gallery-thumbs">
                  <div class="swiper-wrapper">
                    <div
                      class="swiper-slide swiper-bottom"
                      v-for="(item, index) of bigImg"
                      :key="index"
                    >
                      <img class="img" :src="item" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="f-col f-right">
          <div class="f-card" v-if="active === 0">
            <div
              style="justify-content: center"
              v-for="(item, i) in rData"
              :class="`f-card-body ${i === 0 ? 'b-bot-dashed' : ''}`"
              :key="i"
            >
              <el-image class="mb30" :src="`${item.url}`"></el-image>
              <p class="font24">
                <font class="font40">{{ item.value }}</font
                >{{ item.unit }}
              </p>
              <p class="font24 color-blue">{{ item.name }}</p>
            </div>
          </div>
          <div class="f-card" v-else-if="active === 1">
            <div class="f-card-body">
              <div v-for="(item, i) in rData" class="f-item2" :key="i">
                <p :class="`font20 ${item.color}`">
                  <el-image
                    class="mr10"
                    style="height: 8vh"
                    :src="`${item.url}`"
                  ></el-image>
                  {{ item.name }}
                </p>
                <p class="font16">
                  <font class="font30">{{ item.value }}</font
                  >{{ item.unit }}
                </p>
              </div>
            </div>
          </div>
          <div class="f-card" v-else-if="active === 2">
            <div
              style="justify-content: center"
              v-for="(item, i) in rData"
              :class="`f-card-body ${i === 0 ? 'b-bot-dashed' : ''}`"
              :key="i"
            >
              <el-image :src="`${item.url}`"></el-image>
              <p :class="`font20 ${item.color}`">{{ item.name }}</p>
            </div>
          </div>
          <div class="f-card" v-else-if="active === 3">
            <div class="f-card-body" style="padding: 0">
              <div class="f-item3">
                <div v-for="(item, i) in rData" :key="i">
                  <p>{{ item.value }}</p>
                  <p :class="`font16 ${item.color}`">
                    <font class="font24">{{ item.name }}</font
                    >({{ item.unit }})
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="f-card" v-else-if="active === 4">
            <div class="f-card-body f-item4" style="padding: 0">
              <div v-for="(item, i) in rData" :key="i">
                <p :class="`font24 ${item.color}`">
                  <font class="font40">{{ item.value }}</font> {{ item.unit }}
                </p>
                <p class="font24">{{ item.name }}</p>
              </div>
            </div>
          </div>
          <div class="f-card" v-else-if="active === 5">
            <div class="f-card-body" v-for="(item, i) in rData" :key="i">
              <div class="mb30 f-item5">
                <p :class="`font24 ${item.color}`">
                  <font class="font40">{{ item.value }}</font> {{ item.unit }}
                </p>
                <p :class="`font24 ${item.color}`">{{ item.name }}</p>
              </div>
              <el-image :src="`${item.url}`"></el-image>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Swiper from "swiper";
export default {
  components: {
    // Pagination,
  },
  data() {
    return {
      active: 0,
      fData: [
        { name: "农田排水口污染物拦截工程" },
        { name: "农田排水氮磷拦截净化工程" },
        { name: "建立生态隔离带" },
        { name: "秸秆收集利用工程" },
        { name: "化肥农药减量施用" },
        { name: "节水灌溉工程" },
      ],
      bigImg: [
        "https://t7.baidu.com/it/u=3165657288,4248157545&fm=193&f=GIF",
        "https://t7.baidu.com/it/u=2942499027,2479446682&fm=193&f=GIF",
        "https://t7.baidu.com/it/u=2610975262,3538281461&fm=193&f=GIF",
        "https://t7.baidu.com/it/u=4138158235,3956816634&fm=193&f=GIF",
      ],
      title: "",
      text: "",
      url: "",
      rData: [],
    };
  },
  created() {
    this.$nextTick(function () {
      this.title = "农田排水口污染物拦截工程";
      this.text =
        "建设农田排水促沉净化装置30个，建设生态填料与基质400m2。其中生态填料与基质包含大小粒径沸石、生物炭、软性填料、其他高效吸附环境材料等。";
      this.url = require(`@/assets/img/effect/f-1.png`);
      this.rData = [
        {
          name: "农田排水促沉净化装置",
          value: "30",
          unit: "个",
          url: require(`@/assets/img/effect/f-1-2.png`),
        },
        {
          name: "生态填料与基质",
          value: "400",
          unit: "㎡",
          url: require(`@/assets/img/effect/f-1-3.png`),
        },
      ];

      this.galleryThumbsLunbo();
      this.galleryTopLunbo();
    });
  },
  methods: {
    onClick(i) {
      this.active = i;
      switch (i) {
        case 0:
          this.title = "农田排水口污染物拦截工程";
          this.text =
            "建设农田排水促沉净化装置30个，建设生态填料与基质400m2。其中生态填料与基质包含大小粒径沸石、生物炭、软性填料、其他高效吸附环境材料等。";
          this.url = require(`@/assets/img/effect/f-1.png`);
          this.rData = [
            {
              name: "农田排水促沉净化装置",
              value: "30",
              unit: "个",
              url: require(`@/assets/img/effect/f-1-2.png`),
            },
            {
              name: "生态填料与基质",
              value: "400",
              unit: "㎡",
              url: require(`@/assets/img/effect/f-1-3.png`),
            },
          ];
          break;
        case 1:
          this.title = "农田排水汇流湿地工程";
          this.text =
            "在示范区内建设生态塘8个，累计面积32亩，农田排水汇流湿地清淤共28280m3，净化塘边坡清杂1512m2，净水塘近水岸边栽植鸢尾、美人蕉等挺水植物1547m2，在净化塘顶栽植垂柳、红叶石楠等乔灌木516株，在易坍塌河段密打杉木桩护岸778m。";
          this.url = require(`@/assets/img/effect/f-2.png`);
          this.rData = [
            {
              name: "生态塘",
              value: "8",
              unit: "个",
              color: "color-blue",
              url: require(`@/assets/img/effect/f-2-1.png`),
            },
            {
              name: "湿地清淤",
              value: "28280",
              unit: "m3",
              color: "color-green",
              url: require(`@/assets/img/effect/f-2-3.png`),
            },
            {
              name: "净化塘边坡清杂",
              value: "1512",
              unit: "㎡",
              color: "color-purple",
              url: require(`@/assets/img/effect/f-2-5.png`),
            },
            {
              name: "挺水植物",
              value: "1547",
              unit: "㎡",
              color: "color-yellow",
              url: require(`@/assets/img/effect/f-2-2.png`),
            },
            {
              name: "杉木桩护岸",
              value: "778",
              unit: "m",
              color: "color-pink",
              url: require(`@/assets/img/effect/f-2-4.png`),
            },
          ];
          break;
        case 2:
          this.title = "建立生态隔离带";
          this.text =
            "在示范区范围的主干道两侧建立乔灌结合生态隔离带，一乔一灌间隔种植垂柳、红叶石楠，垂柳胸径5cm，红叶石楠冠幅100cm，高度100-110cm，垂柳与红叶石楠株距1.5m，垂柳（红叶石楠）与垂柳（红叶石楠）株距3m，构筑生态屏障，实现对干道周边环境的绿化和防止田间水土流失。";
          this.url = require(`@/assets/img/effect/f-3.png`);
          this.rData = [
            {
              name: "栽植垂柳、红叶石楠",
              color: "color-green",
              url: require(`@/assets/img/effect/f-3-1.png`),
            },
            {
              name: "生态防护林布置图",
              color: "color-blue",
              url: require(`@/assets/img/effect/f-3-2.png`),
            },
          ];
          break;
        case 3:
          this.title = "秸秆收集利用工程";
          this.text =
            "购置秸秆还田机12台，秸秆粉碎机12台，配套大型拖拉机12台，在万安村建设一座秸秆收储中心1460m2。";
          this.url = require(`@/assets/img/effect/f-4.png`);
          this.rData = [
            {
              name: "秸秆还田机",
              color: "color-green",
              value: "12",
              unit: "台",
            },
            {
              name: "秸秆粉碎机",
              color: "color-green",
              value: "12",
              unit: "台",
            },
            {
              name: "大型拖拉机",
              color: "color-green",
              value: "12",
              unit: "台",
            },
            {
              name: "秸秆收储中心",
              color: "color-green",
              value: "1",
              unit: "座",
            },
          ];
          break;
        case 4:
          this.title = "化肥农药减量施用";
          this.text =
            "将新塘村300亩废弃种植田块进行复垦等土地整理工程，后续种植紫云英，进行绿肥轮作有机生产模式应用推广。同时，在万安村、何桥村等地的500亩耕地进行休耕轮作。购置自走植保机12台，防控无人机12台。";
          this.url = require(`@/assets/img/effect/f-5.png`);
          this.rData = [
            {
              name: "复垦废弃种植田块",
              color: "color-green",
              value: "300",
              unit: "亩",
            },
            {
              name: "轮作休耕",
              color: "color-blue",
              value: "500",
              unit: "亩",
            },
            {
              name: "自走植保机",
              color: "color-yellow",
              value: "12",
              unit: "台",
            },
            {
              name: "防控无人机",
              color: "color-purple",
              value: "12",
              unit: "台",
            },
          ];
          break;
        case 5:
          this.title = "节水灌溉工程";
          this.text =
            "将万安村、何桥村的700亩土渠明灌区改造为暗管灌溉区，实现水资源的节约利用，减少进入水体的农业生产种植尾水，从中间环节上对农业面源污染物进入水体进行控制。";
          this.url = require(`@/assets/img/effect/f-6.png`);
          this.rData = [
            {
              name: "明灌改暗灌",
              color: "color-green",
              value: "700",
              unit: "亩",
              url: require(`@/assets/img/effect/f-6-1.png`),
            },
          ];
          break;

        default:
          break;
      }
    },
    galleryTopLunbo() {
      this.galleryTop = new Swiper(".gallery-top", {
        spaceBetween: 0,
        loop: false,
        loopedSlides: 5,
        // 左右按钮
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        thumbs: {
          swiper: this.galleryThumbs,
          slideThumbActiveClass: "swiper-slide-thumb-active",
        },
      });
    },
    galleryThumbsLunbo() {
      this.galleryThumbs = new Swiper(".gallery-thumbs", {
        spaceBetween: 5, //在slide之间设置距离（单位px）
        slidesPerView: 4, //设置slider容器能够同时显示的slides数量
        loop: false, //设置为true 则开启loop模式
        freeMode: true, //默认为false，普通模式：slide滑动时只滑动一格
        loopedSlides: 7, //一般设置大于可视slide个数2个即可
        watchSlidesVisibility: true, //开启watchSlidesVisibility选项前需要先开启watchSlidesProgress
        watchSlidesProgress: true, //开启这个参数来计算每个slide的progress(进度、进程)
      });
    },
  },
};
</script>
<style lang="scss" scoped>
.f-container {
  height: 100%;
  display: flex;
  flex-direction: column;
}
.f-header {
  display: flex;
  justify-content: center;
  background: rgba(3, 23, 31, 0.5);
  padding: 2vh;
  border-bottom: 1px solid;
  border-image: linear-gradient(
      0deg,
      rgba(12, 85, 74, 0.5),
      rgba(12, 85, 74, 0.5)
    )
    10 10;

  & > button {
    margin: 0 1vh;
    padding: 0 3.6vh;
    height: 6vh;
    line-height: 6vh;
    border: 1px solid #0c554a;
    background: linear-gradient(0deg, #0c554a 0%, rgba(12, 85, 74, 0) 100%);
    border-radius: 6px;
    font-size: 2.2vh;
    color: #fff;

    &.active {
      background: linear-gradient(90deg, #07c191 0%, #009fdc 100%);
    }
  }
}
.f-main {
  display: block;
  flex: 1;
  flex-basis: auto;
  overflow: hidden;
  box-sizing: border-box;
  padding: 2vh 4.5vh 5vh;

  .f-row {
    height: 100%;
    display: flex;

    .f-col {
      height: 100%;
      border-image-repeat: stretch round;
      border-image-width: 0.8vh;
      border-image-slice: 8 fill;
      padding: 0 4vh;
    }
    .f-left {
      border-image-source: url(~@/assets/img/effect/f-left-bg.png);

      p {
        font-size: 2vh;
        line-height: 4.5vh;
      }
    }
    .f-right {
      border-image-source: url(~@/assets/img/effect/f-right-bg.png);
    }
    .f-left,
    .f-right {
      display: flex;
      flex: 0 0 46vh;
    }

    .f-center {
      flex: 1;
      margin: 0 1.4vh 0 2.4vh;
      padding-bottom: 5.5vh;
      border-image-source: url(~@/assets/img/effect/f-center-bg.png);
    }
  }

  .f-card {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;

    &-header {
      position: relative;
      font-size: 2.8vh;
      font-family: PingFang SC;
      font-weight: bold;
      color: #39ffe7;
      padding: 4.5vh 0 3vh;
      text-align: center;
    }

    &-body {
      display: flex;
      align-items: center;
      justify-content: space-evenly;
      flex-direction: column;
      flex: 1;
      padding: 0 10px;
      color: #ffffff;
    }
  }
  .swiper-container {
    width: 87vh;
    height: 55vh;
  }
}

.bannerBox {
  width: 87vh;
  height: 60vh;
  .img {
    width: 100%;
    height: 100%;
  }
  .gallery-top {
    width: 87vh;
    height: 48vh;
    border: 1px solid #07d5c0;
    border-radius: 8px;
  }
  .gallery-thumbs {
    width: 87vh;
    height: 11vh;
    margin-top: -10px;

    .swiper-bottom {
      padding-top: 10px;
      img {
        display: block;
        border: 0.4vh solid transparent;
        border-radius: 0.8vh;
        cursor: pointer;
      }
    }

    .swiper-slide-thumb-active {
      img {
        border-color: #39ffe7;
      }

      &::before {
        width: 20px;
        height: 10px;
        display: block;
        content: "";
        position: absolute;
        top: 0;
        left: 50%;
        margin-left: -10px;
        background: {
          repeat: no-repeat;
          size: 100%;
          image: url(~@/assets/img/effect/f-thumb-active.png);
        }
      }
    }
  }
}

.f-item2 {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 8vh;
  border: 1px solid rgba(7, 213, 192, 0.5);
  background: linear-gradient(
    270deg,
    rgba(0, 74, 52, 0.5) 0%,
    rgba(12, 85, 74, 0.5) 100%
  );
  border-radius: 40px;

  & > p {
    &:nth-child(1) {
      display: flex;
      align-items: center;
    }
    &:nth-child(2) {
      margin-right: 3vh;
    }
  }
}

.f-item3 {
  & > div {
    display: flex;
    align-items: center;

    & > p {
      &:first-child {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 161px;
        height: 138.75px;
        font-size: 5.6vh;
        font-weight: bold;
        color: #fff;
        margin-right: 10px;
        background: {
          repeat: no-repeat;
          size: cover;
          image: url(~@/assets/img/effect/f-4-1.png);
        }
      }
    }

    &:nth-child(2) {
      & > p {
        &:first-child {
          background-position: center -138.75px;
        }
      }
    }

    &:nth-child(3) {
      & > p {
        &:first-child {
          background-position: center -277.5px;
        }
      }
    }

    &:nth-child(4) {
      & > p {
        &:first-child {
          background-position: center -416.25px;
        }
      }
    }
  }
}
.f-item4 {
  & > div {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    height: 13vh;
    background: {
      repeat: no-repeat;
      size: 100%;
      image: url(~@/assets/img/effect/f-5-1.png);
    }

    font {
      font-weight: bold;
    }
  }
}
.f-item5 {
  width: 100%;
  border: 1px solid #07d5c0;
  border-radius: 4vh;
  text-align: center;
  overflow: hidden;

  & > p {
    padding: 1vh 0;
    background: linear-gradient(180deg, rgba(0, 74, 52, 0) 50%, #0c554a 100%);

    &:first-child {
      border-bottom: 1px solid #07d5c0;
    }
  }
}
</style>
<template>
  <div class="f-container">
    <div class="f-header">
      <el-button
        type="primary"
        v-for="(item, i) in fData"
        :key="i"
        :class="i === active ? 'active' : ''"
        @click="handleClick(i)"
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
                <div class="swiper-container swiper-gallery">
                  <div class="swiper-wrapper">
                    <div
                      class="swiper-slide"
                      v-for="(item, index) of bigImg"
                      :key="index"
                    >
                      <p class="bannerBox-text">{{ item.name }}</p>
                      <el-image class="bannerBox-img" :src="`${item.url}`"></el-image>
                    </div>
                  </div>
                  <div class="swiper-button-next"></div>
                  <div class="swiper-button-prev"></div>
                </div>
                <div thumbsSlider="" class="swiper-container swiper-thumbs">
                  <div class="swiper-wrapper">
                    <div
                      class="swiper-slide swiper-bottom"
                      v-for="(item, index) of bigImg"
                      :key="index"
                    >
                      <el-image class="bannerBox-img" :src="`${item.url}`"></el-image>
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
                <span class="font40"> {{ item.value }} </span>{{ item.unit }}
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
                  <span class="font30"> {{ item.value }} </span>{{ item.unit }}
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
                    <span class="font24">{{ item.name }}</span> {{ item.unit }}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="f-card" v-else-if="active === 4">
            <div class="f-card-body f-item4" style="padding: 0">
              <div v-for="(item, i) in rData" :key="i">
                <p :class="`font24 ${item.color}`">
                  <span class="font40">{{ item.value }}</span> {{ item.unit }}
                </p>
                <p class="font24">{{ item.name }}</p>
              </div>
            </div>
          </div>
          <div class="f-card" v-else-if="active === 5">
            <div class="f-card-body" v-for="(item, i) in rData" :key="i">
              <div class="mb30 f-item5">
                <p :class="`font24 ${item.color}`">
                  <span class="font40">{{ item.value }}</span> {{ item.unit }}
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
import { Pagination } from "swiper";
import { getImageUrl } from "@/utils";
import { defineComponent, onMounted, reactive, ref } from "vue";

export default defineComponent({
  name: "Header",
  components: { Pagination },
  setup() {
    const url = ref(getImageUrl("effect", "f-1.png"));
    const text = ref(
      "建设农田排水促沉净化装置30个，建设生态填料与基质400m2。其中生态填料与基质包含大小粒径沸石、生物炭、软性填料、其他高效吸附环境材料等。"
    );
    const title = ref("农田排水口污染物拦截工程");
    const active = ref(0);
    const rData = reactive([
      {
        name: "农田排水促沉净化装置",
        value: "30",
        unit: "个",
        url: getImageUrl("effect", "f-1-2.png"),
      },
      {
        name: "生态填料与基质",
        value: "400",
        unit: "㎡",
        url: getImageUrl("effect", "f-1-3.png"),
      },
    ]);
    const fData = reactive([
      { name: "农田排水口污染物拦截工程" },
      { name: "农田排水汇流湿地工程" },
      { name: "建立生态隔离带" },
      { name: "秸秆收集利用工程" },
      { name: "化肥农药减量施用" },
      { name: "节水灌溉工程" },
    ]);
    const bigImg = reactive([
      {
        name: "",
        url: getImageUrl("effect/1/2", ""),
      },
    ]);

    onMounted(() => {
      handleSwiper(); // 初始化swiper
    });

    function handleSwiper() {
      new Swiper(".swiper-gallery", {
        spaceBetween: 0,
        loop: false,
        loopedSlides: 5,
        // 左右按钮
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        thumbs: {
          // slideThumbActiveClass: "swiper-slide-thumb-active",
          swiper: new Swiper(".swiper-thumbs", {
            spaceBetween: 5, //在slide之间设置距离（单位px）
            slidesPerView: 4, //设置slider容器能够同时显示的slides数量
            loop: false, //设置为true 则开启loop模式
            freeMode: false, //默认为false，普通模式：slide滑动时只滑动一格
            loopedSlides: 7, //一般设置大于可视slide个数2个即可
            watchSlidesVisibility: true, //开启watchSlidesVisibility选项前需要先开启watchSlidesProgress
            watchSlidesProgress: true, //开启这个参数来计算每个slide的progress(进度、进程)
          }),
        },
      });
    }

    function handleClick(i) {
      this.active = i;
      switch (i) {
        case 0:
          this.title = "农田排水口污染物拦截工程";
          this.text =
            "建设农田排水促沉净化装置30个，建设生态填料与基质400m2。其中生态填料与基质包含大小粒径沸石、生物炭、软性填料、其他高效吸附环境材料等。";
          this.url = getImageUrl("effect", "f-1.png");
          this.rData = [
            {
              name: "农田排水促沉净化装置",
              value: "30",
              unit: "个",
              url: getImageUrl("effect", "f-1-2.png"),
            },
            {
              name: "生态填料与基质",
              value: "400",
              unit: "㎡",
              url: getImageUrl("effect", "f-1-3.png"),
            },
          ];
          this.bigImg = reactive([
            {
              name: "",
              url: "",
            },
          ]);
          handleSwiper();
          break;
        case 1:
          this.title = "农田排水汇流湿地工程";
          this.text =
            "在示范区内建设生态塘8个，累计面积32亩，农田排水汇流湿地清淤共28280m3，净化塘边坡清杂1512m2，净水塘近水岸边栽植鸢尾、美人蕉等挺水植物1547m2，在净化塘顶栽植垂柳、红叶石楠等乔灌木516株，在易坍塌河段密打杉木桩护岸778m。";
          this.url = getImageUrl("effect", "f-2.png");
          this.rData = [
            {
              name: "生态塘",
              value: "8",
              unit: "个",
              color: "color-blue",
              url: getImageUrl("effect", "f-2-1.png"),
            },
            {
              name: "湿地清淤",
              value: "28280",
              unit: "m3",
              color: "color-green",
              url: getImageUrl("effect", "f-2-3.png"),
            },
            {
              name: "净化塘边坡清杂",
              value: "1512",
              unit: "㎡",
              color: "color-purple",
              url: getImageUrl("effect", "f-2-5.png"),
            },
            {
              name: "挺水植物",
              value: "1547",
              unit: "㎡",
              color: "color-yellow",
              url: getImageUrl("effect", "f-2-2.png"),
            },
            {
              name: "杉木桩护岸",
              value: "778",
              unit: "m",
              color: "color-pink",
              url: getImageUrl("effect", "f-2-4.png"),
            },
          ];
          this.bigImg = reactive([
            {
              name: "生态河坡建设断面图",
              url: getImageUrl("effect/1/2", "2-1.png"),
            },
            {
              name: "生态塘",
              url: getImageUrl("effect/1/2", "2-2.png"),
            },
            {
              name: "护坡木桩施工",
              url: getImageUrl("effect/1/2", "2-3.png"),
            },
            {
              name: "生态沟渠",
              url: getImageUrl("effect/1/2", "2-4.png"),
            },
          ]);
          setTimeout(() => {
            this.handleSwiper();
          }, 50);
          break;
        case 2:
          this.title = "建立生态隔离带";
          this.text =
            "在示范区范围的主干道两侧建立乔灌结合生态隔离带，一乔一灌间隔种植垂柳、红叶石楠，垂柳胸径5cm，红叶石楠冠幅100cm，高度100-110cm，垂柳与红叶石楠株距1.5m，垂柳（红叶石楠）与垂柳（红叶石楠）株距3m，构筑生态屏障，实现对干道周边环境的绿化和防止田间水土流失。";
          this.url = getImageUrl("effect", "f-3.png");
          this.rData = [
            {
              name: "栽植垂柳、红叶石楠",
              color: "color-green",
              url: getImageUrl("effect", "f-3-1.png"),
            },
            {
              name: "生态防护林布置图",
              color: "color-blue",
              url: getImageUrl("effect", "f-3-2.png"),
            },
          ];
          this.bigImg = reactive([
            {
              name: "生态防护林布置图",
              url: getImageUrl("effect/1/3", "3-1.png"),
            },
            {
              name: "生态防护林",
              url: getImageUrl("effect/1/3", "3-2.png"),
            },
            {
              name: "生态防护林",
              url: getImageUrl("effect/1/3", "3-3.png"),
            },
          ]);
          setTimeout(() => {
            this.handleSwiper();
          }, 50);
          break;
        case 3:
          this.title = "秸秆收集利用工程";
          this.text =
            "购置秸秆还田机12台，秸秆粉碎机12台，配套大型拖拉机12台，在万安村建设一座秸秆收储中心1460m2。";
          this.url = getImageUrl("effect", "f-4.png");
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
          this.bigImg = reactive([
            {
              name: "大型拖拉机",
              url: getImageUrl("effect/1/4", "4-1.png"),
            },
          ]);
          setTimeout(() => {
            this.handleSwiper();
          }, 50);
          break;
        case 4:
          this.title = "化肥农药减量施用";
          this.text =
            "将新塘村300亩废弃种植田块进行复垦等土地整理工程，后续种植紫云英，进行绿肥轮作有机生产模式应用推广。同时，在万安村、何桥村等地的500亩耕地进行休耕轮作。购置自走植保机12台，防控无人机12台。";
          this.url = getImageUrl("effect", "f-5.png");
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
          this.bigImg = reactive([
            {
              name: "",
              url: "",
            },
          ]);
          break;
        case 5:
          this.title = "节水灌溉工程";
          this.text =
            "将万安村、何桥村的700亩土渠明灌区改造为暗管灌溉区，实现水资源的节约利用，减少进入水体的农业生产种植尾水，从中间环节上对农业面源污染物进入水体进行控制。";
          this.url = getImageUrl("effect", "f-6.png");
          this.rData = [
            {
              name: "明灌改暗灌",
              color: "color-green",
              value: "700",
              unit: "亩",
              url: getImageUrl("effect", "f-6-1.png"),
            },
          ];
          this.bigImg = reactive([
            {
              name: "",
              url: "",
            },
          ]);
          break;
        default:
          break;
      }
    }

    return {
      url,
      text,
      title,
      fData,
      rData,
      active,
      bigImg,
      handleClick,
      handleSwiper,
    };
  },
});
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
  border-bottom: 0.1vh solid;
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
    border: 0.1vh solid #0c554a;
    background: linear-gradient(0deg, #0c554a 0%, rgba(12, 85, 74, 0) 100%);
    border-radius: 0.6vh;
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
      border-image-source: url(./../../assets/img/effect/f-left-bg.png);

      p {
        font-size: 2vh;
        line-height: 4.5vh;
      }
    }
    .f-right {
      border-image-source: url(./../../assets/img/effect/f-right-bg.png);
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
      border-image-source: url(./../../assets/img/effect/f-center-bg.png);
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
      padding: 0 1vh;
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

  &-text {
    position: absolute;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: 1;
    text-align: center;
    line-height:  3.6vh;
    font-size: 1.4vh;
    color: #ffffff;
    background-color: rgb(0 0 0 / 65%);
  }

  &-img {
    width: 100%;
    height: 100%;
  }
  .swiper-gallery {
    width: 87vh;
    height: 48vh;
    border: 0.1vh solid #07d5c0;
    border-radius: 0.8vh;
    overflow: hidden;
  }
  .swiper-thumbs {
    width: 87vh;
    height: 11vh;
    margin-top: 1vh;

    .swiper-bottom {
      padding-top: 1vh;
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
        width: 2vh;
        height: 1vh;
        display: block;
        content: "";
        position: absolute;
        top: 0;
        left: 50%;
        margin-left: 1vh;
        background: {
          repeat: no-repeat;
          size: 100%;
          image: url(./../../assets/img/effect/f-thumb-active.png);
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
  border: 0.1vh solid rgba(7, 213, 192, 0.5);
  background: linear-gradient(
    270deg,
    rgba(0, 74, 52, 0.5) 0%,
    rgba(12, 85, 74, 0.5) 100%
  );
  border-radius: 4vh;

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
        width: 16.1vh;
        height: 13.875vh;
        font-size: 5.6vh;
        font-weight: bold;
        color: #fff;
        margin-right: 1vh;
        background: {
          repeat: no-repeat;
          size: cover;
          image: url(./../../assets/img/effect/f-4-1.png);
        }
      }
    }

    &:nth-child(2) {
      & > p {
        &:first-child {
          background-position: center -13.875vh;
        }
      }
    }

    &:nth-child(3) {
      & > p {
        &:first-child {
          background-position: center -27.75vh;
        }
      }
    }

    &:nth-child(4) {
      & > p {
        &:first-child {
          background-position: center -41.625vh;
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
      image: url(./../../assets/img/effect/f-5-1.png);
    }

    font {
      font-weight: bold;
    }
  }
}
.f-item5 {
  width: 100%;
  border: 0.1vh solid #07d5c0;
  border-radius: 4vh;
  text-align: center;
  overflow: hidden;

  & > p {
    padding: 1vh 0;
    background: linear-gradient(180deg, rgba(0, 74, 52, 0) 50%, #0c554a 100%);

    &:first-child {
      border-bottom: 0.1vh solid #07d5c0;
    }
  }
}
</style>
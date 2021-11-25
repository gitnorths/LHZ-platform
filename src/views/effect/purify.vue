<template>
  <div class="f-container">
    <div class="f-main">
      <div class="f-row">
        <div class="f-col f-left">
          <div class="f-card">
            <div class="f-card-header b-bot">{{ title }}</div>
            <div class="f-card-body" style="justify-content: space-around">
              <p>{{ text }}</p>
              <p>{{ text2 }}</p>
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
                <div class="swiper-container swiper-thumbs">
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
        <div class="f-col f-right f-table">
          <el-table :data="tableData" style="width: 100%" max-height="740">
            <el-table-column
              prop="name"
              label="河道名称"
              width="100"
              align="center"
            >
              <template #default="scope">
                <span>
                  {{ scope.row.name }}
                </span>
              </template>
            </el-table-column>
            <el-table-column prop="content" label="建设内容" align="center">
              <template #default="scope">
                <p>
                  {{ scope.row.content }}
                </p>
              </template>
            </el-table-column>
          </el-table>
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
  name: "EffectPurify",
  components: {
    Pagination,
  },
  setup() {
    const title = ref("地表径流净化利用工程");
    const text = ref(
      "种植区地区水土和农村村庄污水流失引起的地表径流是面源污染的重要原因，通过对现有河道进行岸坡生态化改造，对地表径流进行净化，对净化后的水资源通过各种输水通道进行生产利用，实现地表径流的净化和回用。"
    );
    const text2 = ref(
      "对示范区内河道进行岸坡生态化改造，同时清淤清杂，共计25.31万m3，河道边坡清杂28720㎡，近水岸边栽植鸢尾、美人蕉、千蕨菜等挺水植物共14360m2，河道坡顶栽植冬青、红叶石楠等灌木2393株，在易坍塌河段密打杉木桩护岸16974m。"
    );
    const bigImg = reactive([
      {
        name: "河道生态化改造断面图",
        url: getImageUrl("effect/3", "3-1.png"),
      },
      {
        name: "杉木桩护岸",
        url: getImageUrl("effect/3", "3-2.png"),
      },
    ]);
    const tableData = reactive([
      {
        name: "河塘河",
        color: "color-green",
        content:
          "种植挺水植物1300㎡，种植护岸灌木217株，杉木桩护岸1690m。清淤1.83万m³，清杂2600㎡。",
      },
      {
        name: "界娄河",
        color: "color-purple",
        content:
          "种植挺水植物1000㎡，种植护岸灌木167株，杉木桩护岸1440m。清淤1.31万m³，清杂2000㎡。",
      },
      {
        name: "申泾河",
        color: "color-pink",
        content:
          "种植挺水植物1300㎡，种植护岸灌木217株，杉木桩护岸1612m。清淤2.05万m³，清杂2600㎡。",
      },
      {
        name: "蒋漕河",
        color: "color-pink",
        content:
          "种植挺水植物1200㎡，种植护岸灌木200株，杉木桩护岸1632m。清淤1.64万m³，清杂2400㎡。",
      },
      {
        name: "油槽河",
        color: "color-pink",
        content:
          "种植挺水植物1400㎡，种植护岸灌木233株，杉木桩护岸2070m。清淤2.17万m³，清杂2800㎡。",
      },
      {
        name: "蔡家浜河",
        color: "color-pink",
        content:
          "种植挺水植物710㎡，种植护岸灌木118株，杉木桩护岸994m清淤1.425万m³，清杂1420㎡。",
      },
      {
        name: "横塘河",
        color: "color-pink",
        content:
          "种植挺水植物650㎡，种植护岸灌木108株，杉木桩护岸650m清淤0.785万m³，清杂1300㎡。",
      },
      {
        name: "钱泾河",
        color: "color-pink",
        content:
          "种植挺水植物2000㎡，种植护岸灌木333株，杉木桩护岸2000m。清淤4.41万m³，清杂4000㎡。",
      },
      {
        name: "苏张泾河",
        color: "color-pink",
        content:
          "种植挺水植物2100㎡，种植护岸灌木350株，杉木桩护岸2184m。清淤3.74万m³，清杂4200㎡。",
      },
      {
        name: "马路塘河",
        color: "color-pink",
        content:
          "种植挺水植物2700㎡，种植护岸灌木450株，杉木桩护岸2700m。清淤5.95万m³，清杂5400㎡。",
      },
    ]);

    onMounted(() => {
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
    });

    return {
      text,
      text2,
      title,
      bigImg,
      tableData,
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
      border-image-source: url(./../../assets/img/effect/f-left-bg.png);

      p {
        font-size: 2vh;
        line-height: 4.5vh;
      }
    }
    .f-right {
      border-image-source: url(./../../assets/img/effect/f-right-bg.png);
      padding: 3vh;

      .f-card-body {
        & > div {
          display: flex;
          width: 100%;
          padding: 3vh 4vh;
          background-color: rgba(0, 0, 0, 0.7);
          border: 1px solid rgba(57, 255, 232, 0.7);
          box-shadow: 0px 0px 10px rgba(25, 219, 149, 0.6);
          border-radius: 8px;

          & > div {
            &:last-child {
              display: flex;
              flex-direction: column;
              justify-content: center;
            }
          }
        }
      }
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
  height: 67vh;
  &-text {
    position: absolute;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: 1;
    text-align: center;
    line-height: 36px;
    font-size: 14px;
    color: #ffffff;
    background-color: rgb(0 0 0 / 65%);
  }

  &-img {
    width: 100%;
    height: 100%;
  }
  .swiper-gallery {
    width: 87vh;
    height: 55vh;
    border: 1px solid #07d5c0;
    border-radius: 8px;
  }
  .swiper-thumbs {
    width: 87vh;
    height: 11vh;
    margin-top: 10px;

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
          image: url(./../../assets/img/effect/f-thumb-active.png);
        }
      }
    }
  }
}
</style>
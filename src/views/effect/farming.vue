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
                      <img class="img" :src="item" />
                    </div>
                  </div>
                  <div class="swiper-button-next ">
                  </div>
                  <div class="swiper-button-prev ">
                  </div>
                </div>
                <div class="swiper-container swiper-thumbs">
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
          <div class="f-card">
            <div class="f-card-body" style="padding: 0">
              <div
                v-for="(item, i) in rData"
                :key="i"
                :style="`box-shadow: 0px 0px 10px ${item.color}`"
              >
                <el-image :src="`${item.url}`" class="mr20"></el-image>
                <div>
                  <p :class="`font36 mb10 ${item.color}`">
                    {{ item.value }} {{ item.unit }}
                  </p>
                  <p class="font20">{{ item.name }}</p>
                </div>
              </div>
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
    const url = ref(getImageUrl("effect", "f-1"));
    const text = ref(
      "畜禽养殖污染物治理工程在示范区内以畜禽养殖粪污资源化利用和延伸农业产业链为重点，拓展农业产业化空间，打造产品加工循环模式、废弃物质循环模式、区域产业循环模式，在发展循环农业产业的同时，消减农业面源污染物的排放量。"
    );
    const text2 = ref(
      "本项目区已有罐体有效容积7.2立方米的粪车2台、单座容积600m³田间调节池2座，畜禽养殖污染物治理工程通过在已有基础上，进一步完善畜禽粪便收集利用体系，新购置4吨干粪运输车1台、有机肥施肥机3台、罐体有效容积7.2立方米的吸粪车2台。"
    );
    const title = ref("畜禽养殖污染物治理工程");
    const rData = reactive([
      {
        name: "干粪运输车",
        color: "color-green",
        value: "1",
        unit: "台",
        url: getImageUrl("effect", "farming-1"),
      },
      {
        name: "有机肥施肥机",
        color: "color-purple",
        value: "3",
        unit: "台",
        url: getImageUrl("effect", "farming-2"),
      },
      {
        name: "吸粪车",
        color: "color-pink",
        value: "2",
        unit: "台",
        url: getImageUrl("effect", "farming-3"),
      },
    ]);
    const bigImg = reactive([
      "https://t7.baidu.com/it/u=3165657288,4248157545&fm=193&f=GIF",
      "https://t7.baidu.com/it/u=2942499027,2479446682&fm=193&f=GIF",
      "https://t7.baidu.com/it/u=2610975262,3538281461&fm=193&f=GIF",
      "https://t7.baidu.com/it/u=4138158235,3956816634&fm=193&f=GIF",
      "https://t7.baidu.com/it/u=3165657288,4248157545&fm=193&f=GIF",
      "https://t7.baidu.com/it/u=2942499027,2479446682&fm=193&f=GIF",
      "https://t7.baidu.com/it/u=2610975262,3538281461&fm=193&f=GIF",
      "https://t7.baidu.com/it/u=4138158235,3956816634&fm=193&f=GIF",
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
      url,
      text,
      text2,
      title,
      rData,
      bigImg,
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
  height: 67vh;
  .img {
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
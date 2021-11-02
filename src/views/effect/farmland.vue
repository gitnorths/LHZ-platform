<template>
  <div class="f-container">
    <div class="f-header">
      <el-button
        type="primary"
        v-for="(item, i) in menuData"
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
            <div class="f-card-header b-bot">农田排水口污染物拦截工程</div>
            <div class="f-card-body">
              <p>
                在示范区内建设生态塘8个，累计面积32亩，农田排水汇流湿地清淤共28280m3，净化塘边坡清杂1512m2，净水塘近水岸边栽植鸢尾、美人蕉等挺水植物1547m2，在净化塘顶栽植垂柳、红叶石楠等乔灌木516株，在易坍塌河段密打杉木桩护岸778m。
              </p>

              <el-image
                :src="require(`@/assets/img/effect/f-2.png`)"
              ></el-image>
            </div>
          </div>
        </div>
        <div class="f-col f-center">
          <div class="f-card">
            <div class="f-card-header">照片名称</div>
            <div class="f-card-body">
              <!-- <img :src="require(`@/assets/img/effect/f-2.png`)" /> -->
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
          <div class="f-card">
            <div
              class="f-card-body borderbottom"
              style="justify-content: center"
            >
              <el-image
                class="mb30"
                :src="require(`@/assets/img/effect/f-1-2.png`)"
              ></el-image>
              <p class="font24"><font class="font40">30</font>个</p>
              <p class="font24 color-blue">农田排水促沉净化装置</p>
            </div>
            <div class="f-card-body" style="justify-content: center">
              <el-image
                class="mb30"
                :src="require(`@/assets/img/effect/f-1-3.png`)"
              ></el-image>
              <p class="font24"><font class="font40">400</font>㎡</p>
              <p class="font24 color-blue">生态填料与基质</p>
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
      menuData: [
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
    };
  },
  created() {
    this.$nextTick(function () {
      this.galleryThumbsLunbo();
      this.galleryTopLunbo();
    });
  },
  methods: {
    onClick(i) {
      this.active = i;
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

  button {
    padding: 0 3.6vh;
    height: 6vh;
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
      padding: 0 50px;
    }
    .f-left {
      border-image-source: url(~@/assets/img/effect/f-left-bg.png);
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

      p {
        font-size: 2vh;
        line-height: 4.5vh;
      }
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
    height: 50vh;
    border: 1px solid #07D5C0;
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
</style>
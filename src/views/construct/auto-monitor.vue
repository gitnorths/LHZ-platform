<template>
  <div class="construct construct-map">
    <div id="map"></div>
    <div class="sidebar">
      <div class="sidebar__header">
        <div class="sidebar__title">
          <p>自动监测</p>
          <span></span>
        </div>
        <div class="sidebar__tooltip">
          <p>监测点：太仓市浏河镇南稻香路</p>
          <span>PES010000051</span>
        </div>
      </div>
      <div class="sidebar__body">
        <div class="sidebar__scroll">
          <div class="sidebar__item">
            <div class="sidebar__title sidebar__body-title">
              <p>电导率</p>
              <el-button-group>
                <el-button type="primary" size="mini">年度</el-button>
                <el-button type="primary" size="mini" class="active">
                  月度
                </el-button>
                <el-button type="primary" size="mini">旬度</el-button>
              </el-button-group>
            </div>
            <div class="construct-echarts"></div>
          </div>
          <div class="sidebar__item">
            <div class="sidebar__title sidebar__body-title">
              <p>pH值</p>
              <el-button-group>
                <el-button type="primary" size="mini">年度</el-button>
                <el-button type="primary" size="mini" class="active">
                  月度
                </el-button>
                <el-button type="primary" size="mini">旬度</el-button>
              </el-button-group>
            </div>
            <div class="construct-echarts"></div>
          </div>
          <div class="sidebar__item">
            <div class="sidebar__title sidebar__body-title">
              <p>氨氮</p>
              <el-button-group>
                <el-button type="primary" size="mini">年度</el-button>
                <el-button type="primary" size="mini" class="active">
                  月度
                </el-button>
                <el-button type="primary" size="mini">旬度</el-button>
              </el-button-group>
            </div>
            <div class="construct-echarts"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
// import BMap from "BMap";
import { baiduMap } from "@/components/baiduMap";
export default {
  name: "AutoMonitor",
  data() {
    return {
      ak: "avfc2kLXwHDxyuKCPYpjU3V6AQEEQTE4",
    };
  },
  methods: {},
  mounted() {
    // 动态引入较大类库避免影响页面展示
    this.$nextTick(() => {
      // let _this = this;
      baiduMap(this.ak).then(() => {
        // 创建Map实例
        /* eslint-disable */
        let map = new BMap.Map("map");
        // 初始化地图,设置中心点坐标和地图级别
        map.centerAndZoom(new BMap.Point(121.13215, 31.462382), 11);
        // 设置地图显示的城市 此项是必须设置的
        map.setCurrentCity("太仓市");
        map.setMapType(BMAP_HYBRID_MAP);
        map.panBy(-350, 10);
        // map.setTilt(50);
        //开启鼠标滚轮缩放
        // map.enableScrollWheelZoom(false);
        // setTimeout(() => {
        let bdarys = new BMap.Boundary();
        bdarys.get("太仓市", function (rs) {
          //获取行政区域
          map.clearOverlays(); //清除地图覆盖物
          map.panBy(-350, 10);
          let count = rs.boundaries.length; //行政区域的点有多少个
          if (count === 0) {
            alert("未能获取当前输入行政区域");
            return;
          }
          let pointArray = [];
          for (let i = 0; i < count; i++) {
            let ply = new BMap.Polygon(rs.boundaries[i], {
              name: "太仓市",
              strokeColor: "#FFFFFF",
              strokeWeight: 1,
              strokeOpacity: "1",
              fillOpacity: "0.5",
              fillColor: "#13414C",
            }); //建立多边形覆盖物
            map.addOverlay(ply); //添加覆盖物
            pointArray = pointArray.concat(ply.getPath());
            // const marker1 = new BMap.Marker(new BMap.Point(121.13215, 31.462382));
            let myIcon = new BMap.Icon(
              require(`@/assets/img/construct/icon-camera.png`),
              new BMap.Size(140, 116)
            );
            let point = new BMap.Point(121.186163,31.589242);
            let marker = new BMap.Marker(point, {
              icon: myIcon,
              title: "1",
            });
            map.addOverlay(marker);
            // 创建信息窗口
            let opts = {
              width: 320,
              height: 260,
              title: "监测点具体情况",
            };
            let infoWindow = new BMap.InfoWindow(
              `
              <p>编号：SCYJ-21#</p>
              <p>地址：太仓市浏河镇</p>
              <p>监测点等级：省级</p>
              <p>实施主体：太仓市陈荣蔬菜专业合作社</p>
              <p>种植面积：130亩</p>
              <p>种植作物：辣椒</p>
              <p>海拔：2米</p>
              `,
              opts
            );
            // 点标记添加点击事件
            marker.addEventListener("click", function () {
              map.openInfoWindow(infoWindow, point); // 开启信息窗口
            });
          }
          map.setViewport(pointArray); //调整视野
        });
        // }, 5000);
      });
    });
  },
};
</script>
<style lang="scss" scoped>
.construct {
  &-map {
    position: relative;
    width: 100vw;
    height: 100vh;
    background: {
      repeat: no-repeat;
      size: 100%;
      image: url(~@/assets/img/effect/bg.png);
    }
  }

  #map {
    width: 100vw;
    height: 100vh;
  }

  .sidebar {
    position: fixed;
    right: 20px;
    bottom: 25px;
    top: 105px;
    display: flex;
    flex-direction: column;
    width: 700px;
    border-image-source: url(~@/assets/img/construct/bg-pop.png);
    border-image-repeat: stretch stretch;
    border-image-width: 1vh 1vh;
    border-image-slice: 10 10 fill;

    &__header {
      padding: 3vh 2vh 0;
    }
    &__title {
      display: flex;
      align-items: center;
      margin-bottom: 2vh;

      p {
        display: block;
        font-size: 24px;
        line-height: 24px;
        font-weight: bold;
        color: #ffffff;
        padding: 0 1.5vh;
        border-left: 4px solid #05bf99;
      }

      span {
        display: flex;
        flex: 1;
        height: 2vh;
        background: {
          repeat: no-repeat;
          size: cover;
          position: center right;
          image: url(~@/assets/img/construct/bg-title.png);
        }
      }
    }

    &__tooltip {
      display: flex;
      align-items: center;
      justify-content: space-between;
      background-color: #112532;
      padding: 1vh;

      p {
        font-size: 18px;
        font-weight: bold;
        color: #05bf99;
        padding-left: 3vh;
        background: {
          repeat: no-repeat;
          size: contain;
          image: url(~@/assets/img/construct/camera.png);
        }
      }
      span {
        position: relative;
        display: block;
        font-size: 14px;
        color: #feffff;
        padding-left: 1.5vh;

        &::after,
        &::before {
          display: block;
          content: "";
          position: absolute;
          left: 0;
          width: 3px;
          height: 6px;
        }
        &::before {
          top: 0;
          background-color: #f29b76;
        }
        &::after {
          bottom: 0;
          background-color: #ffffff;
        }
      }
    }

    &__scroll {
      height: 100%;
      overflow-y: auto;
      padding: 0 2vh;
    }

    &__body {
      height: 100%;
      padding: 2vh 0;
      box-sizing: border-box;
      overflow: hidden;

      &-title {
        justify-content: space-between;
        margin-bottom: 1.5vh;

        p {
          font-size: 1.8vh;
          line-height: 1.8vh;
        }

        .el-button-group {
          button {
            background-color: #112532;
            border-color: #2b6768;
            color: #2b6768;
            font-size: 1.2vh;
            padding: 0 1vh;
            min-height: 2.4vh;

            &.active {
              background-color: #2b6768;
              color: #ffffff;
            }
          }
        }
      }
    }

    &__item {
      background-color: rgba(16, 19, 23, 0.8);
      border: 1px solid #273d3d;
      padding: 2vh;
      margin-bottom: 1.5vh;

      &:last-child {
        margin: 0;
      }
    }
  }
  &-echarts {
    height: 26.3vh;
  }
}
</style>
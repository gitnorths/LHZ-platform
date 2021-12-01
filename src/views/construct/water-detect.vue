<template>
  <div class="construct construct-map">
    <div id="map"></div>
    <div class="sidebar">
      <div class="sidebar__header">
        <div class="sidebar__title">
          <p>水质检测</p>
          <span></span>
        </div>
        <div class="sidebar__tooltip">
          <div class="sidebar__tooltip-header">
            <h4>检测取样点</h4>
            <div class="sidebar__tooltip-right">
              <p><i style="background-color: #00ffcf"></i>W1</p>
              <p><i style="background-color: #41afe4"></i>W2</p>
            </div>
          </div>
          <div class="sidebar__tooltip-body">
            <p><span>1</span>W1: 太仓市浏河镇飞凤路尽头西</p>
            <p><span>2</span>W2: 太仓市浏河镇南稻香路</p>
          </div>
        </div>
      </div>
      <div class="sidebar__body">
        <div class="sidebar__scroll">
          <div class="sidebar__item">
            <div class="sidebar__title sidebar__body-title">
              <p>2016年10月至2017年9月浏河镇示范区监测点总氮变化</p>
            </div>
            <div class="echarts-box" id="myEcharts"></div>
          </div>
          <div class="sidebar__item">
            <div class="sidebar__title sidebar__body-title">
              <p>2016年10月至2017年9月浏河镇示范区监测点总磷变化</p>
            </div>
            <div class="echarts-box"></div>
          </div>
          <div class="sidebar__item">
            <div class="sidebar__title sidebar__body-title">
              <p>氨氮</p>
            </div>
            <div class="echarts-box"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { getImageUrl } from "@/utils";
import { defineComponent, onMounted, onUnmounted } from "vue";
import * as echarts from 'echarts'
import { baiduMap } from "@/components/baiduMap";
export default defineComponent({
  name: "AutoMonitor",
  setup() {
    let ak = "avfc2kLXwHDxyuKCPYpjU3V6AQEEQTE4";
    let echart = echarts;

    onMounted(() => {
      initBaiduMap(); // map
      initChart(); // echarts
    });

    onUnmounted(() => {
      echart.dispose;
    });

    // 初始化地图
    function initBaiduMap() {
      baiduMap(ak).then(() => {
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
              // require(`@/assets/img/construct/icon-location.png`),
              getImageUrl('construct', 'icon-location.png'),
              new BMap.Size(140, 116)
            );
            let markers = [];
            let point = new BMap.Point(121.186163, 31.589242);
            let point2 = new BMap.Point(121.186163, 31.509242);
            let marker = new BMap.Marker(point, {
              icon: myIcon,
              title: "1",
            });
            let marker2 = new BMap.Marker(point2, {
              icon: myIcon,
              title: "1",
            });
            map.addOverlay(marker);
            map.addOverlay(marker2);
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
            marker2.addEventListener("click", function () {
              map.openInfoWindow(infoWindow, point2); // 开启信息窗口
            });
          }
          map.setViewport(pointArray); //调整视野
        });
        // }, 5000);
      });
    }

    // 基础配置一下Echarts
    function initChart() {
      let chart = echart.init(document.getElementById("myEcharts"));
      // 把配置和数据放这里
      chart.setOption({
        xAxis: {
          type: "category",
          data: [
            "一月",
            "二月",
            "三月",
            "四月",
            "五月",
            "六月",
            "七月",
            "八月",
            "九月",
            "十月",
            "十一月",
            "十二月",
          ],
        },
        tooltip: {
          trigger: "axis",
        },
        yAxis: {
          type: "value",
        },
        series: [
          {
            data: [
              820, 932, 901, 934, 1290, 1330, 1320, 801, 102, 230, 4321, 4129,
            ],
            type: "line",
            smooth: true,
          },
        ],
      });
      window.onresize = function () {
        //自适应大小
        chart.resize();
      };
    }

    return { initBaiduMap, initChart };
  },
});
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
      image: url(./../../assets/img/effect/bg.png);
    }
  }

  #map {
    width: 100vw;
    height: 100vh;
  }
  .echarts-box {
    height: 26.3vh;
  }
}
</style>
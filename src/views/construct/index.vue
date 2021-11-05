<template>
  <div class="effect-layout">
    <el-container>
      <el-main>
        <div id="map"></div>
      </el-main>
    </el-container>
  </div>
</template>
<script>
import BMap from "BMap";
export default {
  name: "Construct",
  components: {},
  data() {
    return {};
  },
  methods: {
    createMap() {
      /* eslint-disable */
      // 创建Map实例
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
      let bdary = new BMap.Boundary();
      bdary.get("太仓市", function (rs) {
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
          var myIcon = new BMap.Icon(
            // "assets/img/construct/icon.png",
            require(`@/assets/img/construct/icon1.png`),
            new BMap.Size(140, 116)
          );
          var point = new BMap.Point(121.13215, 31.462382);
          var marker = new BMap.Marker(point, {
            icon: myIcon,
            title: '1'
          });
          map.addOverlay(marker);
          // 创建信息窗口
          var opts = {
            width: 200,
            height: 100,
            title: "故宫博物院",
          };
          var infoWindow = new BMap.InfoWindow(
            "地址：北京市东城区王府井大街88号乐天银泰百货八层",
            opts
          );
          // 点标记添加点击事件
          marker.addEventListener("click", function () {
            map.openInfoWindow(infoWindow, point); // 开启信息窗口
          });
        }
        map.setViewport(pointArray); //调整视野
      });
    },
  },
  mounted() {
    this.createMap();
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
    flex-direction: column;
  }
  .el-main {
    padding: 0;

    #map {
      width: 100vw;
      height: 100vh;
    }
  }
}
</style>
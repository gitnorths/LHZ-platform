<template>
  <div class="projects">
    <div class="lhz-header">
      <span>项目管理</span>
    </div>
    <div class="projects-main">
      <ul class="projects-ul">
        <li
          v-for="(item, i) in imgData"
          :key="i"
          :class="`animate__animated animate__zoomIn ${item.url}`"
        >
          <el-popover placement="top" :width="263" trigger="click" popper-class="lhz-poper">
            <template #reference>
              <div>
                <img
                  :src="require(`@/assets/img/projects/${item.url}.png`)"
                  alt=""
                />
                <p>{{ item.name }}</p>
              </div>
            </template>
            <ul>
              <li><span>项目建设领导小组</span></li>
              <li><span>项目建设工作小组</span></li>
              <li><span>技术咨询顾问小组</span></li>
            </ul>
          </el-popover>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: "Project",
  data() {
    return {
      imgData: [
        { name: "项目实施组织管理", url: "organization" },
        { name: "项目管理制度", url: "system" },
        { name: "项目建成后的运行管理", url: "run" },
      ],
    };
  },
};
</script>
<style lang="scss" scoped>
.projects {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  background: {
    repeat: no-repeat;
    size: 100%;
    image: url(~@/assets/img/projects/bg.png);
  }

  &-main {
    position: relative;
    width: 1300px;
    height: 100%;
  }

  &-ul {
    & > li {
      position: absolute;
      width: 230px;
      height: 290px;

      p {
        position: absolute;
        left: 0;
        bottom: 50px;
        padding: 0 50px;
        color: #ffffff;
        font-size: 30px;
        font-weight: bold;
        text-align: center;
      }

      &:nth-child(1) {
        left: 0;
        top: 50%;
        margin-top: -40px;
      }
      &:nth-child(2) {
        left: 50%;
        top: 50%;
        margin-left: -100px;
        margin-top: 150px;
      }
      &:nth-child(3) {
        right: 0;
        top: 50%;
        margin-top: -40px;

        p {
          padding: 0 30px;
        }
      }
    }
  }
}

@keyframes CLOUD-MOVE {
  0% {
    transform: translate(0);
  }
  33.33% {
    transform: translate(150px);
  }
  66.66% {
    transform: translate(-150px);
  }
  100% {
    transform: translate(0);
  }
}
</style>
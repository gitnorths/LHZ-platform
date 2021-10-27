<template>
  <div class="projects">
    <div class="lhz-header">
      <div class="lhz-header-left">
        <el-breadcrumb separator="|">
          <el-breadcrumb-item
            ><a href="/"
              ><i class="el-icon-s-home el-icon--left"></i>首页</a
            ></el-breadcrumb-item
          >
          <el-breadcrumb-item
            ><img :src="require(`@/assets/img/home/xy.png`)" alt />雨 25℃
            2020-07-28 15:53</el-breadcrumb-item
          >
        </el-breadcrumb>
      </div>
      <div class="lhz-header-center"><span>项目管理</span></div>
      <div class="lhz-header-right">
        <el-dropdown trigger="click">
          <span class="el-dropdown-link">
            <i class="el-icon-user el-icon--left"></i>张三 [农情管理部]<i
              class="el-icon-arrow-down el-icon--right"
            ></i>
          </span>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item
                ><router-link to="/login">退出</router-link></el-dropdown-item
              >
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </div>
    </div>
    <div class="projects-main">
      <ul class="projects-ul">
        <li
          v-for="(item, i) in imgData"
          :key="i"
          :class="`animate__animated animate__zoomIn ${item.url}`"
        >
          <el-popover
            placement="top"
            :width="263"
            trigger="click"
            popper-class="lhz-poper"
            v-if="i === 0"
          >
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
              <li @click="onShowPop('0')"><span>项目建设领导小组</span></li>
              <li @click="onShowPop('1')"><span>项目建设工作小组</span></li>
              <li @click="onShowPop('2')"><span>技术咨询顾问小组</span></li>
            </ul>
          </el-popover>
          <div v-else>
            <img
              :src="require(`@/assets/img/projects/${item.url}.png`)"
              alt=""
            />
            <p>{{ item.name }}</p>
          </div>
        </li>
      </ul>
    </div>
    <el-dialog
      v-model="dialogVisible"
      custom-class="lhz-dialog-projects"
      :title="dialogTitle"
      :width="dialogWidth"
      :before-close="handleClose"
    >
      <el-tabs type="card" v-model="tabsValue" @tab-click="handleClick">
        <el-tab-pane name="0" label="项目建设领导小组">
          <div class="projects-content">
            <div>
              <span
                >项目建设严格按照国家和农业部关于《农业基本建设项目管理规定》实施，实行项目建设管理责任制。
              </span>
            </div>
            <div>
              <span>（1）项目建设领导小组 </span>
            </div>
            <div>
              <span>
                为确保2018年国家农业环境突出问题治理专项“太仓市农业面源污染综合治理”试点项目建设顺利实施，经研究，决定调整太仓市农业环境突出问题治理专项试点项目领导小组，组成人员如下：
              </span>
            </div>
            <el-form size="mini" label-width="120px">
              <el-form-item label="组长：">赵建初 市政府副市长 </el-form-item>
              <el-form-item label="副组长：">
                王晨清 市政府办公室副主任
              </el-form-item>
              <el-form-item> 盛海峰 市农委主任 </el-form-item>
              <el-form-item label="成员：">
                曹炳华 市委农工办副主任
              </el-form-item>
              <el-form-item> 许子云 市发改委副主任 </el-form-item>
              <el-form-item> 沈美林 市科技局副局长 </el-form-item>
              <el-form-item> 王建良 市财政局副局长 </el-form-item>
              <el-form-item> 王海波 市国土局副局长 </el-form-item>
              <el-form-item> 陆振超 市水利局副局长 </el-form-item>
              <el-form-item> 冯瑞兴 市农委副主任 </el-form-item>
              <el-form-item> 周洪海 市环保局副局长 </el-form-item>
              <el-form-item> 钱敏芳 浏河镇人民政府副镇长 </el-form-item>
              <el-form-item> 陆 明 城厢镇党委副书记 </el-form-item>
              <el-form-item> 王建春 沙溪镇人民政府副镇长 </el-form-item>
              <el-form-item> 杨翠珠 璜泾镇人民政府副镇长 </el-form-item>
              <el-form-item> 龚惠琴 浮桥镇人民政府副镇长 </el-form-item>
              <el-form-item> 朱庆兰 双凤镇人民政府副镇长 </el-form-item>
              <el-form-item> 吴振键 科教新城管委会副主任 </el-form-item>
              <el-form-item> 朱建东 娄东街道办事处副主任 </el-form-item>
            </el-form>
            <div>
              <span>
                领导小组下设办公室，办公室设在市农业委员会，盛海峰同志兼任办公室主任，许子云、冯瑞兴同志兼任办公室副主任。
              </span>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane name="1" label="项目建设工作小组">Config</el-tab-pane>
        <el-tab-pane name="2" label="技术咨询顾问小组">Role</el-tab-pane>
      </el-tabs>
    </el-dialog>
  </div>
</template>
<script>
export default {
  name: "Project",
  data() {
    return {
      dialogVisible: false,
      dialogTitle: "",
      dialogWidth: "1200px",
      tabsValue: "",
      imgData: [
        { name: "项目实施组织管理", url: "organization" },
        { name: "项目管理制度", url: "system" },
        { name: "项目建成后的运行管理", url: "run" },
      ],
    };
  },
  methods: {
    handleClose() {
      this.dialogVisible = false;
    },
    onShowPop(value) {
      this.dialogVisible = true;
      this.tabsValue = value;
      this.dialogTitle = "项目实施组织管理";
    },
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

  .el-tabs {
    &__content {
      color: #ffffff;
      font-size: 20px;
    }
  }

  &-content {
    height: 630px;
    overflow: auto;
    span {
      color: #ffffff;
      font-size: 16px;
      display: inline-block;
      line-height: 28px;
      text-indent: 2em;
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
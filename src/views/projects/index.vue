<template>
  <div class="lhz-layout projects">
    <el-container>
      <el-header class="lhz-header">
        <div class="el-header__left">
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
        <div class="el-header__center"><span>项目管理</span></div>
        <div class="el-header__right">
          <el-dropdown trigger="click">
            <span class="el-dropdown-link">
              <i class="el-icon-user el-icon--left"></i>张三 [农情管理部]<i
                class="el-icon-arrow-down el-icon--right"
              ></i>
            </span>
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item>
                  <router-link to="/login">退出</router-link>
                </el-dropdown-item>
              </el-dropdown-menu>
            </template>
          </el-dropdown>
        </div>
      </el-header>
      <el-main>
        <ul class="el-main__ul">
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
              v-if="item.data.length > 0"
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
                <li
                  v-for="(data, idx) in item.data"
                  :key="idx"
                  @click="onShowPop(data.active, data.curr)"
                >
                  <span :title="data.name">{{ data.name }}</span>
                </li>
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
      </el-main>
    </el-container>
    <el-dialog
      v-model="dialogVisible"
      custom-class="lhz-dialog-projects"
      :title="dialogTitle"
      :width="dialogWidth"
      :before-close="handleClose"
    >
      <div class="lhz-tabs">
        <div class="lhz-tabs__header">
          <div class="lhz-tabs__nav">
            <div
              v-for="(item, i) in imgData[current].data"
              :key="i"
              @click="onChangeTab(item.active)"
              class="lhz-tabs__item"
              :class="active === item.active ? 'active' : ''"
            >
              {{ item.name }}
            </div>
          </div>
        </div>
        <div class="lhz-tabs__content" ref="tabContent" @scroll="handleScroll">
          <template v-if="current === 0">
            <p>
              <span
                >项目建设严格按照国家和农业部关于《农业基本建设项目管理规定》实施，实行项目建设管理责任制。
              </span>
            </p>
            <p id="tab1" class="conBlock">
              <span>（1）项目建设领导小组 </span>
            </p>
            <p>
              <span>
                为确保2018年国家农业环境突出问题治理专项“太仓市农业面源污染综合治理”试点项目建设顺利实施，经研究，决定调整太仓市农业环境突出问题治理专项试点项目领导小组，组成人员如下：
              </span>
            </p>
            <el-form size="mini" label-width="120px">
              <el-form-item label="组 &nbsp;&nbsp;长："
                ><span>赵建初 市政府副市长</span></el-form-item
              >
              <el-form-item label="副组长："
                ><span>王晨清 市政府办公室副主任</span></el-form-item
              >
              <el-form-item><span>盛海峰 市农委主任</span></el-form-item>
              <el-form-item label="成 &nbsp;&nbsp;员："
                ><span>曹炳华 市委农工办副主任</span></el-form-item
              >
              <el-form-item><span>许子云 市发改委副主任</span></el-form-item>
              <el-form-item><span>沈美林 市科技局副局长</span></el-form-item>
              <el-form-item><span>王建良 市财政局副局长</span></el-form-item>
              <el-form-item><span>王海波 市国土局副局长</span></el-form-item>
              <el-form-item><span>陆振超 市水利局副局长</span></el-form-item>
              <el-form-item><span>冯瑞兴 市农委副主任</span></el-form-item>
              <el-form-item><span>周洪海 市环保局副局长</span></el-form-item>
              <el-form-item
                ><span>钱敏芳 浏河镇人民政府副镇长</span></el-form-item
              >
              <el-form-item
                ><span>陆 &nbsp;&nbsp;明 城厢镇党委副书记</span></el-form-item
              >
              <el-form-item
                ><span>王建春 沙溪镇人民政府副镇长</span></el-form-item
              >
              <el-form-item
                ><span>杨翠珠 璜泾镇人民政府副镇长</span></el-form-item
              >
              <el-form-item
                ><span>龚惠琴 浮桥镇人民政府副镇长</span></el-form-item
              >
              <el-form-item
                ><span>朱庆兰 双凤镇人民政府副镇长</span></el-form-item
              >
              <el-form-item
                ><span>吴振键 科教新城管委会副主任</span></el-form-item
              >
              <el-form-item
                ><span>朱建东 娄东街道办事处副主任</span></el-form-item
              >
            </el-form>
            <p>
              <span>
                领导小组下设办公室，办公室设在市农业委员会，盛海峰同志兼任办公室主任，许子云、冯瑞兴同志兼任办公室副主任。
              </span>
            </p>
            <el-image
              style="width: 90%; margin: 0 auto; display: block"
              :src="require(`@/assets/img/projects/file1.png`)"
            ></el-image>
            <el-image
              style="width: 90%; margin: 0 auto 10px; display: block"
              :src="require(`@/assets/img/projects/file2.png`)"
            ></el-image>
            <p id="tab2" class="conBlock">
              <span>（2）项目建设工作小组 </span>
            </p>
            <p>
              <span>
                为确保2018年国家农业环境突出问题治理专项“太仓市农业面源污染综合治理”试点项目建设顺利实施，按照项目实施方案的要求，为完善项目建设工作机制，经太仓市农业环境突出问题治理专项试点项目领导小组同意，决定成立2018年太仓市农业面源污染综合治理（浏河片区）试点项目工作小组，负责项目的具体实施工作，工作小组成员名单如下：
              </span>
            </p>
            <el-form size="mini" label-width="120px">
              <el-form-item label="组 &nbsp;&nbsp;长："
                ><span>张 义 镇党委副书记、镇长</span></el-form-item
              >
              <el-form-item label="副组长："
                ><span>顾益新 镇党委委员、人大主席</span></el-form-item
              >
              <el-form-item><span>钱益芳 副镇长</span></el-form-item>
              <el-form-item label="成 &nbsp;&nbsp;员："
                ><span>曹炳华 市委农工办副主任</span></el-form-item
              >
              <el-form-item><span>刘传松 镇农技站站长</span></el-form-item>
              <el-form-item><span>沈雁冰 镇建管所所长</span></el-form-item>
              <el-form-item><span>龚建强 浏河水利站站长</span></el-form-item>
              <el-form-item
                ><span>仇 &nbsp;&nbsp;刚 东仓村村委会主任</span></el-form-item
              >
              <el-form-item
                ><span>陆 &nbsp;&nbsp;建 河桥村村委会主任</span></el-form-item
              >
              <el-form-item><span>顾解龙 新闸村村委会主任</span></el-form-item>
              <el-form-item><span>严利明 万安村村委会主任</span></el-form-item>
              <el-form-item><span>马宏飞 张桥村村委会主任</span></el-form-item>
              <el-form-item><span>沈建新 新塘村村委会主任</span></el-form-item>
            </el-form>
            <p>
              <span
                >工作小组下设办公室，办公室设在镇农技站，由刘传松同志兼任办公室主任。</span
              >
            </p>
            <el-image
              style="width: 90%; margin: 0 auto; display: block"
              :src="require(`@/assets/img/projects/file3.png`)"
            ></el-image>
            <el-image
              style="width: 90%; margin: 0 auto 10px; display: block"
              :src="require(`@/assets/img/projects/file4.png`)"
            ></el-image>
            <p id="tab3" class="conBlock">
              <span>（3）技术咨询顾问小组 </span>
            </p>
            <p>
              <span
                >本项目成立太仓市农业面源污染综合防治专家组，由江苏省农业科学院、苏州市农业科学院、中国科学院南京土壤研究所及江苏太湖地区农业科学研究所等有关专家组成，具体负责农业面源污染综合防治技术集成的研究、技术模式的提炼、技术规范制定，随时对项目的实施提供技术咨询和指导。</span
              >
            </p>
            <el-image
              style="width: 90%; margin: 0 auto 10px; display: block"
              :src="require(`@/assets/img/projects/file5.png`)"
            ></el-image>
            <p>
              <span style="display: block; text-align: center"
                >图8-1 项目组织机构图</span
              >
            </p>
          </template>
          <template v-else-if="current === 1">
            <p>
              <span
                >在项目建设过程中，建立和落实项目建设行政领导责任制、项目法人责任制、参建单位工程质量领导人责任制和工程质量终身负责制，实施招投标制度、监理制度、工程合同管理制度等。
              </span>
            </p>
            <p>
              <span
                >项目的核心目标是由合同界定的质量目标、工期目标、投资目标、安全目标。因此，建设管理的内容相应包括质量控制、进度控制、投资控制、安全控制、合同管理及协调各方关系等。
              </span>
            </p>
            <p id="tab1" class="conBlock">
              <span>（1）施工招投标制度</span>
            </p>
            <p>
              <span>
                将本项目工程适当分解后，把确定的施工任务发包。根据国家及省、市关于招投标的有关规定，本项目将采用委托招标与自行招标相结合的招标组织形式。委托招标时，项目建设单位将委托有相应资格的招标代理单位进行招标和有相应资格的单位编制标底。施工招标时，选择质量好、信誉高、价格合理、工期适当、施工方案可行的单位施工，并及时将中标通知书送至中标单位，签定施工合同。
              </span>
            </p>
            <p id="tab2" class="conBlock">
              <span>（2）工程建设监理制度</span>
            </p>
            <p>
              <span
                >根据《中华人民共和国建筑法》，在本项目的进行过程中，实施建设监理制度，委托有相应资质的监理单位进行全过程监理，包括施工阶段、竣工验收阶段的监理。委托监理企业建立现场建设监理机构，按规范、监理规划和细则项目监理等指导性文件，实施工程的质量、投资、进度、安全控制。</span
              >
            </p>
            <p id="tab3" class="conBlock">
              <span>（3）质量控制</span>
            </p>
            <p>
              <span
                >首先制定保证质量的各种措施，对承接项目任务的单位进行资质审查，对涉及质量的材料进行验收和控制，对设备进行预检控制，对有关方案进行审查。其次，对工程质量进行控制，对工序交接、隐蔽工程检查、设计的变更审核、质量事故的处理、质量和技术鉴证等进行控制，对出现违反质量规定的事件、容易形成质量隐患的做法采取措施予以制止。最后建立实施质量日记、质量汇报会等制度以了解和掌握质量动态，及时处理质量问题。</span
              >
            </p>
            <p id="tab4" class="conBlock">
              <span>（4）进度控制</span>
            </p>
            <p>
              <span
                >首先编制或审核项目实施总进度计划，审核项目阶段性进度计划，制定或审核材料供应采购计划，寻找出进度控制点，确定完成日期。其次建立反映工程进展情况的日记，进行工程进度检查对比，对有关进度及时计量并进行鉴证，召开现场进度协调会等。最后当实施进度的计划发生差异时必须及时制定对策。制定保证不突破总工期的措施，包括组织措施、技术措施、经济措施等。制定总工期突破后的补救措施，然后调整其他计划，建立新的平衡。</span
              >
            </p>
            <p id="tab5" class="conBlock">
              <span>（5）投资控制</span>
            </p>
            <p>
              <span
                >首先，进行风险预测，采取相应的防范措施。熟悉项目设计图纸与设计要求，分析项目价格构成因素，事前分析费用最容易突破的环节，从而明确投资控制的重点。其次，定期检查和对照费用支付情况，对项目费用超支和节约情况做出分析。提出改进方案，完善信息制度，掌握市场调价范围和幅度。最后，审核信息制度，掌握市场指导价范围和幅度。</span
              >
            </p>
            <p id="tab6" class="conBlock">
              <span>（6）安全控制</span>
            </p>
            <p>
              <span
                >根据《中华人民共和国建筑法》、《建筑安全生产监督管理规定》、《江苏省建设管理条例》等国家、省、市有关法规，在施工过程中，建筑工程安全生产管理必须坚持安全第一、预防为主的方针，建立健全安全生产的责任制度和群防群治制度。</span
              >
            </p>
            <p id="tab7" class="conBlock">
              <span>（7）合同管理</span>
            </p>
            <p>
              <span
                >本项目合同主要包括勘察设计合同、施工合同以及与建设工程相关的其它合同。其它合同包括买卖合同、借款合同、租赁合同、担保合同、委托合同、承揽合同等。合同管理由合同的主要条款、合同的订立和履行、合同的变更和解除、合同的违约责任等部分组成。按照本项目的规模和工期、项目的复杂程度、项目的单项工程的明确程度等，选择合同的具体类型、使用条款等。</span
              >
            </p>
            <p id="tab8" class="conBlock">
              <span>（8）协调</span>
            </p>
            <p>
              <span
                >项目的开发过程需要处理与规划、建设、交通、消防、环保、水、电、通讯等有关部门的协调问题。严格遵守国家有关规章制度，积极主动和各级职能部门配合，争取各部门的帮助，以保证建设项目的顺利进行。</span
              >
            </p>
            <p id="tab9" class="conBlock">
              <span>（9）竣工验收</span>
            </p>
            <p>
              <span
                >在接到施工单位的完工报告后，及时组织初验。该项目全部建成后，由项目建设领导小组以及发改、财政、农业、环保等其它部门的专业技术人员和专家组成的验收委员会验收项目，签发竣工验收报告。</span
              >
            </p>
          </template>
          <template v-else-if="current === 2">
            <p id="tab1" class="conBlock">
              <span>（1）突出宣传指导，加强技术服务</span>
            </p>
            <p>
              <span
                >农业面源污染综合防治是一项较新、面广、技术性很强的工作，全市各级农业部门在实施中，要依靠科技进步，充分利用广播、电视、报刊、网络等多种宣传工具，宣传有关政策、法规和技术知识及先进典型，提高广大群众防治农业面源污染的意识与技能。尤其重要的是要切实搞好全程技术服务，广泛开展印发有关技术资料、送科技下乡和实地指导等活动，使广大农民和农业从业人员了解掌握防治农业面源污染的基本知识。同时在科技服务中要注重科技创新，如结合生态农业建设、“菜篮子”工程、无公害农产品基地、畜禽养殖场、标准化建设、节能减排等工作，及时总结，推广成熟可行的农业面源污染防治实用技术，并积极引进、推广防治农业面源污染的新技术、新工艺。
              </span>
            </p>
            <p id="tab2" class="conBlock">
              <span>（2）建立健全监测体系，加强农业面源污染监测工作</span>
            </p>
            <p>
              <span
                >为项目绩效考评提供参考依据，项目单位委托当地环境监测部门在典型农田排水区（汇水区）设置水质监测点15个，自本项目立项开始至建设期结束，每季度对监测点水样进行采集，项目建成后每半年对监测点水样进行采集，并分析水质的变化情况。通过此次工程实施，建立健全涵盖农业环境信息统计、田间监测、流域监测、水质监测及风险评价等为主要内容的监测体系，以便及时、准确监测农业面源污染的负荷量和贡献率，为治理工作提供基础资料和技术支撑，为后续太湖流域农业面源污染综合治理示范区的建设提供科学决策依据。
              </span>
            </p>
            <p id="tab3" class="conBlock">
              <span>（3） 建立长效管理机制</span>
            </p>
            <p>
              <span
                >按照“谁污染谁治理，谁治理谁受益”的原则，构建中央政府指导、地方政府组织、企业和农业经营者负主体责任的治理机制。建立健全由公共财政、企业自筹和社会资金共同参与的多元化投入机制。推进农业环境问题第三方治理，培育专业化企业和组织，从事农业废弃物资源化利用和农业环境污染治理，推进设施运行管护等市场化运行模式，逐步实现有偿服务，探索建立保护与治理的长效机制。
              </span>
            </p>
            <p id="tab4" class="conBlock">
              <span>（4）依法行政，加大监管力度</span>
            </p>
            <p>
              <span
                >依据《中华人民共和国农业法》、《中华人民共和国环境保护法》等法律法规，认真履职，依法行政，加大对农业面源污染防治工作的监管力度。
              </span>
            </p>
          </template>
        </div>
      </div>
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
        {
          name: "项目实施组织管理",
          url: "organization",
          data: [
            { active: 0, curr: 0, name: "项目建设领导小组" },
            { active: 1, curr: 0, name: "项目建设工作小组" },
            { active: 2, curr: 0, name: "技术咨询顾问小组" },
          ],
        },
        {
          name: "项目管理制度",
          url: "system",
          data: [
            { active: 0, curr: 1, name: "施工招投标制度" },
            { active: 1, curr: 1, name: "工程建设监理制度" },
            { active: 2, curr: 1, name: "质量控制" },
            { active: 3, curr: 1, name: "进度控制" },
            { active: 4, curr: 1, name: "投资控制" },
            { active: 5, curr: 1, name: "安全控制" },
            { active: 6, curr: 1, name: "合同管理" },
            { active: 7, curr: 1, name: "协调" },
            { active: 8, curr: 1, name: "竣工验收" },
          ],
        },
        {
          name: "项目建成后的运行管理",
          url: "run",
          data: [
            { active: 0, curr: 2, name: "突出宣传指导，加强技术服务" },
            {
              active: 1,
              curr: 2,
              name: "建立健全监测体系，加强农业面源污染监测工作",
            },
            { active: 2, curr: 2, name: "建立长效管理机制" },
            { active: 3, curr: 2, name: "依法行政，加大监管力度" },
          ],
        },
      ],
      active: 0,
      current: 0,
    };
  },
  methods: {
    handleClose() {
      this.dialogVisible = false;
    },
    handleScroll() {
      let scrollTop = this.$refs.tabContent.scrollTop;
      let blocks = document.querySelectorAll(".conBlock");
      blocks.forEach((item, index) => {
        if (scrollTop >= item.offsetTop) {
          this.active = index;
        }
      });
    },
    onShowPop(index, curr) {
      console.log(index, curr);
      this.dialogVisible = true;
      this.dialogTitle = "项目实施组织管理";
      this.current = curr;
      setTimeout(() => {
        this.onChangeTab(index);
      }, 500);
    },
    onChangeTab(index) {
      this.active = index;
      let blocks = document.querySelectorAll(".conBlock");
      let step = 40; //滚动步长
      let currentScrollTop = this.$refs.tabContent.scrollTop;
      let targetOffsetTop = blocks[index].offsetTop;
      if (currentScrollTop > targetOffsetTop) {
        const smoothUp = () => {
          if (currentScrollTop >= targetOffsetTop) {
            if (currentScrollTop - targetOffsetTop >= step) {
              currentScrollTop -= step;
              setTimeout(smoothUp, 1);
            } else {
              currentScrollTop = targetOffsetTop - step;
            }
            this.$refs.tabContent.scrollTop = currentScrollTop + step;
          }
        };
        smoothUp();
      } else {
        const smoothDown = () => {
          if (currentScrollTop <= targetOffsetTop) {
            // 如果和目标相差距离大于等于step 就跳 step
            if (targetOffsetTop - currentScrollTop >= step) {
              currentScrollTop += step;
              setTimeout(smoothDown, 1);
            } else {
              // 否则直接跳到目标点，防止跳过
              currentScrollTop = targetOffsetTop - step;
            }
            this.$refs.tabContent.scrollTop = currentScrollTop + step;
          }
        };
        smoothDown();
      }
    },
  },
};
</script>
<style lang="scss" scoped>
.lhz-tabs {
  &__header {
    position: relative;
    margin-bottom: 30px;
    overflow: hidden;
  }
  &__nav {
    position: relative;
    float: left;
    border: 1px solid #2b6768;
    border-radius: 4px;
  }
  &__item {
    position: relative;
    padding: 0 20px;
    box-sizing: border-box;
    display: inline-block;
    list-style: none;
    font-weight: 500;
    height: 32px;
    line-height: 32px;
    color: #2b6768;
    font-size: 16px;
    border-color: #2b6768;
    border-left: 1px solid #2b6768;
    cursor: pointer;

    &:first-child {
      border-left: none;
    }

    &.active {
      background-color: #2b6768;
      color: #fff;
    }
  }
  &__content {
    position: relative;
    overflow-x: hidden;
    overflow-y: auto;
    height: 630px;

    p {
      margin-bottom: 5px;
      padding-right: 10px;
      text-indent: 2em;
    }
    span {
      color: #ffffff;
      font-size: 16px;
      line-height: 28px;
    }
  }
}
.projects {
  display: flex;
  align-items: center;
  justify-content: center;
  background: {
    repeat: no-repeat;
    size: 100%;
    image: url(~@/assets/img/projects/bg.png);
  }

  .el-main {
    &__ul {
      position: relative;
      width: 1300px;
      height: 100%;
      margin: 0 auto;

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
          margin-top: -100px;
        }
        &:nth-child(2) {
          left: 50%;
          top: 50%;
          margin-left: -100px;
          margin-top: 100px;
        }
        &:nth-child(3) {
          right: 0;
          top: 50%;
          margin-top: -100px;

          p {
            padding: 0 30px;
          }
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

  .el-header {
    height: 86px;
    background: {
      repeat: no-repeat;
      position: center;
      image: url(~@/assets/img/home/header.png);
    }

    &__left {
      padding-left: 50px;
      padding-bottom: 35px;
    }
    &__right {
      padding-right: 50px;
      padding-bottom: 35px;
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
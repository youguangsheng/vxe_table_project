<template>
  <div class="congested flexRow contain">
    <div class="my-resume">
      <div class="tiemline">
        <el-timeline>
          <el-timeline-item
            v-for="(item, index) in timeLineList"
            :key="index"
            :timestamp="item.timestamp"
            placement="top"
          >
            <el-card>
              <h3>{{ item.title }}</h3>
              <p class="mt30">{{ item.content }}</p>
            </el-card>
          </el-timeline-item>
        </el-timeline>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      timeLineList: [
        {
          timestamp: "2013/07/01",
          title: "大学本科毕业",
          content: "福建工程学院电子信息工程专业毕业"
        },
        {
          timestamp: "2013/07/25",
          title: "步入社会第一份工作",
          content: "福建骏鹏灯光事业部(吉艾普光影科技有限公司)工艺技术员"
        },
        {
          timestamp: "2018/04/30",
          title: "第一次离职",
          content: "离开干了近5年的岗位"
        },
        {
          timestamp: "2018/05/01",
          title: "开始学习web前端开发",
          content: "在家中独自学习web前端技术"
        },
        {
          timestamp: "2019/01/20",
          title: "开始我的web前端的工作",
          content: "入职福州吉勤信息科技有限公司,从事web前端工作"
        },
        {
          timestamp: "2019/12/22",
          title: "第二次离职",
          content: "协议离职,待业,无聊中开始磨炼自己的技术,自研一些项目"
        }
      ]
    };
  }
};
</script>

<style scoped lang="scss">
@import "./index.scss";
</style>

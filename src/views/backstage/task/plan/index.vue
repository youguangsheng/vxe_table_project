<template>
  <div class="table">
    <AddPlanDialog ref="addPlanDialog" />
    <div class="search-header flexRow">
      <div class="search-box mr5">
        <el-input type="text" placeholder="请输入搜索标题"></el-input>
      </div>
      <el-button type="primary">查询</el-button>
      <el-button type="success" @click="addPlan">新增</el-button>
      <el-button type="danger" @click="mutilRemove">删除</el-button>
    </div>
    <div class="table-li mt10">
      <vxe-grid
        border
        resizable
        align="center"
        height="100%"
        ref="xGrid"
        show-overflow
        show-header-overflow
        highlight-hover-row
        :loading="loading"
        :columns="tableColumn"
        :data="tableData"
      ></vxe-grid>
    </div>
  </div>
</template>

<script>
import AddPlanDialog from "@/components/dialog/addPlanDialog/index.vue";
export default {
  components: {
    AddPlanDialog
  },
  data() {
    return {
      allAlign: null,
      loading: false,
      tableColumn: [
        { type: "checkbox", width: 50 },
        {
          type: "seq",
          width: 50,
          slots: {
            header: () => {
              return [<div class="first-col">序号</div>];
            }
          }
        },
        { field: "taskTitle", title: "任务主题" },
        { field: "taskName", title: "任务内容" },
        { field: "createTime", title: "创建时间" },
        { field: "endTime", title: "结束时间" },
        { field: "taskStatus", title: "任务状态" },
        {
          field: "edit",
          title: "操作",
          slots: {
            default: ({ row }) => {
              return [
                <div class="flexRow table-btn-box">
                  <div class="edit-btn">
                    <el-link type="primary" onClick={() => this.revise(row)}>
                      编辑
                    </el-link>
                  </div>
                  <div class="edit-btn">
                    <el-link type="danger" onClick={() => this.remove(row)}>
                      删除
                    </el-link>
                  </div>
                </div>
              ];
            }
          }
        }
      ],
      tableData: []
    };
  },
  created() {
    // this.loading = true;
    this.tableData = [
      {
        taskTitle: "写个计划表格",
        taskName: "使用vxe搭建一个表格,实现一个任务列表",
        createTime: "2019-12-16",
        endTime: "2019-12-26",
        taskStatus: "未完成",
        taskId: 1
      }
    ];
  },
  methods: {
    addPlan() {
      this.$refs.addPlanDialog.Show();
    },
    mutilRemove() {
      /* 获取复选框选中的行数据 返回一个数组 */
      let checkboxRecords = this.$refs.xGrid.getCheckboxRecords();
      if (!checkboxRecords.length) return this.error("请选择一条数据操作");
      checkboxRecords.forEach(row => {
        let index = this.tableData.findIndex(
          item => item.taskId === row.taskId
        );
        this.tableData.splice(index, 1);
      });
    },
    revise(row) {
      if (row.taskId) this.$refs.addPlanDialog.Show(row.taskId);
    },
    remove(row) {
      let index = "";
      if (row.taskId) {
        index = this.tableData.findIndex(item => item.taskId === row.taskId);
      }
      this.tableData.splice(index, 1);
    }
  }
};
</script>

<style lang="scss" sscoped>
.table-btn-box {
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;

  .edit-btn {
    margin: 0 5px;
  }
}
</style>

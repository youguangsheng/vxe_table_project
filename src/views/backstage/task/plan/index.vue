<template>
  <div class="table">
    <AddPlanDialog ref="addPlanDialog" @selectTaskList="selectTaskList" />
    <div class="search-header flexRow">
      <div class="search-box mr5">
        <el-input type="text" placeholder="请输入搜索标题"></el-input>
      </div>
      <el-button type="primary" @click="selectTaskList">查询</el-button>
      <el-button type="success" @click="addPlan">新增</el-button>
      <el-button type="danger" @click="mutilRemove">删除</el-button>
    </div>
    <div class="congested mt10">
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
import API from "@/api/taskList.js";

export default {
  components: {
    AddPlanDialog
  },
  data() {
    return {
      allAlign: null,
      loading: false,
      tableColumn: [
        { type: "checkbox", width: 40 },
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
        { field: "startTime", title: "创建时间", width: 180, remoteSort: true },
        { field: "endTime", title: "结束时间", width: 180 },
        {
          field: "taskStatus",
          title: "任务状态",
          width: 120,
          filters: [
            { label: "未完成", value: 0 },
            { label: "已完成", value: 1 }
          ],
          filterMultiple: false,
          filterMethod: this.filterTaskStatusMethod,
          slots: {
            default: ({ row }) => {
              return [<div>{row.taskStatus === 0 ? "未完成" : "已完成"}</div>];
            }
          }
        },
        {
          field: "edit",
          title: "操作",
          width: 150,
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
                    <el-link type="success" onClick={() => this.complete(row)}>
                      完成
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
      tableData: [],
      delLineIds: []
    };
  },
  mounted() {
    this.selectTaskList();
  },
  methods: {
    addPlan() {
      this.$refs.addPlanDialog.Show();
    },
    mutilRemove() {
      /* 获取复选框选中的行数据 返回一个数组 */
      let checkboxRecords = this.$refs.xGrid.getCheckboxRecords();
      if (!checkboxRecords.length) return this.error("请选择一条数据操作");
      checkboxRecords.forEach(row => this.delLineIds.push(row.id));
      this.$confirm("确定要删除此任务,此操作不可逆?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          API.deleteTask({ delLineIds: this.delLineIds })
            .then(() => {
              this.delLineIds = [];
              this.selectTaskList();
            })
            .catch(() => {});
        })
        .catch(() => {});
    },
    revise(row) {
      if (row.id) this.$refs.addPlanDialog.Show(row.id);
    },
    remove(row) {
      this.$confirm("确定要删除此任务,此操作不可逆?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          if (!row.id) return;
          this.delLineIds.push(row.id);
          API.deleteTask({ delLineIds: this.delLineIds })
            .then(() => {
              this.delLineIds = [];
              this.selectTaskList();
            })
            .catch(() => {});
        })
        .catch(() => {});
    },
    complete(row) {
      if (!row.id) return;
      API.completeTask({ id: row.id })
        .then(() => this.selectTaskList())
        .catch(() => {});
    },
    selectTaskList() {
      API.getAllTaskList()
        .then(data => {
          this.tableData = data;
        })
        .catch(() => {});
    },
    filterTaskStatusMethod({ option, row }) {
      if (!this.tableData.length) return;
      return row.taskStatus === option.value;
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

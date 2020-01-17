<template>
  <div class="table">
    <SearchBar @select="selectTaskList" />
    <div class="congested mt5">
      <el-table :data="tableData" style="width: 100%" height="100%" border>
        <el-table-column type="selection" width="40"></el-table-column>
        <el-table-column
          show-overflow-tooltip
          prop="taskTitle"
          label="任务主题"
          width="150"
        >
        </el-table-column>
        <el-table-column
          show-overflow-tooltip
          prop="taskName"
          label="任务内容"
          width="150"
        >
        </el-table-column>
        <el-table-column
          show-overflow-tooltip
          prop="startTime"
          label="创建时间"
          width="150"
        >
        </el-table-column>
        <el-table-column
          show-overflow-tooltip
          prop="endTime"
          label="结束时间"
          width="150"
        >
        </el-table-column>
        <el-table-column
          show-overflow-tooltip
          prop="startTime"
          label="创建时间"
          width="150"
        >
        </el-table-column>
        <el-table-column
          show-overflow-tooltip
          prop="endTime"
          label="结束时间"
          width="150"
        >
        </el-table-column>
        <el-table-column
          show-overflow-tooltip
          prop="startTime"
          label="创建时间"
          width="150"
        >
        </el-table-column>
        <el-table-column
          show-overflow-tooltip
          prop="endTime"
          label="结束时间"
          width="150"
        >
        </el-table-column>
        <el-table-column
          fixed="right"
          prop="taskStatus"
          label="任务状态"
          width="300"
        >
          <template slot-scope="scope">
            <span>{{ scope.row.taskStatus === 1 ? "完成" : "未完成" }}</span>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
import SearchBar from "@/components/searchBar/index.vue";
import API from "@/api/taskList.js";
export default {
  components: {
    SearchBar
  },
  data() {
    return {
      tableData: []
    };
  },
  mounted() {
    this.selectTaskList();
  },
  methods: {
    selectTaskList() {
      API.getAllTaskList()
        .then(data => {
          this.tableData = data;
        })
        .catch(() => {});
    }
  }
};
</script>

<style></style>

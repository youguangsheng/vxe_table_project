<template>
  <el-dialog
    title="新增计划"
    width="500px"
    center
    show-close
    :close-on-click-modal="false"
    :visible.sync="dialogVisible"
    @close="Cansel"
  >
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm">
      <el-form-item
        label="任务标题"
        prop="taskTitle"
        :label-width="formLabelWidth"
      >
        <el-input v-model="ruleForm.taskTitle" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item
        label="任务内容"
        prop="taskName"
        :label-width="formLabelWidth"
      >
        <el-input v-model="ruleForm.taskName" autocomplete="off"></el-input>
      </el-form-item>
    </el-form>
    <div slot="footer" class="dialog-footer">
      <el-button @click="Cansel">取 消</el-button>
      <el-button type="primary" @click="submitForm" :loading="loading">
        确 定
      </el-button>
    </div>
  </el-dialog>
</template>

<script>
import API from "@/api/taskList.js";
export default {
  data() {
    return {
      dialogVisible: false,
      formLabelWidth: "80px",
      ruleForm: {
        taskTitle: "",
        taskName: ""
      },
      rules: {
        taskTitle: [
          { required: true, message: "请输入任务标题", trigger: "blur" }
        ],
        taskName: [
          { required: true, message: "请输入任务内容", trigger: "blur" }
        ]
      },
      loading: false,
      id: null
    };
  },
  methods: {
    Show(id = "") {
      this.dialogVisible = true;
      this.id = null;
      if (id) {
        this.id = id;
        this.getTaskDetail(id);
      }
    },
    Cansel() {
      this.dialogVisible = false;
      this.resetForm();
    },
    submitForm() {
      this.$refs.ruleForm.validate(valid => {
        if (valid) {
          this.saveTask();
        } else {
          // console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm() {
      this.$refs.ruleForm.resetFields();
    },
    saveTask() {
      let params = { ...this.ruleForm };
      if (this.id) params.id = this.id;
      this.loading = true;
      API.saveTask(params)
        .then(data => {
          this.success(data);
          this.$emit("selectTaskList");
          this.Cansel();
        })
        .catch(() => {})
        .finally(() => {
          this.loading = false;
        });
    },
    getTaskDetail(id) {
      API.getTaskDetail({ id }).then(data => {
        this.ruleForm.taskTitle = data.taskTitle;
        this.ruleForm.taskName = data.taskName;
      });
    }
  }
};
</script>

<style></style>

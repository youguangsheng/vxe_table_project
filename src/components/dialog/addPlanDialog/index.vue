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
    <el-form :model="ruleForm">
      <el-form-item label="任务标题" :label-width="formLabelWidth">
        <el-input v-model="ruleForm.taskTitle" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="任务内容" :label-width="formLabelWidth">
        <el-input v-model="ruleForm.taskName" autocomplete="off"></el-input>
      </el-form-item>
    </el-form>
    <div slot="footer" class="dialog-footer">
      <el-button @click="Cansel">取 消</el-button>
      <el-button type="primary" @click="submit">
        确 定
      </el-button>
    </div>
  </el-dialog>
</template>

<script>
export default {
  data() {
    return {
      dialogVisible: false,
      formLabelWidth: "80px",
      ruleForm: {},
      rules: []
    };
  },
  methods: {
    Show() {
      this.dialogVisible = true;
    },
    Cansel() {
      Object.assign(this.$data, this.$options.data());
    },
    submit() {
      this.dialogVisible = false;
    }
  }
};
</script>

<style></style>

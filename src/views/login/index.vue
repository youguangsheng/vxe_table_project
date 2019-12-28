<template>
  <div class="congested">
    <div class="login-view congested">
      <div class="login-box">
        <h3>登录</h3>
        <el-form
          ref="ruleForm"
          :model="ruleForm"
          :rules="rules"
          label-width="80px"
          class="demo-ruleForm"
        >
          <div class="row">
            <el-form-item label="用户" prop="userName">
              <el-input
                placeholder="请输入用户名"
                v-model="ruleForm.userName"
                autocomplete="off"
              ></el-input>
            </el-form-item>
          </div>

          <div class="row">
            <el-form-item label="密码" prop="password">
              <el-input
                placeholder="请输入密码"
                v-model="ruleForm.password"
                autocomplete="off"
              ></el-input>
            </el-form-item>
          </div>
        </el-form>
        <div class="flexRow login-btn">
          <el-button type="primary" class="button" @click="userLogin">
            登录
          </el-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import API from "@/api/userInfo.js";
export default {
  data() {
    return {
      ruleForm: {
        userName: undefined,
        password: undefined
      },
      rules: {
        userName: [
          { required: true, message: "请输入用户名", trigger: "blur" }
        ],
        password: [{ required: true, message: "请输入密码", trigger: "blur" }]
      }
    };
  },
  mounted() {
    window.addEventListener("keyup", this.handleKeyup);
  },
  methods: {
    userLogin() {
      // let params = this.ruleForm;
      // API.login(params).then(data => {
      // this.success(data);
      this.$router.replace("/backstage");
      // });
    },
    submitForm() {
      this.$refs.ruleForm.validate(valid => {
        if (valid) {
          this.userLogin();
        } else {
          // console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm() {
      this.$refs.ruleForm.resetFields();
    },
    handleKeyup(event) {
      const e = event || window.event || arguments.callee.caller.arguments[0];
      if (!e) return;
      const { keyCode } = e;
      if (keyCode === 13) this.submitForm();
    }
  }
};
</script>

<style scoped lang="scss">
@import "./index.scss";
</style>

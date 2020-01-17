<template>
  <div class="congested flexRow">
    <el-input placeholder="请输入内容" v-model.trim="input" clearable>
    </el-input>
    <el-button type="primary" class="ml5" @click="addTodo">新增</el-button>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  data() {
    return {
      input: ""
    };
  },
  mounted() {
    window.addEventListener("keyup", this.handleKeyup);
  },
  methods: {
    addTodo() {
      if (!this.input) return;
      this.SET_ADD_TODO(this.input);
      this.input = "";
    },
    handleKeyup(event) {
      const e = event || window.event || arguments.callee.caller.arguments[0];
      if (!e) return;
      const { keyCode } = e;
      if (keyCode === 13) this.addTodo();
    },
    ...mapMutations(["SET_ADD_TODO"])
  }
};
</script>

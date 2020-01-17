<template>
  <div class="search-header flexRow">
    <div class="search-box mr5">
      <el-input
        type="text"
        placeholder="请输入搜索标题"
        v-model="input"
      ></el-input>
    </div>
    <el-button type="primary" @click="select">查询</el-button>
    <el-button type="success" @click="add" v-if="showAdd">新增</el-button>
    <el-button type="danger" @click="mutilRemove" v-if="showRemove"
      >删除</el-button
    >
  </div>
</template>

<script>
export default {
  props: {
    showAdd: {
      type: Boolean,
      required: false,
      default: false
    },
    showRemmove: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  data() {
    return {
      input: ""
    };
  },
  methods: {
    select() {
      this.$emit("select", this.input);
    },
    add() {
      this.$emit("add");
    },
    mutilRemove() {
      this.$emit("mutilRemove");
    }
  }
};
</script>

<style scoped lang="scss">
@import "./index.scss";
</style>

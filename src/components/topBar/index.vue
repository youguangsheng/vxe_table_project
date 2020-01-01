<template>
  <div class="top-bar flexRow">
    <div class="title ml20">欢迎，来到samco的个人空间！</div>
    <div class="user-setting mr20">
      <div class="user-photo mr10">
        <img
          src="https://pbs.twimg.com/profile_images/486402682412740608/0x8vfkM9_400x400.png"
          alt=""
        />
      </div>
      <div class="user-name">samco</div>
      <div class="icon" @click="logout">
        <icon name="logout" class="icon ml10"></icon>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    logout() {
      this.$confirm("确定退出当前登录?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          window.location.replace("/");
        })
        .catch(() => {});
    }
  }
};
</script>

<style scoped lang="scss">
@import "/index.scss";
</style>

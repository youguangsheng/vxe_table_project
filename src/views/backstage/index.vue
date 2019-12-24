<template>
  <div class="congested contain">
    <div class="side-bar">
      <SideBar />
    </div>
    <div class="main-content">
      <router-view />
    </div>
  </div>
</template>

<script>
import SideBar from "@/components/sideBar/index.vue";
export default {
  components: {
    SideBar
  }
};
</script>
<style scoped lang="scss">
@import "./index.scss";
</style>

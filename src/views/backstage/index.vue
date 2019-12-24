<template>
  <div class="congested contain">
    <div class="side-bar">
      <SideBar />
    </div>
    <div class="main-content">
      <TopBar />
      <router-view />
    </div>
  </div>
</template>

<script>
import SideBar from "@/components/sideBar/index.vue";
import TopBar from "@/components/topBar/index.vue";
export default {
  components: {
    SideBar,
    TopBar
  }
};
</script>
<style scoped lang="scss">
@import "./index.scss";
</style>

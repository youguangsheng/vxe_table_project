<template>
  <div class="congested contain">
    <div class="side-bar">
      <SideBar />
    </div>
    <div class="main-content flexColumn">
      <div class="top-bar">
        <TopBar />
      </div>
      <div class="view">
        <router-view />
      </div>
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

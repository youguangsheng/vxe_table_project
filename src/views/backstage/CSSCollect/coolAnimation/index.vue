<template>
  <div class="congested flexRow contain">
    <div class="first-box">
      <Loading />
    </div>
    <div class="first-box">
      <HoverBtn />
    </div>
    <div class="first-box">
      <HoverText />
    </div>
    <div class="first-box">
      <HoverBtn_2 />
    </div>
  </div>
</template>

<script>
import Loading from "@/components/CSSAnimate/loading/index.vue";
import HoverBtn from "@/components/CSSAnimate/hoverBtn/index.vue";
import HoverBtn_2 from "@/components/CSSAnimate/hoverBtn_2/index.vue";
import HoverText from "@/components/CSSAnimate/hoverText/index.vue";
export default {
  components: {
    Loading,
    HoverBtn,
    HoverText,
    HoverBtn_2
  }
};
</script>

<style scoped lang="scss">
@import "./index.scss";
</style>

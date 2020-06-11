<template>
  <div class="congest">
    <div class="touch-contain">
      <div
        class="touch-box"
        id="box"
        @pan="onPan"
        :style="{ left: `${distanceX}px`, top: `${distanceY}px` }"
      >
        <div class="touch-box-text">
          <div class="title">拖我移动</div>
          <div class="record-box">
            <div class="flexRow">
              <div class="label">Top:</div>
              <div>{{ `${distanceX}px` }}</div>
            </div>
            <div class="flexRow">
              <div class="label">Left:</div>
              <div>{{ `${distanceY}px` }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AnyTouch from "any-touch";
export default {
  data() {
    return {
      distanceX: 0,
      distanceY: 0
    };
  },
  mounted() {
    // const box = document.getElementById("box");
    new AnyTouch(this.$el);
  },
  methods: {
    onPan(e) {
      console.log(e);
      this.distanceX += e.deltaX;
      this.distanceY += e.deltaY;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "./index.scss";
</style>

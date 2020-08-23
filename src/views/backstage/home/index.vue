<template>
  <div class="congested">
    <div class="head flexRow">
      <div class="flex-1">
        <div class="temp congested" id="temp"></div>
      </div>
      <div class="flex-1"></div>
    </div>
  </div>
</template>

<script>
import echarts from "echarts";
import { tempOptions } from "@/common/json/echart.js";
export default {
  data() {
    return {};
  },
  mounted() {
    this.drawChart();
  },
  methods: {
    drawChart() {
      let temp = document.getElementById("temp");
      echarts.init(temp).setOption(tempOptions);
    }
  }
};
</script>

<style scoped lang="scss">
.head {
  width: 100%;
  height: 300px;
}
</style>

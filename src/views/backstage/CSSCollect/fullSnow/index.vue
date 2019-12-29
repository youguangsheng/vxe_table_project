<template>
  <div class="congested contain">
    <h1>FULL SNOW</h1>
    <div class="snow" v-for="(item, index) in 200" :key="index"></div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
@import url("https://fonts.googleapis.com/css?family=Raleway:400,400i,700");
@import "./index.scss";
</style>

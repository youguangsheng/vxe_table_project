<template>
  <div class="congested content">
    <ul>
      <li v-for="(todo, index) in todos" :key="index">
        <div class="index">{{ `${index + 1}、` }}</div>
        <div class="todo">{{ todo }}</div>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["todos"])
  }
};
</script>

<style scoped lang="scss">
@import "./index.scss";
</style>

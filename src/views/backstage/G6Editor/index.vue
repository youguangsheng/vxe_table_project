<template>
  <div class="congested">
    <div id="mountNode"></div>
  </div>
</template>

<script>
import G6 from "@antv/g6";
export default {
  mounted() {
    // Dom挂载之后执行
    this.G6Editor();
  },
  methods: {
    G6Editor() {
      const data = {
        nodes: [
          {
            id: "node1",
            x: 100,
            y: 300
          },
          {
            id: "node2",
            x: 500,
            y: 300
          }
        ],
        edges: [
          {
            id: "edge1",
            target: "node2",
            source: "node1"
          }
        ]
      };
      let mountNode = document.getElementById("mountNode"); //获取元素id
      const graph = new G6.Graph({
        container: mountNode,
        width: 1000,
        height: 1000
      });
      graph.read(data);
    }
  }
};
</script>

<style scoped lang="scss"></style>

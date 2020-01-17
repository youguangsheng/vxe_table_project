<template>
  <div class="side-bar-contain flexColumn congested">
    <div class="side-bar-header">
      <h3>MYMENU</h3>
    </div>
    <div class="side-bar-body">
      <el-menu
        default-active="1-4-1"
        class="el-menu-vertical-demo"
        :collapse="isCollapse"
        :router="true"
        background-color="#333"
        text-color="#fff"
        active-text-color="#f7d828"
      >
        <div :index="item.path" v-for="(item, index) in menuList" :key="index">
          <el-submenu v-if="item.children.length" :index="`${index}`">
            <template slot="title">
              <icon :name="item.icon" class="icon"></icon>
              <span slot="title">{{ item.menuName }}</span>
            </template>
            <el-menu-item-group>
              <el-menu-item
                :index="`${index}-${subIndex}`"
                v-for="(subItem, subIndex) in item.children"
                :key="index + subIndex"
                :route="{ path: subItem.path }"
              >
                {{ subItem.menuName }}
              </el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-menu-item v-else :route="{ path: item.path }" :index="`${index}`">
            <icon :name="item.icon" class="icon"></icon>
            <span slot="title">{{ item.menuName }}</span>
          </el-menu-item>
        </div>
      </el-menu>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isCollapse: false,
      menuList: [
        {
          menuName: "首页",
          icon: "home",
          path: "/backstage/home",
          children: []
        },
        {
          menuName: "任务列表",
          icon: "task",
          path: "/backstage/task",
          children: [
            {
              menuName: "计划列表",
              path: "/backstage/task/plan",
              children: []
            },
            {
              menuName: "完成列表",
              path: "/backstage/task/complete",
              children: []
            },
            {
              menuName: "未完成列表",
              path: "/backstage/task/undone",
              children: []
            },
            {
              menuName: "删除列表",
              path: "/backstage/task/remove",
              children: []
            }
          ]
        },
        {
          menuName: "经历",
          icon: "resume",
          path: "/backstage/resume",
          children: []
        },
        {
          menuName: "todoMVC",
          icon: "todo-list",
          path: "/backstage/todoMVC",
          children: []
        },
        {
          menuName: "CSS收藏",
          icon: "CSS-3",
          path: "/backstage/CSSCollect",
          children: [
            {
              menuName: "酷炫动画",
              path: "/backstage/CSSCollect/coolAnimation"
            },
            {
              menuName: "随机粒子动画",
              path: "/backstage/CSSCollect/fullSnow"
            }
          ]
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
@import "index.scss";
</style>

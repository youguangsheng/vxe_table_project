<template>
  <div class="contain congested">
    <div class="congested todoMVC">
      <div class="content">
        <div class="header">
          <InputTodo />
        </div>
        <div class="todo-list">
          <TodoList />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TodoList from "@/components/todoList/index.vue";
import InputTodo from "@/components/inputTodo/index.vue";
export default {
  components: {
    TodoList,
    InputTodo
  },
  data() {
    return {
      input: ""
    };
  },
  methods: {
    addTodo() {}
  }
};
</script>

<style scoped lang="scss">
@import "./index.scss";
</style>

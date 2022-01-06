<template>
  <div class="todo-wrap">
    <todo-header></todo-header>
    <todo-main :works="works"></todo-main>
    <todo-footer :works="works"></todo-footer>
  </div>
</template>

<script>
import TodoFooter from "./todo-footer.vue";
import todoHeader from "./todo-header.vue";
import TodoMain from "./todo-main.vue";
export default {
  components: { todoHeader, TodoMain, TodoFooter },
  props: {
    works: Array,
  },
};
</script>

<style lang="css" scoped>
.todo-wrap {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}
</style>


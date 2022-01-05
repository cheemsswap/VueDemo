<template>
  <div class="todo-wrap">
    <todo-header ref="todoheader"></todo-header>
    <todo-main ref="todomain" :works="works"></todo-main>
    <todo-footer ref="todofooter" :works="works"></todo-footer>
  </div>
</template>

<script>
import todoFooter from "./todo-footer.vue";
import todoHeader from "./todo-header.vue";
import todoMain from "./todo-main.vue";
export default {
  components: { todoHeader, todoMain, todoFooter },
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


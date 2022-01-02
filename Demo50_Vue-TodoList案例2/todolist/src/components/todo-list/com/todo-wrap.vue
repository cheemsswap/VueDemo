<template>
  <div class="todo-wrap">
    <todo-header :addWork="addWork"></todo-header>
    <todo-main :works="works" :deleteWork="deleteWork"></todo-main>
    <todo-footer :works="works" :updataWork="updataWork"></todo-footer>
  </div>
</template>

<script>
import todoHeader from "./todo-header.vue";
import TodoMain from "./todo-main.vue";
import TodoFooter from "./todo-footer.vue";
export default {
  props: ["works", "addWork", "updataWork", "deleteWork"],
  components: { todoHeader, TodoMain, TodoFooter },
};
</script>

<style lang="css" scoped>
.todo-wrap {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}
</style>


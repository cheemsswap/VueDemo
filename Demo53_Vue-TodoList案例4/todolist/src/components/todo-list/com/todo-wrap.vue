<template>
  <div class="todo-wrap">
    <todo-header :addWork="addWork"></todo-header>
    <todo-main
      :works="works"
      :updataWorkDeoe="updataWorkDeoe"
      :deleteWork="deleteWork"
    ></todo-main>
    <todo-footer
      :works="works"
      :updataWorkAllDeoe="updataWorkAllDeoe"
      :deleteWorkIsDeoeTrue="deleteWorkIsDeoeTrue"
    ></todo-footer>
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
    //提供给header 添加数据
    addWork: Function,
    //提供给main->item 修改是否选中
    updataWorkDeoe: Function,
    //提供给main->item 删除指定id的
    deleteWork: Function,
    //提供给footer 全选和取消全选
    updataWorkAllDeoe: Function,
    //提供给 footer 删除所有已选的
    deleteWorkIsDeoeTrue: Function,
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


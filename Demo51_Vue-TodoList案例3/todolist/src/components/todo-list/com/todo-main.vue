<template>
  <ul class="todo-main">
    <todo-main-item
      v-for="work of works"
      :key="work.id"
      :work="work"
      :updataWorkDeoe="updataWorkDeoe"
      :deleteWork="deleteWork"
    ></todo-main-item>
  </ul>
</template>

<script>
import todoMainItem from "./todo-main-item.vue";
export default {
  components: { todoMainItem },
  props: {
    works: Array,
    //提供给header 添加数据
    updataWorkDeoe: Function,
    //删除指定id的work
    deleteWork: Function,
  },
};
</script>

<style>
/*main*/
.todo-main {
  margin-left: 0px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding: 0px;
}

.todo-empty {
  height: 40px;
  line-height: 40px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding-left: 5px;
  margin-top: 10px;
}
</style>
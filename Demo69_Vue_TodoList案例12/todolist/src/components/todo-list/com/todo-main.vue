<template>
  <ul class="todo-main">
    <transition-group
      name="animate__animated animate__bounce"
      :appear="true"
      enter-active-class="animate__fadeInTopRight"
      leave-active-class="animate__fadeOutTopLeft"
    >
      <todo-main-item
        v-for="work of works"
        :key="work.id"
        :work="work"
      ></todo-main-item>
    </transition-group>
  </ul>
</template>

<script>
import "animate.css";
import todoMainItem from "./todo-main-item.vue";
export default {
  components: { todoMainItem },
  props: {
    works: Array,
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
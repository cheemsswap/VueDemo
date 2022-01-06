<template>
  <div id="app">
    <todo-container></todo-container>
  </div>
</template>

<script>
import TodoContainer from "./components/todo-list/todo-container.vue";
export default {
  name: "App",
  components: { TodoContainer },
};
</script>

<style>
</style>

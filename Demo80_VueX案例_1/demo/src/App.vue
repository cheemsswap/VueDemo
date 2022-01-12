<template>
  <div id="app">
    <Demo />
    <Demo2 />
  </div>
</template>

<script>
import Demo from "./components/demo.vue";
import Demo2 from "./components/demo2.vue";
export default {
  name: "App",
  components: { Demo, Demo2 },
};
</script>

<style>
</style>

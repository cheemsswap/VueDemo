<template>
  <div id="app">
    <demo />
  </div>
</template>

<script>
import Demo from "./components/demo.vue";
export default {
  name: "App",
  components: { Demo },
};
</script>

<style>
body {
  width: 100%;
  overflow: hidden;
}
</style>

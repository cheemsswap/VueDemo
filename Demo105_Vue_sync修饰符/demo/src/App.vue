<template>
  <div id="app">
    <h1>小明的今年{{ year }}岁了</h1>
    <hr />
    <h2>不使用sync</h2>
    <sync-1 v-bind:value="year" @update:value="year = $event" />
    <hr />
    <h2>使用sync</h2>
    <sync-1 :value.sync="year" />
    <hr />
  </div>
</template>

<script>
import Sync1 from "./components/Sync1.vue";
export default {
  name: "App",
  data() {
    return {
      year: "???",
    };
  },
  components: { Sync1 },
};
</script>

<style>
</style>

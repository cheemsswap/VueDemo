<template>
  <div id="app">
    <grandpa v-bind="arrts" @click="fun" />
  </div>
</template>

<script>
import Grandpa from "./components/Grandpa.vue";
export default {
  name: "App",
  components: { Grandpa },
  data() {
    return {
      arrts: {
        a: "aaa",
        b: "bbb",
        c: "ccc",
        d: "ddd",
      },
    };
  },
  methods: {
    fun() {
      alert("!!!");
    },
  },
};
</script>

<style>
</style>

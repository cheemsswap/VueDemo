<template>
  <button @click="isShow = !isShow">挂载/卸载</button>
  <Demo v-if="isShow" />
</template>

<script>
import Demo from "./components/Demo.vue";
import { ref } from "vue";
export default {
  name: "App",
  setup() {
    let isShow = ref(true);
    return {
      isShow: isShow,
    };
  },
  components: {
    Demo,
  },
};
</script>

<style>
</style>
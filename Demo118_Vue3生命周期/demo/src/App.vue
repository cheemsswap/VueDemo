<template>
  <button @click="isShow = !isShow">挂载/卸载 demo组件</button>
  <Demo v-if="isShow" />
</template>

<script>
import Demo from "./components/Demo.vue";
import { ref } from "vue";
export default {
  name: "App",
  components: {
    Demo,
  },
  setup() {
    let isShow = ref(true);
    return { isShow: isShow };
  },
};
</script>

<style>
</style>
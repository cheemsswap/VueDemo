<template>
  <h2>鼠标的坐标:</h2>
  <h3>x:{{ point.x }},y:{{ point.y }}</h3>
</template>

<script>
import usePoint from "../hook/usePoint";
export default {
  name: "App",
  setup(props, ctx) {
    return {
      point: usePoint(),
    };
  },
};
</script>

<style>
</style>
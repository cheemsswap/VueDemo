<template>
  <div>
    <h2>学校名称:{{ name }}</h2>
    <h2>学校地址:{{ address }}</h2>
    <button @click="showName">点我获取名称</button>
  </div>
</template>

<script>
import { mixin1, mixin2 } from "../mixin";
export default {
  data() {
    return {
      name: "家里蹲大学",
      address: "家里",
    };
  },
  mixins: [mixin1, mixin2],
};
</script>

<style>
</style>
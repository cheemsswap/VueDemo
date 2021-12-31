<template>
  <div>
    <h2>学生姓名:{{ name }}</h2>
    <h2>学生年龄:{{ age }}</h2>
    <button @click="showName">点我获取名称</button>
  </div>
</template>

<script>
import { mixin1, mixin2 } from "../mixin";
export default {
  data() {
    return {
      name: "张三",
      age: 18,
    };
  },
  mixins: [mixin1, mixin2],
};
</script>

<style>
</style>
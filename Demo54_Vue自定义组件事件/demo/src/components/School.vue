<template>
  <div>
    <h2>姓名:{{ name }}</h2>
    <h2>年龄:{{ age }}</h2>
    <button @click="fun">点击给APP组件传递我的姓名</button>
    <button @click="fun2">销毁当前自定义组件</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "张三",
      age: 13,
    };
  },
  methods: {
    fun() {
      this.$emit("zdy", this.name);
    },
    fun2() {
      this.$off("zdy");
    },
  },
};
</script>

<style>
</style>
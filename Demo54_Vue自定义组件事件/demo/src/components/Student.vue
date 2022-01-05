<template>
  <div>
    <h2>学校名称:{{ name }}</h2>
    <h2>学校地址:{{ address }}</h2>
    <button @click="fun">点击给APP组件传递我的学校名称</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "家里蹲",
      address: "家里",
    };
  },
  methods: {
    fun() {
      this.$emit("zdy", this.name);
    },
  },
};
</script>

<style>
</style>
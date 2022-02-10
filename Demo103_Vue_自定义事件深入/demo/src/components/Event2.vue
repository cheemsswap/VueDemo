<template>
  <div>
    <button @click="fun1">1</button>
    <button @click="fun2">2</button>
  </div>
</template>

<script>
export default {
  methods: {
    fun1() {
      this.$emit("click", "哈哈哈");
    },
    fun2() {
      this.$emit("xxx", "嘿嘿嘿");
    },
  },
};
</script>

<style scoped>
div {
  background-color: blueviolet;
  padding: 30px;
}
</style>
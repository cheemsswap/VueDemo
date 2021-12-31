<template>
  <div>
    <h2 v-text="name" ref="name"></h2>
    <h2>学校地址:{{ address }}</h2>
    <button @click="showDom">点我获取学校名称dom</button>
  </div>
</template>

<script>
export default {
  name: "School",
  data() {
    return {
      name: "家里蹲大学",
      address: "家里",
    };
  },
  methods: {
    showDom() {
      console.log(this.$refs.name);
    },
  },
};
</script>

<style>
h2 {
  background-color: aqua;
}
</style>
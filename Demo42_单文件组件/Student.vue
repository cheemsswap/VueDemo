<template>
  <div class="s">
    <h2>姓名:{{ name }}</h2>
    <h2>年龄:{{ age }}</h2>
    <button @click="showName">点我显示姓名</button>
  </div>
</template>

<script>
export default {
  name: "Student",
  data() {
    return {
      name: "张三",
      age: 22,
    };
  },
  methods: {
    showName() {
      alert(this.name);
    },
  },
};
</script>

<style>
.s {
  background-color: orange;
}
</style>
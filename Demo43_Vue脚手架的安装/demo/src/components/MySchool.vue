<template>
  <div class="s">
    <h2>学校名称:{{ name }}</h2>
    <h2>学校地址:{{ address }}</h2>
    <button @click="showName">点我显示学校名称</button>
  </div>
</template>

<script>
export default {
  name: "MySchool",
  data() {
    return {
      name: "家里蹲大学",
      address: "家里",
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
  background-color: orangered;
}
</style>
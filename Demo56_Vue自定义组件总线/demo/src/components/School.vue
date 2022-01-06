<template>
  <div>
    <h2>学校名称:{{ name }}</h2>
    <h2>学校地址:{{ address }}</h2>
    <h2>收到的数据:{{ text }}</h2>
    <button @click="fun">点击给Student组件传递数据</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "家里蹲大学",
      address: "家里",
      text: "",
    };
  },
  mounted() {
    this.x.$on("UpdateSchoolText", (text) => {
      this.text = text;
    });
  },
  methods: {
    fun() {
      this.x.$emit("UpdateStudentText", this.name);
    },
  },
};
</script>

<style scoped>
div {
  margin: 30px;
  background-color: aqua;
}
</style>
<template>
  <div>
    <h2>学生姓名:{{ name }}</h2>
    <h2>学生年龄:{{ age }}</h2>
    <h2>收到的数据:{{ text }}</h2>
    <button @click="fun">点击给School组件传递数据</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "张三",
      age: 18,
      text: "",
    };
  },
  mounted() {
    this.x.$on("UpdateStudentText", (text) => {
      this.text = text;
    });
  },
  methods: {
    fun() {
      this.x.$emit("UpdateSchoolText", this.name);
    },
  },
};
</script>

<style scoped>
div {
  margin: 30px;
  background-color: antiquewhite;
}
</style>
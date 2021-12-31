<template>
  <div>
    <h2>学生姓名:{{ name }}</h2>
    <h2>学生性别:{{ sex }}</h2>
    <h2>学生年龄:{{ age }}</h2>
    <hr />
  </div>
</template>

<script>
export default {
  //   props: ["name", "sex", "age"],
  props: {
    name: {
      typeof: String,
      required: true,
    },
    sex: {
      typeof: String,
      required: true,
    },
    age: {
      typeof: Number,
      default: 18,
    },
  },
};
</script>

<style>
</style>
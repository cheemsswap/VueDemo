<template>
  <div id="app">
    <Student
      v-for="s in Students"
      :key="s.name"
      :name="s.name"
      :sex="s.sex"
      :age="s.age"
    ></Student>
  </div>
</template>

<script>
import Student from "./components/Student.vue";
export default {
  name: "App",
  data() {
    return {
      Students: [
        { name: "张三", sex: "男", age: 101 },
        { name: "李四", sex: "男" },
        { name: "王五", sex: "男", age: 50 },
      ],
    };
  },
  components: { Student },
};
</script>

<style>
</style>

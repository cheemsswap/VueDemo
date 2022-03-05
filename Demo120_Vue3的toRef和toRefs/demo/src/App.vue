<template>
  <h2>姓名:{{ name }}</h2>
  <h2>年龄:{{ age }}</h2>
  <h2>工作:{{ jobname }}</h2>
  <h2>薪水:{{ salary }}</h2>
  <button @click="age++">年龄+1</button>
  <button @click="salary++">薪水+1</button>
</template>

<script>
import { reactive, toRef, toRefs } from "vue";
export default {
  name: "App",
  setup() {
    let data = reactive({
      person: {
        name: "John",
        age: 18,
        job: {
          jobname: "前端开发",
          salary: 10,
        },
      },
    });
    return {
      ...toRefs(data.person),
      jobname: toRef(data.person.job, "jobname"),
      salary: toRef(data.person.job, "salary"),
    };
  },
};
</script>

<style>
</style>
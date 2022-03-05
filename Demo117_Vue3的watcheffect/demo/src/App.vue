<template>
  <h2>{{ sum }}</h2>
  <button @click="sum++">点我+1</button>
  <hr />
  <h2>{{ name }}</h2>
  <button @click="name += '~'">点我+~</button>
  <hr />
  <h2>姓名:{{ person.name }}</h2>
  <h2>年龄:{{ person.age }}</h2>
  <h2>薪水:{{ person.job.salary }}</h2>
  <button @click="person.name += '!'">点我姓名+！</button>
  <button @click="person.age++">点我年龄增长</button>
  <button @click="person.job.salary++">涨薪</button>
</template>

<script>
import { ref, reactive, watch, watchEffect } from "vue";
export default {
  name: "App",
  setup() {
    let sum = ref(0);
    let name = ref("张三");
    let person = reactive({
      name: "张三",
      age: 18,
      job: {
        name: "前端工程师",
        salary: 10,
      },
    });
    // 智能监听 注重过程 改自己也只会执行一次
    watchEffect(() => {
      let n = sum.value;
      console.log(sum.value++);
    });
    return { sum, name, person };
  },
};
</script>

<style>
</style>

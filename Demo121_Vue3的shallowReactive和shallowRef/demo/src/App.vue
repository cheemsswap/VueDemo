<template>
  <h1>shallowRef: 只能对基本数据类型响应式 无法对对象类型做响应式</h1>
  <h2>x:{{ shallowRef_x }}</h2>
  <button @click="shallowRef_x++">点我x+1</button>
  <h2>姓名:{{ shallowRef_person.name }}</h2>
  <h2>年龄:{{ shallowRef_person.age }}</h2>
  <h2>薪水:{{ shallowRef_person.job.salary }}</h2>
  <button @click="shallowRef_person.age++">增长年龄</button>
  <button @click="shallowRef_person.job.salary++">增长薪水</button>
  <hr />
  <h1>shallowReactive: 对象响应式只能监听到一层</h1>
  <h2>姓名:{{ shallowReactive_person.name }}</h2>
  <h2>年龄:{{ shallowReactive_person.age }}</h2>
  <h2>薪水:{{ shallowReactive_person.job.salary }}</h2>
  <button @click="shallowReactive_person.age++">增长年龄</button>
  <button @click="shallowReactive_person.job.salary++">增长薪水</button>
</template>

<script>
import { shallowRef, shallowReactive } from "vue";
export default {
  name: "App",
  setup() {
    let shallowRef_x = shallowRef(0);
    let shallowRef_person = shallowRef({
      name: "张三",
      age: 18,
      job: {
        salary: 10,
      },
    });

    let shallowReactive_person = shallowReactive({
      name: "张三",
      age: 18,
      job: {
        salary: 10,
      },
    });

    return {
      shallowRef_x,
      shallowRef_person,
      shallowReactive_person,
    };
  },
};
</script>

<style>
</style>
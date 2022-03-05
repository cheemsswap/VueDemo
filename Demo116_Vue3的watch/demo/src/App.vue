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
import { ref, reactive, watch } from "vue";
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
    //监听一个ref 参数 并默认开启一次
    watch(
      name,
      (newval, oldval) => {
        console.log("sum:", newval, oldval);
      },
      {
        immediate: true,
      }
    );
    //监听多个ref 参数
    watch([sum, name], (newval, oldval) => {
      console.log("sum或者name发生变化:", newval, oldval);
    });

    //监听一个reactive对象
    watch(person, (newval) => {
      console.log("person发生变化", newval);
    });

    //监听一个reactive对象里面的某个基础属性
    watch(
      () => person.age,
      (newval, oldval) => {
        console.log("年龄发生变化", newval, oldval);
      }
    );

    //监听一个reactive对象里面的一个某个对象里面的属性
    watch(
      () => person.job.salary,
      (newval, oldval) => {
        console.log("薪水发生变化", newval, oldval);
      }
    );

    //监听一个reactive对象里面的对象一些属性
    watch([() => person.age, () => person.job.salary], (newval, oldval) => {
      console.log("年龄或者薪水发生变化", newval, oldval);
    });

    //监听一个reactive对象里面Proxy 注意要开启深度监听默认不开启深度监听
    watch(
      person.job,
      (newval) => {
        console.log("工作里面有个东西变化了", newval);
      },
      { deep: true }
    );

    return { sum, name, person };
  },
};
</script>

<style>
</style>

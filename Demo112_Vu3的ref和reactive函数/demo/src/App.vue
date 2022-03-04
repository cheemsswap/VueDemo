<script setup>
import { ref, reactive } from "vue";

let name = ref("瑟瑟发抖");

let person = reactive({
  age: 18,
  job: {
    type: "前端开发工程师",
    salary: 100
  },
  list: ["aaa", "bbbb", "ccc"]
});
function updateName() {
  name.value = "害怕";
}
function addAge() {
  person.age++;
}
</script>

<template>
  <div>
    <h2>你好{{name}},我今年{{person.age}}岁</h2>
    <h3>我的工作是:{{person.job.type}},我的薪水是:{{person.job.salary}}</h3>
    <ul>
      <li v-for="(item,index) of person.list" :key="index">{{item}}</li>
    </ul>
    <button @click="updateName">修改姓名</button>
    <button @click="addAge">点我增加年龄</button>
    <button @click="person.job.salary+=100">点我增加薪水</button>
    <button @click="person.list[0] = '害怕'+(++person.age)">点我修改数组的某个参数</button>
  </div>
</template>

<style>
</style>

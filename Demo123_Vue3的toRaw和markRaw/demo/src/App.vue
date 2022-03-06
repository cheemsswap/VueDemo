<template>
  <h1>
    toRaw将reactive响应式数据 将响应式proxy对象转变成object对象，而ref数据不行
  </h1>
  <h2>姓名:{{ person.name }}</h2>
  <h2>年龄:{{ person.age }}</h2>
  <h2>薪水:{{ person.job.salary }}</h2>
  <h2 v-show="person.car">汽车:{{ person.car }}</h2>
  <button @click="person.age++">增长年龄</button>
  <button @click="person.job.salary++">增加薪水</button>
  <button @click="getPersonInfo">获取用户信息 object在控制台输出</button>
  <hr />
  <h1>
    markRaw 将object对象标记为无法被响应式数据捕获的数据(注意reactive对象不行)
    修改无法被监听
  </h1>
  <button @click="addCar">添加汽车(未标记)</button>
  <button @click="addMarkCar">添加汽车(已标记)</button>
  <br />
  <button @click="updateCar">修改汽车名称</button>
</template>

<script>
import { reactive, toRaw, markRaw } from "vue";
export default {
  name: "App",
  setup() {
    let person = reactive({
      name: "张三",
      age: 18,
      job: {
        salary: 20,
      },
    });
    function getPersonInfo() {
      console.log(toRaw(person));
    }
    function addCar() {
      person.car = {
        name: "我是普通的添加",
      };
    }
    function addMarkCar() {
      person.car = markRaw({
        name: "我是markRaw添加的",
      });
    }
    function updateCar() {
      person.car && (person.car.name += "!") && console.log(person.car.name);
    }
    return {
      person,
      getPersonInfo,
      addCar,
      addMarkCar,
      updateCar,
    };
  },
};
</script>

<style>
</style>
<template>
  <h2>姓名:{{name}}</h2>
  <h2>年龄:{{age}}</h2>
  <button @click="sayHello">说话</button>
</template>


<script>
import { h } from "vue";
export default {
  name: "App",
  setup() {
    let name = "张三";
    let age = 13;
    function sayHello() {
      alert(`hello vue3 ${name}`);
    }

    //1、返回一个对象
    return {
      name,
      age,
      sayHello
    };

    //2、返回一个函数 渲染函数
    // return () => h("h2", "害怕");
  }
};
</script>

<template>
  <div id="app">
    <button @click="fun1">点我获取接口信息1</button>
    <button @click="fun2">点我获取接口信息2</button>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "App",
  methods: {
    fun1() {
      axios.get("http://localhost:8080/a/students").then(
        (data) => {
          console.log("获得接口信息", data.data);
        },
        (error) => {
          console.log("异常 错误信息:", error.message);
        }
      );
    },
    fun2() {
      axios.get("http://localhost:8080/b/cars").then(
        (data) => {
          console.log("获得接口信息", data.data);
        },
        (error) => {
          console.log("异常 错误信息:", error.message);
        }
      );
    },
  },
};
</script>

<style>
</style>

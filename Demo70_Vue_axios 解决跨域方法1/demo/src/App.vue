<template>
  <div id="app">
    <button @click="fun">点我获取信息</button>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "App",
  methods: {
    fun() {
      axios.get("http://localhost:8080/students").then(
        (data) => {
          console.log("请求成功了", data.data);
        },
        (error) => {
          console.log("请求失败了", error.message);
        }
      );
    },
  },
};
</script>

<style>
</style>

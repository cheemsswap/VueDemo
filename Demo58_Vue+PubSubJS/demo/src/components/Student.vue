<template>
  <div>
    <h2>学生姓名:{{ name }}</h2>
    <h2>学生年龄:{{ age }}</h2>
    <h2>收到的信息:{{ text }}</h2>
    <button @click="fun">发送信息给学校</button>
  </div>
</template>

<script>
import { PubSub } from "pubsub-js";
export default {
  data() {
    return {
      name: "张三",
      age: 18,
      text: "",
    };
  },
  mounted() {
    //监听订阅 监听来自School发布的订阅
    PubSub.subscribe("jsSchool", (name, text) => {
      this.text = text;
    });
  },
  methods: {
    fun() {
      PubSub.publish("jsStudent", this.name);
    },
  },
};
</script>

<style>
</style>
<template>
  <div>
    <h2>学校名称:{{ name }}</h2>
    <h2>学校地址:{{ address }}</h2>
    <h2>接受信息:{{ text }}</h2>
    <button @click="fun">点我提交信息给学生</button>
  </div>
</template>

<script>
import { PubSub } from "pubsub-js";
export default {
  data() {
    return {
      name: "家里蹲大学",
      address: "家里",
      text: "",
    };
  },
  methods: {
    fun() {
      PubSub.publish("jsSchool", this.name);
    },
  },
  mounted() {
    PubSub.subscribe("jsStudent", (name, text) => {
      this.text = text;
    });
  },
};
</script>

<style>
</style>
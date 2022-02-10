<template>
  <div id="app">
    <button @click="fun1">点我 我是默认的DOM事件</button>
    <button @xxx="fun2">
      我是DOM原生元素 我绑定了一个自定义事件 我无法被触发的
    </button>
    <event-1 @click.native="fun3" />
    <event-2 @click="fun4" ref="e2" />
  </div>
</template>

<script>
import Event1 from "./components/Event1.vue";
import Event2 from "./components/Event2.vue";
export default {
  name: "App",
  components: { Event1, Event2 },
  methods: {
    fun1() {
      console.log("fun1");
    },
    fun2() {
      console.log("fun2");
    },
    fun3() {
      console.log("fun3");
    },
    fun4(aaa = "") {
      console.log("fun4" + aaa);
    },
    fun5(aaa = "") {
      console.log("fun5" + aaa);
    },
  },
  mounted() {
    this.$refs.e2.$on("xxx", this.fun5);
  },
};
</script>

<style>
</style>

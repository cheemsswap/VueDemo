<template>
  <div id="root">
    <button @click="fun1">点击进入效果</button>
    <button @click="fun2">点击消失效果</button>
    <transition
      name="animate__animated animate__bounce"
      enter-active-class="animate__lightSpeedInRight"
      leave-active-class="animate__rotateOutDownLeft"
    >
      <h2 v-show="f1">{{ text }}</h2>
    </transition>
  </div>
</template>

<script>
import "animate.css";
export default {
  data() {
    return {
      text: "你好",
      f1: false,
    };
  },
  methods: {
    fun1() {
      this.f1 = true;
    },
    fun2() {
      this.f1 = false;
    },
  },
};
</script>

<style>
#root {
  width: 100%;
  height: 100vh;
  overflow: hidden;
}
</style>
<template>
  <h2>isRef:判断是否为Ref对象</h2>
  <h2>isReactive:判断是否为reactive对象</h2>
  <h2>isReadonly:判断是否为readonly对象</h2>
  <h2>isProxy:判断是否为readonly或者reactive对象</h2>
</template>

<script>
import {
  reactive,
  readonly,
  ref,
  isRef,
  isReactive,
  isReadonly,
  isProxy,
} from "vue";
export default {
  name: "App",
  setup() {
    let name = ref("张三");
    let person = reactive({
      name: "张三",
      age: 18,
    });
    let person_readonly = readonly(person);
    console.log(isRef(name));
    console.log(isReactive(person));
    console.log(isReadonly(person_readonly));
    console.log(isProxy(person_readonly));
    console.log(isProxy(person));
  },
};
</script>

<style>
</style>
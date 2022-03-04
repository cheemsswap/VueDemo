<template>
  <Demo :person="person" @sayHello="sayHello">
    <template #abc>
      <span>我是名称为abc插槽里面的内容</span>
    </template>
  </Demo>
</template>

<script>
import Demo from "./components/Demo.vue";
import { reactive } from "vue";
export default {
  name: "App",
  components: {
    Demo,
  },
  setup() {
    let person = reactive({
      name: "张三",
      age: 20,
      job: "前端开发工程师",
    });
    function sayHello(val) {
      console.log(`大家好 我是App的方法 我接受到了${val}`);
    }
    return {
      sayHello,
      person,
    };
  },
};
</script>

<style>
</style>
<template>
  <div>
    <h2>我是父组件 我可以获取到老子共享的车 {{ name }}--{{ price }}</h2>
    <Grandson />
  </div>
</template>

<script>
import Grandson from "./Grandson.vue";
import { reactive, toRefs, provide, inject } from "vue";
export default {
  name: "Son",
  components: {
    Grandson,
  },
  setup() {
    let car = inject("car");
    return {
      ...toRefs(car),
    };
  },
};
</script>

<style scoped>
div {
  background-color: rgb(0, 255, 85) !important;
  border-radius: 5px;
  padding: 10px;
}
</style>
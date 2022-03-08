<template>
  <div>
    <h2>我是祖组件 我打算给我的后代都有个参数汽车 {{ name }}--{{ price }}</h2>
    <Son />
  </div>
</template>

<script>
import { reactive, toRefs, provide, inject } from "vue";
import Son from "./comporent/Son.vue";
export default {
  name: "App",
  components: {
    Son,
  },
  setup() {
    let car = reactive({
      name: "奔驰",
      price: 10,
    });
    provide("car", car);
    return {
      ...toRefs(car),
    };
  },
};
</script>

<style scoped>
div {
  background-color: red;
  border-radius: 5px;
  padding: 10px;
}
</style>
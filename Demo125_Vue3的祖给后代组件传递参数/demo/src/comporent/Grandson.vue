<template>
  <div id="grandson">
    <h2>我是孙组件 我可以获取到爷爷共享的车 {{ name }}--{{ price }}</h2>
  </div>
</template>

<script>
import { reactive, toRefs, provide, inject } from "vue";
export default {
  name: "Grandson",
  setup() {
    let car = inject("car");
    return {
      ...toRefs(car),
    };
  },
};
</script>

<style>
#grandson {
  background-color: rgb(255, 0, 179) !important;
  border-radius: 5px;
  padding: 10px;
}
</style>
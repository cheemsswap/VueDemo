<template>
  <div class="father">
    <h2>我是父亲</h2>
    <ul>
      <li>我有来自爷爷传来的 $attrs</li>
      <li v-for="(attrs, key) of $attrs" :key="attrs">{{ key }}:{{ attrs }}</li>
    </ul>
    <son v-bind="$attrs" v-on="$listeners" />
  </div>
</template>

<script>
import Son from "./Son.vue";
export default {
  components: { Son },
};
</script>

<style scoped>
.father {
  padding: 20px;
  background-color: aqua;
}
</style>
<template>
  <div class="grandpa">
    <h2>我是爷爷</h2>
    <ul>
      <li>我有来自APP传来的 $attrs</li>
      <li v-for="(attrs, key) of $attrs" :key="attrs">{{ key }}:{{ attrs }}</li>
    </ul>
    <father v-bind="$attrs" v-on="$listeners" />
  </div>
</template>

<script>
import Father from "./Father.vue";
export default {
  components: { Father },
};
</script>

<style scoped>
.grandpa {
  padding: 20px;
  background-color: rgb(255, 0, 0);
}
</style>
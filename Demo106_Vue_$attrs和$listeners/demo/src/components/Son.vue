<template>
  <div class="son" @click="$emit('click')">
    <h2>我是孙子</h2>
    <ul>
      <li>我有来自父亲传来的 $attrs</li>
      <li v-for="(attrs, key) of $attrs" :key="attrs">{{ key }}:{{ attrs }}</li>
    </ul>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.son {
  padding: 20px;
  height: 300px;
  background-color: brown;
}
</style>
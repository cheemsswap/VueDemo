<template>
  <div class="card">
    <h3>{{ title }}</h3>
    <slot>我是默认值，如果没有使用插槽，我则会显示</slot>
  </div>
</template>

<script>
export default {
  props: ["title"],
};
</script>

<style>
.card {
  width: 300px;
  height: 500px;
  background-color: beige;
}
.card > h3 {
  width: 100%;
  height: 50px;
  background-color: blue;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>